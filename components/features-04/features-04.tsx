import {
  BarChart3,
  Clock,
  Lock,
  UserX,
} from "lucide-react";
import Image from "next/image";

const features = [
  {
    icon: Clock,
    title: "Wasted Effort",
    description:
      "Complex, time-consuming logic to build.",
  },
  {
    icon: Lock,
    title: "Rigid & Dumb",
    description:
      "Questions can't adapt to interesting answers in real-time.",
  },
  {
    icon: UserX,
    title: "Poor Engagement",
    description:
      "Form-like interfaces feel like a chore, leading to drop-offs.",
  },
  {
    icon: BarChart3,
    title: "Surface-Level Data",
    description:
      "You get \"what\" they did, but never the \"why\" behind it.",
  },
];

const Features04Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="max-w-(--breakpoint-lg) w-full py-12 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em]">
          Static Surveys Are Killing Your Insights.
        </h2>
        <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
          Traditional survey tools are broken. You spend hours building complex logic flows, only to get a 2% completion rate and shallow data that doesn&apos;t tell you why.
        </p>
        <div className="mt-6 md:mt-10 w-full mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <div className="h-full">
            <div className="h-full flex flex-col justify-center space-y-6">
              {features.map(({ title, description, icon: Icon }, index) => (
                <div key={index} className="flex items-start gap-4">
                  <Icon className="w-6 h-6 mt-1 text-primary" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Media */}
          <div className="hidden md:flex w-full relative overflow-hidden self-stretch items-center justify-center bg-muted">
            <Image
              src="/convoluted%20survey.webp"
              alt="Complex survey logic whiteboard"
              width={1600}
              height={1000}
              style={{ height: '100%', width: 'auto' }}
              className="rounded-xl"
              priority={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features04Page;
