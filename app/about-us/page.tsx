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
  return (
    <main>
  <Hero />
  <TestimonialBanner className="bg-black" cardClassName="w-full bg-neutral-800 text-white border-0 shadow-none" contentClassName="text-white" />
  <Footer />
    </main>
  );
}
