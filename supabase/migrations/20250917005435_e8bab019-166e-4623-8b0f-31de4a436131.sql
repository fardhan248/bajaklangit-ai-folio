-- Create user roles system
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'user',
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE SQL
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- Create function to get current user role
CREATE OR REPLACE FUNCTION public.get_current_user_role()
RETURNS app_role
LANGUAGE SQL
SECURITY DEFINER
STABLE
SET search_path = public
AS $$
  SELECT role FROM public.user_roles WHERE user_id = auth.uid() LIMIT 1;
$$;

-- Drop existing overly permissive contacts policies
DROP POLICY IF EXISTS "Only authenticated users can read contacts" ON public.contacts;
DROP POLICY IF EXISTS "Only authenticated users can update contacts" ON public.contacts;
DROP POLICY IF EXISTS "Only authenticated users can delete contacts" ON public.contacts;

-- Create secure admin-only policies for contacts
CREATE POLICY "Only admins can read contacts"
ON public.contacts
FOR SELECT
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can update contacts"
ON public.contacts
FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Only admins can delete contacts"
ON public.contacts
FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Keep public insert for contact form
-- (The existing "Allow public insert access to contacts" policy remains)

-- Create RLS policies for user_roles table
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

CREATE POLICY "Only admins can manage roles"
ON public.user_roles
FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Create function to automatically assign default user role on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.user_roles (user_id, role)
  VALUES (NEW.id, 'user');
  RETURN NEW;
END;
$$;

-- Create trigger to assign default role on user creation
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Add rate limiting for contact submissions (simple approach using a contacts_rate_limit table)
CREATE TABLE public.contacts_rate_limit (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT NOT NULL,
    ip_address INET,
    submission_count INTEGER DEFAULT 1,
    last_submission TIMESTAMP WITH TIME ZONE DEFAULT now(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

ALTER TABLE public.contacts_rate_limit ENABLE ROW LEVEL SECURITY;

-- Allow anyone to check/update rate limits (needed for contact form)
CREATE POLICY "Allow rate limit checks"
ON public.contacts_rate_limit
FOR ALL
USING (true);

-- Create function to check rate limiting
CREATE OR REPLACE FUNCTION public.check_contact_rate_limit(_email TEXT, _ip_address INET DEFAULT NULL)
RETURNS BOOLEAN
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
    rate_record RECORD;
    max_submissions_per_hour INTEGER := 5;
    time_window INTERVAL := '1 hour';
BEGIN
    -- Get existing rate limit record
    SELECT * INTO rate_record
    FROM public.contacts_rate_limit
    WHERE email = _email
    ORDER BY last_submission DESC
    LIMIT 1;
    
    -- If no record exists, create one and allow submission
    IF rate_record IS NULL THEN
        INSERT INTO public.contacts_rate_limit (email, ip_address)
        VALUES (_email, _ip_address);
        RETURN TRUE;
    END IF;
    
    -- If last submission was more than time_window ago, reset counter
    IF rate_record.last_submission < (now() - time_window) THEN
        UPDATE public.contacts_rate_limit
        SET submission_count = 1, last_submission = now(), ip_address = COALESCE(_ip_address, ip_address)
        WHERE id = rate_record.id;
        RETURN TRUE;
    END IF;
    
    -- If within time window, check if under limit
    IF rate_record.submission_count < max_submissions_per_hour THEN
        UPDATE public.contacts_rate_limit
        SET submission_count = submission_count + 1, last_submission = now()
        WHERE id = rate_record.id;
        RETURN TRUE;
    END IF;
    
    -- Rate limit exceeded
    RETURN FALSE;
END;
$$;