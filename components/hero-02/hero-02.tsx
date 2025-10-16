import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React from "react";
import AvatarGroup5 from "@/components/avatargroups5";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";

const Hero02 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 items-center relative">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "absolute inset-0 -z-10 pointer-events-none",
            "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
          )}
        />
        <div>
          <Badge
            variant="secondary"
            className="rounded-full py-1 border-border"
            asChild
          >
            <Link href="#">New — AI flows & lead intelligence</Link>
          </Badge>
          <div className="mt-4 flex flex-col items-start gap-1">
            <AvatarGroup5 />
            <span className="text-sm text-muted-foreground">4.9 Rating from over 14 clients</span>
          </div>
          <h1 className="mt-6 max-w-[38ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-[3.25rem] font-semibold leading-[1.05]! tracking-tighter">
            Dynamic AI chat surveys that derive customer insights automagically.
          </h1>
          <p className="mt-6 max-w-[60ch] sm:text-lg">
            Traditional surveys ask the same questions to everyone. Evallo asks the right questions to each person, uncovering deeper insights. No logic trees, no setup pain - Deploy in minutes.
          </p>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4">
            <Button size="lg" className="rounded-full text-base w-full sm:w-auto" asChild>
              <Link href="https://pramodgeorge.com/meet">Request a Demo <ArrowUpRight className="h-5! w-5!" /></Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-full text-base shadow-none w-full sm:w-auto"
              asChild
            >
              <Link href="https://discord.gg/K32YGWADZW"><CirclePlay className="h-5! w-5!" /> Join Discord</Link>
            </Button>
          </div>
        </div>
            <img
              src="https://evallo.app/wp-content/uploads/2025/07/Evallo-Hero-Image-1-1024x1024.webp"
              alt="Evallo hero"
              className="w-full h-auto block relative z-10"
            />
      </div>
    </div>
  );
};

export default Hero02;
