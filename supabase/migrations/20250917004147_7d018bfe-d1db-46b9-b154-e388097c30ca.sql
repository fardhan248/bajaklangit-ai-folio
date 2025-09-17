-- Add secure RLS policies for contacts table to prevent data harvesting
-- Keep existing INSERT policy for contact form functionality
-- Add restricted policies for reading/modifying contact data

-- Policy to allow only authenticated users to read contacts (for admin dashboard)
CREATE POLICY "Only authenticated users can read contacts" 
ON public.contacts 
FOR SELECT 
TO authenticated
USING (true);

-- Policy to allow only authenticated users to update contacts (for admin management)
CREATE POLICY "Only authenticated users can update contacts" 
ON public.contacts 
FOR UPDATE 
TO authenticated
USING (true);

-- Policy to allow only authenticated users to delete contacts (for admin management)
CREATE POLICY "Only authenticated users can delete contacts" 
ON public.contacts 
FOR DELETE 
TO authenticated
USING (true);