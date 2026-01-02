import Hero from "@/components/hero-about";
import TestimonialBanner from "@/components/testimonial-banner";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Evallo - Why We Built the AI Chat Survey Platform",
  description: "We built Evallo after realizing survey tools made research harder than it needed to be. Our AI chat surveys run disciplined customer conversations that produce high-quality data you can trust. The better alternative to SurveyMonkey and Typeform.",
  keywords: [
    "about Evallo",
    "AI survey company",
    "chat survey platform",
    "survey tool alternative",
    "conversational AI surveys",
    "customer research platform"
  ],
  openGraph: {
    title: "About Evallo - Why We Built the AI Chat Survey Platform",
    description: "We built Evallo to make customer research easier. Our AI chat surveys produce high-quality data you can trust.",
    url: "https://evallo.app/about-us",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Evallo - Why We Built the AI Chat Survey Platform",
    description: "We built Evallo to make customer research easier. AI chat surveys that produce high-quality data.",
  },
  alternates: {
    canonical: "https://evallo.app/about-us",
  },
};

export default function AboutUsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Evallo",
    "url": "https://evallo.app",
    "logo": "https://evallo.app/evallo-logo.png",
    "description": "AI-powered chat survey platform for creating conversational surveys and collecting deeper customer insights. Founded in 2024 by Pramod George.",
    "founder": {
      "@type": "Person",
      "name": "Pramod George",
      "jobTitle": "Founder"
    },
    "foundingDate": "2024",
    "sameAs": [
      "https://twitter.com/evallo",
      "https://linkedin.com/company/evallo",
      "https://discord.gg/K32YGWADZW"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer support",
      "url": "https://evallo.app"
    },
    "areaServed": "Worldwide",
    "knowsAbout": [
      "AI Surveys",
      "Conversational Forms",
      "Customer Research",
      "User Feedback",
      "Market Research"
    ]
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Hero />
      <TestimonialBanner className="bg-black" cardClassName="w-full bg-neutral-800 text-white border-0 shadow-none" contentClassName="text-white" />
      <Footer />
    </main>
  );
}
