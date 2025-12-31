import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  BarChart3,
  Heart,
  Lightbulb,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Uncover the real reason behind customer churn",
    description:
      "Go beyond surface-level feedback to understand the true drivers of customer dissatisfaction and retention issues.",
  },
  {
    icon: Lightbulb,
    title: "Discover unmet needs and feature requests you never considered",
    description:
      "Reveal hidden pain points and innovative ideas that traditional surveys and analytics miss completely.",
  },
  {
    icon: Target,
    title: "Validate a new idea with rich, qualitative feedback, not just a number",
    description:
      "Test concepts with deep, contextual insights that explain why customers feel a certain way about your ideas.",
  },
  {
    icon: Heart,
    title: "Make every customer feel heard, increasing loyalty and satisfaction",
    description:
      "Create meaningful connections through personalized conversations that build trust and long-term relationships.",
  },
  {
    icon: BarChart3,
    title: "Scale your research efforts without sacrificing quality",
    description:
      "Conduct hundreds of in-depth conversations simultaneously, maintaining the depth and nuance of one-on-one interviews.",
  },
  {
    icon: TrendingUp,
    title: "Track sentiment and trends over time for proactive insights",
    description:
      "Monitor evolving customer opinions and emerging patterns to anticipate needs before they become problems.",
  },
];

const Features05Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-(--breakpoint-lg) w-full py-10 px-6">
        <h2 className="text-4xl md:text-[2.5rem] md:leading-[1.2] font-semibold tracking-[-0.03em] text-pretty">
          From Data Points to &quot;Aha!&quot; Moments.
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl">
          Traditional forms are rigid. If a user gives a fascinating answer to question #3, Typeform just moves to question #4. You miss the &quot;Why.&quot; The Evallo Difference? Our AI listens. It asks the follow-up question you would have asked if you were there in person.
        </p>
        <div className="mt-10 w-full mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="flex flex-col border rounded-xl overflow-hidden shadow-none pb-0"
            >
              <CardHeader>
                <feature.icon />
                <h4 className="mt-3! text-xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="mt-1 text-muted-foreground text-[17px]">
                  {feature.description}
                </p>
              </CardHeader>
              <CardContent className="mt-auto px-0 pb-0">
                <div className="bg-muted h-40 ml-6 rounded-tl-xl" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features05Page;
