import Hero from "@/components/hero-about";
import TestimonialBanner from "@/components/testimonial-banner";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Why We Built Evallo — The SurveyMonkey/ Typeform Alternative",
  description: "We built Evallo after realizing survey tools made research harder than it needed to be. Instead of forcing teams to design complex logic flows, you describe what you want to learn — and Evallo runs disciplined customer conversations that produce high-quality survey data you can trust.",
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
