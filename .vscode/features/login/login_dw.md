# Login feature - design & implementation notes

Last updated: 2025-09-16

Summary
-------
This document captures the implementation details and reasoning for converting the app's login flow to Google-only authentication using Supabase, adding logout handling, and wiring the sidebar user card to show the Google profile photo, name and email.

Goals
-----
- Remove email/password login option and use only Google OAuth.
- Ensure users are redirected to `/dashboard` after successful sign-in.
- Provide a working logout in the header and sidebar user menu that clears client session and redirects to landing page.
- Show the logged-in user's name, email and Google profile photo in the sidebar user card.

Files changed
-------------
- `components/login-form.tsx` — replaced the email/password form with a Google-only "Sign in with Google" button that calls `supabase.auth.signInWithOAuth({ provider: 'google', options: { redirectTo } })`. Added client-side session listener and redirect to `/dashboard` on sign-in.
- `components/site-header.tsx` — converted to Client Component; added `handleLogout` calling `supabase.auth.signOut()` and `router.push('/')`; added Logout button in header.
- `components/nav-user.tsx` — wired the dropdown "Log out" menu item to call `supabase.auth.signOut()` and redirect to `/` (via `next/navigation`). Introduced local state `localUser` and added logic to fetch the Supabase session/user and subscribe to auth state changes to update the displayed name/email/avatar.
- `components/app-sidebar.tsx` — replaced static placeholder user with client-side logic that calls `supabase.auth.getSession()` / `supabase.auth.getUser()` and subscribes to `onAuthStateChange` to update the sidebar user. Extracts name/email/avatar from `user.user_metadata` and `user.identities[0].identity_data`.
- `components/ui/avatar.tsx` — no change to file content, but used by `nav-user` to render avatar images.

Implementation notes
--------------------
- OAuth redirect: `signInWithOAuth` is called from the client with `options.redirectTo` pointing at `${window.location.origin}/dashboard`. That ensures the provider redirects back to the app after authentication. Note: the redirect URL must be whitelisted in the Supabase project's Redirect URLs.
- Client-side guard: The login form and app subscribe to `supabase.auth.onAuthStateChange`. When the `SIGNED_IN` event occurs or `supabase.auth.getSession()` returns a session, the app navigates to `/dashboard` using `router.push('/dashboard')`.
- Logout: `supabase.auth.signOut()` clears local session and triggers a `SIGNED_OUT` event. After sign-out the app navigates to `/`.
- Fetching Google profile photo: Supabase stores provider data in `user.user_metadata` and sometimes in `user.identities[0].identity_data` for OAuth providers. The code now prefers `identities[0].identity_data.picture` or `avatar_url` and falls back to `user_metadata.picture`.
- Cache busting: Browsers cache avatar images aggressively. To ensure a refreshed image after login, the code appends a `?cb=<timestamp>` cache-busting query parameter to external (http/https) avatar URLs.

Edge cases handled
------------------
- Missing environment variables: `lib/supabaseClient.ts` throws if `NEXT_PUBLIC_SUPABASE_URL` or `NEXT_PUBLIC_SUPABASE_ANON_KEY` are missing.
- Provider returns no picture: fallback to a placeholder avatar path (`/avatars/shadcn.jpg`) and initials are shown by `AvatarFallback`.
- User already signed in: the sidebar and login screen check for an existing session and redirect to `/dashboard` immediately.
- Sign-in or sign-out errors: code logs the error and shows a simple `alert` (login flow) or console error (logout); can be improved to show inline UI messages.

Testing & validation
---------------------
Manual steps to test locally:

1. Ensure `.env.local` contains `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY`. Ensure Google provider is enabled in Supabase and the redirect URL is listed.
2. Start dev server:

```powershell
npm run dev
```

3. Open `http://localhost:3000/login` and click "Sign in with Google".
4. Complete the OAuth flow and allow the app access. The user should be redirected to `/dashboard` and the sidebar user card should display your Google name, email and profile photo.
5. Click the Logout button in the header or the sidebar user menu to sign out — you should be redirected to `/`.

Debugging tips
--------------
- If the avatar doesn't update, open DevTools → Network and inspect the avatar URL. It should include `cb=<timestamp>` if it was external.
- Call `supabase.auth.getUser()` from the browser console to inspect the returned user object and confirm where the profile picture is stored:

```js
const supabase = getSupabaseClient()
supabase.auth.getUser().then(r => console.log(r))
```

If provider profile fields are under a different key, update the code paths in `app-sidebar.tsx` and `nav-user.tsx`.

Next steps / improvements
-------------------------
- Replace `alert()` with an inline error UI and a small toast notification system for better UX.
- Add a loading skeleton for the avatar and sidebar while session/user data is fetched.
- Consider server-side session retrieval and rendering the sidebar on the server for faster first paint.
- Add unit/integration tests for the login flow using a mocked Supabase client.

Files to review for this feature
--------------------------------
- `components/login-form.tsx`
- `components/app-sidebar.tsx`
- `components/nav-user.tsx`
- `components/site-header.tsx`
- `lib/supabaseClient.ts`

Contact
-------
If any of the Supabase responses differ from the patterns above, paste a console output of `supabase.auth.getUser()` and I will adapt the lookup to your project's exact user metadata shape.

