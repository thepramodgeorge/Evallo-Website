import Hero from "@/components/hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Why We Built Evallo — The SurveyMonkey/ Typeform Alternative",
  description: "We built Evallo after realizing survey tools made research harder than it needed to be. Instead of forcing teams to design complex logic flows, you describe what you want to learn — and Evallo runs disciplined customer conversations that produce high-quality survey data you can trust.",
};

export default function AboutUsPage() {
  return (
    <main>
      <Hero />
    </main>
  );
}
