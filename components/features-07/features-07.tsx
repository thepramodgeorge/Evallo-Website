import {
  BookCheck,
  ChartPie,
  FolderSync,
  Goal,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Goal,
    title: "SaaS",
    description:
      "Qualify leads with AI-driven conversational flows, boosting trial conversions by 2.3x.",
  },
  {
    icon: BookCheck,
    title: "Agencies",
    description:
      "Streamline client onboarding with interactive forms that automate project kickoffs.",
  },
  {
    icon: ChartPie,
    title: "Real Estate",
    description:
      "Engage prospects with virtual tours and chat-based property inquiries.",
  },
  {
    icon: Users,
    title: "E-commerce",
    description:
      "Boost conversions with conversational checkouts that guide shoppers seamlessly.",
  },
  {
    icon: FolderSync,
    title: "Freelancers",
    description:
      "Showcase services with dynamic portfolios and adaptive inquiry forms.",
  },
  {
    icon: Zap,
    title: "Manufacturing",
    description:
      "Automate supply chain surveys for operational insights and efficiency.",
  },
  {
    icon: Goal,
    title: "Healthcare",
    description:
      "Improve patient intake with conversational forms that reduce drop-offs.",
  },
  {
    icon: BookCheck,
    title: "Education",
    description:
      "Enhance enrollment with interactive surveys for student engagement.",
  },
  {
    icon: ChartPie,
    title: "Finance",
    description:
      "Streamline loan applications with AI-assisted conversational workflows.",
  },
];

const Features07Page = () => {
  return (
    <section className="flex items-center justify-center py-12 px-6">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto py-8">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] sm:max-w-xl text-pretty sm:mx-auto sm:text-center">
          Tailored for Every Industry
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Discover how Evallo adapts to your sector with industry-specific conversational experiences.
        </p>
        <div className="mt-12 sm:mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-y-8">
          {features.map((feature, index) => (
            <Link key={index} href="#">
              <div className="flex gap-6 items-center rounded-lg mx-0 sm:mx-0 max-w-lg">
                <div className="h-24 aspect-square shrink-0 rounded-lg bg-muted" />
                <div className="">
                  <span className="font-semibold tracking-[-0.015em] text-lg">
                    {feature.title}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground text-pretty">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {/* CTA Button */}
        <div className="mt-8 flex justify-center">
          <Button asChild size="lg">
            <Link href="#">Create Your First Evallo in 2 mins</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Features07Page;
