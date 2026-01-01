"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CirclePlay } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import AvatarGroup5 from "@/components/avatargroups5";
import { cn } from "@/lib/utils";
import { GridPattern } from "@/components/ui/shadcn-io/grid-pattern";
import { Logo01, Logo02, Logo03, Logo04, Logo05, Logo06 } from "@/components/logos-06/logos";
import { Marquee } from "@/components/ui/marquee";
import { SignInDialog } from "@/components/signin-dialog";

const Hero02 = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-(--breakpoint-xl) w-full mx-auto px-6 py-12 flex flex-col gap-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center relative">
          <GridPattern
            width={30}
            height={30}
            x={-1}
            y={-1}
            strokeDasharray={"4 2"}
            className={cn(
              "absolute inset-0 -z-10 pointer-events-none",
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]"
            )}
          />
          <div className="relative z-10">
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
              <Button size="lg" className="rounded-full text-base w-full sm:w-auto cursor-pointer" onClick={() => setDialogOpen(true)}>
                Request a Demo <ArrowUpRight className="h-5! w-5!" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full text-base shadow-none w-full sm:w-auto"
                asChild
              >
                <Link href="https://discord.gg/K32YGWADZW" target="_blank" rel="noopener noreferrer"><CirclePlay className="h-5! w-5!" /> Join Discord</Link>
              </Button>
            </div>
          </div>
          <Image
            src="/Evallo-Hero-Image-1-1024x1024.webp"
            alt="Evallo hero"
            width={1024}
            height={1024}
            className="w-full h-auto block relative z-10"
          />
        </div>
        <div className="py-8">
          <h2 className="text-center text-xl font-medium">
            Trusted by teams at the top organizations
          </h2>
          <div className="mt-10 flex items-center justify-center gap-x-20 gap-y-10">
            <Marquee
              pauseOnHover
              className="[--duration:20s] [&_img]:mr-12 mask-x-from-70% mask-x-to-90%"
            >
              <Logo01 />
              <Logo02 />
              <Logo03 />
              <Logo04 />
              <Logo05 />
              <Logo06 />
            </Marquee>
          </div>
        </div>
      </div>
      <SignInDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </div>
  );
};

export default Hero02;
