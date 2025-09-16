# Supabase Integration for Bajak Langit

This website is designed to integrate with Supabase for backend functionality. The following tables need to be created in your Supabase database:

## Database Tables

### 1. testimonials
```sql
CREATE TABLE testimonials (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  profession VARCHAR(255) NOT NULL,
  sector VARCHAR(100) NOT NULL,
  testimonial TEXT NOT NULL,
  photo_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 2. projects
```sql
CREATE TABLE projects (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  sector VARCHAR(100) NOT NULL,
  description TEXT NOT NULL,
  image_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### 3. contacts
```sql
CREATE TABLE contacts (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## Setup Instructions

1. **Connect to Supabase**: Click the green Supabase button in the top right of the Lovable interface
2. **Create the tables** above in your Supabase SQL Editor
3. **Enable RLS (Row Level Security)** if needed for your use case
4. **Add sample data** to the testimonials and projects tables for testing

## Current Status

- ✅ Website structure is complete
- ✅ Placeholder data is being used for development
- ⏳ **TODO**: Connect to Supabase and implement data fetching
- ⏳ **TODO**: Implement contact form submission to Supabase

## Implementation Notes

- The Projects page will automatically switch from placeholder data to Supabase data once connected
- The Testimonials page will do the same
- The Contact form is ready to submit to Supabase but currently shows a success message only
- All components are built with proper error handling for when data is not available

## Files to Update After Supabase Connection

1. `src/pages/Projects.tsx` - Replace placeholder data with Supabase fetch
2. `src/pages/Testimonials.tsx` - Replace placeholder data with Supabase fetch  
3. `src/pages/Contact.tsx` - Implement actual form submission to Supabase

The website is fully functional without Supabase and will work perfectly for demonstration purposes using the placeholder content.