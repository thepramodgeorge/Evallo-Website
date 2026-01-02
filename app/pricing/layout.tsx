import React from "react";

// Minimal layout for the /pricing route so Next.js treats this file as a module.
// This intentionally keeps the parent's RootLayout structure and simply
// renders children. If you need a separate layout (header/aside) for pricing,
// we can extend this later.
export default function PricingLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return <>{children}</>;
}
