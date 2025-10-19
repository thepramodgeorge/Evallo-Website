import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    category: "For Marketing & Sales Teams",
    title: "Unlock the Language That Converts.",
    details:
      "Discover the exact words, pain points, and motivations that drive purchases. Craft messaging that resonates and close deals faster with real customer insights.",
    tutorialLink: "#",
  },
  {
    category: "For Customer Support Teams",
    title: "Transform Tickets into Strategic Insights.",
    details:
      "Uncover the root causes behind support issues before they scale. Proactively improve customer experience and provide product teams with actionable feedback.",
    tutorialLink: "#",
  },
  {
    category: "For Product Management Teams",
    title: "Validate Your Roadmap with Real Feedback.",
    details:
      "Stop guessing. Use dynamic conversations to prioritize features users truly need and will love, reducing churn and driving adoption.",
    tutorialLink: "#",
  },
  {
    category: "For UX Researchers",
    title: "Automate the Interview, Not the Insight.",
    details:
      "Scale qualitative research without losing depth. Conduct hundreds of adaptive conversations to uncover the \"why\" behind user behavior.",
    tutorialLink: "#",
  },
  {
    category: "For Founder Teams",
    title: "Find Product-Market Fit, Not Just Data Points.",
    details:
      "Get a direct line to your customers' deepest needs. Make critical strategic decisions with the qualitative insights that shape winning companies.",
    tutorialLink: "#",
  },
];

const Features06Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-lg) w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em]  text-pretty sm:mx-auto sm:text-center">
          From Data Points to &quot;Aha!&quot; Moments.
        </h2>
        <p className="mt-2 text-muted-foreground text-lg sm:text-xl sm:text-center">
          Imagine a research assistant that never sleeps. You tell it what you need to learn, and it conducts a natural, adaptive conversation with every single customer, digging for the golden nuggets of insight you would have otherwise missed.
        </p>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-12 gap-y-6 md:even:flex-row-reverse"
            >
              <div className="w-full aspect-[4/3] bg-muted rounded-xl border border-border/50 basis-1/2" />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-medium text-sm text-muted-foreground">
                  {feature.category}
                </span>
                <h4 className="my-3 text-2xl font-semibold tracking-tight">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground">{feature.details}</p>
                <Button asChild size="lg" className="mt-6 rounded-full gap-3">
                  <Link href={feature.tutorialLink}>
                    Start Building <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features06Page;
