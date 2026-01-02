import { Metadata } from "next"

export const metadata: Metadata = {
  title: "AI Survey Pricing - Affordable Plans for Every Team | Evallo",
  description: "Transparent pricing for AI-powered chat surveys. Start free, scale as you grow. Get unlimited surveys, advanced analytics, and AI insights. No hidden fees. 7-day free trial.",
  keywords: [
    "AI survey pricing",
    "survey platform pricing",
    "chat survey cost",
    "AI survey tool pricing",
    "survey software plans",
    "conversational survey pricing"
  ],
  openGraph: {
    title: "AI Survey Pricing - Affordable Plans for Every Team",
    description: "Transparent pricing for AI-powered chat surveys. Start free, scale as you grow. 7-day free trial available.",
    url: "https://evallo.app/pricing",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Survey Pricing - Affordable Plans for Every Team",
    description: "Transparent pricing for AI-powered chat surveys. Start free, scale as you grow.",
  },
  alternates: {
    canonical: "https://evallo.app/pricing",
  },
}

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Evallo AI Survey Platform",
    "description": "AI-powered chat survey platform with conversational forms and advanced analytics",
    "brand": {
      "@type": "Brand",
      "name": "Evallo"
    },
    "offers": [
      {
        "@type": "Offer",
        "name": "Starter Plan",
        "price": "29",
        "priceCurrency": "USD",
        "billingIncrement": "Monthly",
        "description": "Best for individuals or small teams"
      },
      {
        "@type": "Offer",
        "name": "Lifetime Deal",
        "price": "499",
        "priceCurrency": "USD",
        "description": "One-time purchase — lifetime access"
      },
      {
        "@type": "Offer",
        "name": "Pro Plan",
        "price": "59",
        "priceCurrency": "USD",
        "billingIncrement": "Monthly",
        "description": "For power users and growing teams"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {children}
    </>
  )
}
