import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Survey Pricing - Affordable Plans for Every Team | Evallo",
  description: "Transparent pricing for AI-powered chat surveys. Start free, scale as you grow. Get unlimited surveys, advanced analytics, and AI insights. No hidden fees. Compare plans and features.",
  keywords: [
    "AI survey pricing",
    "chat survey cost",
    "survey tool pricing",
    "Evallo pricing",
    "conversational survey plans",
    "AI form builder cost",
    "Typeform alternative pricing",
    "SurveyMonkey alternative pricing",
  ],
  openGraph: {
    title: "AI Survey Pricing - Affordable Plans for Every Team | Evallo",
    description: "Transparent pricing for AI-powered chat surveys. Start free, scale as you grow. No hidden fees.",
    url: "https://evallo.app/pricing",
    type: "website",
    images: [
      {
        url: "/Evallo-Hero-Image-1-1024x1024.webp",
        width: 1024,
        height: 1024,
        alt: "Evallo AI Survey Platform Pricing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Survey Pricing - Affordable Plans | Evallo",
    description: "Transparent pricing for AI-powered chat surveys. Start free, scale as you grow.",
  },
  alternates: {
    canonical: "https://evallo.app/pricing",
  },
};

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
