# Dev notes — Sidebar button loading state

Date: 2025-09-15

Purpose
-------
Document the changes made to show a temporary "loading" state on a sidebar navigation button (Dashboard) while the app navigates / the new page loads.

Files changed
-------------
- `components/nav-main.tsx` — updated to add a small spinner + "Loading" label when a nav item is clicked; added a small timeout fallback to clear the loading state.

What I changed (step-by-step)
-----------------------------
1. Converted the file to a client component (if not already) with `"use client"` so it can use hooks.

2. Added a compact inline `Spinner` component (SVG) to avoid pulling in external deps. Example:

```tsx
function Spinner() {
	return (
		<svg className="animate-spin mr-2" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" opacity="0.25" />
			<path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
		</svg>
	)
}
```

3. Added client-side state to track which route is currently being navigated to:

```ts
const [loadingRoute, setLoadingRoute] = React.useState<string | null>(null)

function handleNavigate(url: string) {
	setLoadingRoute(url)
}
```

4. Hooked `handleNavigate` to `Link` clicks (the Dashboard link / other real nav items):

```tsx
<Link href={item.url} onClick={() => handleNavigate(item.url)}>
	{loadingRoute === item.url ? (
		<>
			<Spinner />
			<span>Loading</span>
		</>
	) : (
		<>
			{item.icon && <item.icon />}
			<span>{item.title}</span>
		</>
	)}
</Link>
```

5. Fallback / clearing behaviour: because the App Router doesn't expose simple per-link navigation events inside arbitrary client components, I added a short timeout to clear the loading state after ~1.5s so the UI doesn't stay blocked if navigation finishes but no event was captured:

```ts
React.useEffect(() => {
	if (!loadingRoute) return
	const timeout = setTimeout(() => setLoadingRoute(null), 1500)
	return () => clearTimeout(timeout)
}, [loadingRoute])
```

Why this approach?
-------------------
- It's a small, self-contained UX improvement that provides immediate feedback when the user clicks a nav item that triggers a potentially slow navigation.
- It avoids adding new dependencies.

Limitations and alternatives (recommended improvements)
-----------------------------------------------------
- App Router navigation events: The App Router doesn't surface simple client-side navigation start/complete events to arbitrary components. If you need accurate navigation lifecycle events, consider:
	- Using the root layout to detect navigations (e.g., `usePathname` + effect) and expose a context or a small event emitter for nav state.
	- Using React `useTransition` and `startTransition` when performing programmatic navigations so you can get `isPending` state in the component that triggers navigation.
	- Using a global progress indicator (e.g., NProgress) started when navigation begins and stopped on route change.

- Accessibility: When setting a loading state, consider adding `aria-busy`, `aria-disabled`, and preventing further clicks on the same item until navigation completes.

- Robustness: The current implementation uses a fixed timeout to clear the loading indicator as a fallback. If you prefer, you can wire this into a more deterministic lifecycle (e.g., wait for `usePathname()` to change in a layout-level effect and then clear the loading state).

Next steps / todo
-----------------
- (Optional) Wire up a layout-level navigation watcher to clear loading state reliably on navigation completion.
- (Optional) Replace the timeout with a Promise-based approach that awaits `router.push(...)` when doing programmatic navigation.
- (Optional) Add tests for the nav button UX if you have a component test harness in place.

Commit notes
------------
- Edit made in `components/nav-main.tsx`. If not yet committed, consider the commit message: `NavMain: show loading state for route clicks (Dashboard)` with a body explaining the spinner + fallback timeout.

If you want, I can also implement the more robust approach: add a small navigation context in `app/layout.tsx` (or a client-level provider) that tracks `isNavigating` precisely using layout-level path detection, and then consume that in `NavMain` to display per-item loading states without fallbacks.

