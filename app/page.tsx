import Hero02 from "@/components/hero-02/hero-02"
import TestimonialBanner from "@/components/testimonial-banner"
import Features04Page from "@/components/features-04/features-04"
import Pricing03 from "@/components/pricing/pricing-03"
import { Metadata } from "next"
import dynamic from "next/dynamic"

// Dynamic imports for below-fold components to reduce initial bundle
const FAQ07 = dynamic(() => import("@/components/faq-07"), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">Loading FAQ...</div>,
})
const Testimonial04 = dynamic(() => import("@/components/testimonial-04/testimonial-04"))
const Footer = dynamic(() => import("@/components/footer"))
const Features06Page = dynamic(() => import("@/components/features-06/features-06"))
const HowItWorksSection = dynamic(() => import("@/components/features-02/features-02"))

export const metadata: Metadata = {
  title: "AI Survey Creator - Chat-Based Surveys for Better Insights | Evallo",
  description: "Create AI-powered chat surveys that feel like conversations. Get 40% higher completion rates and deeper customer insights. Advanced analytics, smart logic, seamless integrations. Start free.",
  keywords: [
    "AI survey creator",
    "AI chat surveys",
    "conversational survey tool",
    "chat-based survey platform",
    "AI-powered surveys",
    "interactive survey builder",
    "customer feedback AI",
    "survey analytics platform"
  ],
  openGraph: {
    title: "AI Survey Creator - Chat-Based Surveys for Better Insights",
    description: "Create AI-powered chat surveys that feel like conversations. Get 40% higher completion rates and deeper insights.",
    url: "https://evallo.app",
    type: "website",
    images: [
      {
        url: "/Evallo-Hero-Image-1-1024x1024.webp",
        width: 1024,
        height: 1024,
        alt: "Evallo AI Survey Creator Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Survey Creator - Chat-Based Surveys for Better Insights",
    description: "Create AI-powered chat surveys that feel like conversations. Get 40% higher completion rates.",
  },
  alternates: {
    canonical: "https://evallo.app",
  },
}

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "Evallo",
        "applicationCategory": "BusinessApplication",
        "description": "AI-powered chat survey platform for creating conversational surveys and collecting deeper customer insights",
        "url": "https://evallo.app",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "description": "Free plan available"
        },
        "operatingSystem": "Web Browser",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "127"
        },
        "featureList": [
          "AI-powered chat surveys",
          "Conversational survey builder",
          "Advanced analytics",
          "Smart logic and branching",
          "Real-time insights",
          "Seamless integrations"
        ]
      },
      {
        "@type": "Organization",
        "name": "Evallo",
        "url": "https://evallo.app",
        "logo": "https://evallo.app/evallo-logo.png",
        "description": "AI survey platform for creating conversational surveys and getting deeper customer insights",
        "sameAs": [
          "https://twitter.com/evallo"
        ]
      },
      {
        "@type": "WebSite",
        "name": "Evallo",
        "url": "https://evallo.app",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://evallo.app/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  }

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
    {/* Original hero commented out for replacement - keep for reference */}
    {/* <Hero /> */}
    <Hero02 />
    {/* Logo marquee under hero */}
    <TestimonialBanner />
    <Features04Page />
    {/* <Features05Page />*/}
    <Features06Page />
    <HowItWorksSection id="how-it-works" />
    <Testimonial04 />
    {/*<Features07 />*/}
  <Pricing03 maxWidthClass="max-w-7xl" id="pricing" />
    <TestimonialBanner 
      quote="We replaced SurveyMonkey with Evallo. Our survey completion rates increased by 40%, and we get richer insights from every response."
      author="Sarah L"
      role="Head of Research, Greenhouse"
      avatarSrc="https://randomuser.me/api/portraits/women/81.jpg"
    />
    <FAQ07 />
    <Footer />
    </>
  )
}
