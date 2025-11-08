# Sign In Dialog Implementation

## Overview
The "Sign in" button on the landing page navbar now opens a dialog that collects user information for an invite-only waitlist instead of redirecting to a login page.

## Files Created/Modified

### New Files
1. **`components/signin-dialog.tsx`** - Dialog component with form to collect name and email
2. **`app/api/waitlist/route.ts`** - API endpoint to save submissions to Supabase
3. **`supabase-waitlist-setup.sql`** - SQL script to create the waitlist table in Supabase

### Modified Files
1. **`components/ui/navbar-wrapper.tsx`** - Updated Sign in buttons (desktop and mobile) to open the dialog

## How It Works

### User Flow
1. User clicks "Sign in" button on navbar (desktop or mobile)
2. Dialog opens with message: "Access to Evallo Version 3 is currently invite-only"
3. User enters their name and email
4. Form submits to `/api/waitlist` endpoint
5. Success message displays, then dialog closes after 2 seconds

### Data Storage
- Submissions are saved to a `waitlist` table in Supabase
- Table structure: `id` (UUID), `name` (TEXT), `email` (TEXT, UNIQUE), `created_at` (TIMESTAMP)
- Email validation and duplicate prevention
- Row Level Security enabled for data protection

### Accessing the Data
- **Supabase Dashboard**: Go to your Supabase project dashboard → Table Editor → waitlist table
- **API Access**: Use Supabase client to query the waitlist table
- **Export**: Use Supabase's built-in export functionality or query via API

## Setup Instructions

### 1. Create the Waitlist Table
Run the SQL script `supabase-waitlist-setup.sql` in your Supabase SQL Editor:

```sql
-- Copy and paste the contents of supabase-waitlist-setup.sql
```

### 2. Environment Variables
Ensure your Supabase environment variables are set:
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 3. Test the Implementation
1. Start the dev server: `npm run dev`
2. Click "Sign in" on the navbar
3. Fill in the form and submit
4. Check your Supabase dashboard to see the new entry

## Security Features

- **Email Validation**: Server-side email format validation
- **Duplicate Prevention**: UNIQUE constraint on email field
- **Row Level Security**: RLS policies control data access
- **Input Sanitization**: Basic validation on name and email fields

## Notes

- The waitlist table prevents duplicate emails automatically
- Data is stored securely in Supabase with proper access controls
- The dialog provides immediate feedback to users
- All submissions include timestamps for tracking

## Troubleshooting

### Button Not Working
- Check browser console for JavaScript errors
- Ensure the component is properly imported
- Verify Supabase environment variables are set

### API Errors
- Check Supabase dashboard for table creation
- Verify RLS policies are applied
- Check server logs for detailed error messages

### Data Not Appearing
- Confirm the waitlist table exists in Supabase
- Check that RLS policies allow inserts
- Verify the API endpoint is receiving requests
