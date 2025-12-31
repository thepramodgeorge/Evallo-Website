import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";

export default function Hero() {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        <div className="my-auto">
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.2]! tracking-[-0.035em]">
            About us
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg text-foreground/80">
            In 2024, Pramod George, Evallo's Founder built Evallo after realizing survey tools made research harder than it needed to be. Instead of forcing teams to design complex logic flows, you describe what you want to learn, and Evallo runs disciplined customer conversations that produce high-quality survey data you can trust.
          </p>
          <p className="mt-4 max-w-[60ch] text-lg text-foreground/80">
            Join us in our journey to build the world's most convinient and intelligent survey platform.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Get Started <ArrowUpRight className="h-5! w-5!" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none"
            >
              <CirclePlay className="h-5! w-5!" /> Watch Demo
            </Button>
          </div>
        </div>
        <div className="w-full aspect-video lg:aspect-auto lg:w-full lg:h-screen rounded-xl lg:rounded-none overflow-hidden bg-white">
          <img
            src="/Pramod%20George%20Hero%20section%20WEBSITE%20IMAGE.webp"
            alt="Pramod George Hero Image"
            className="w-full h-full object-contain object-center lg:object-center rounded-xl lg:rounded-none"
          />
        </div>
      </div>
    </div>
  );
}
