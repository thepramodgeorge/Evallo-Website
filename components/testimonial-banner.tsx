"use client"

import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type TestimonialBannerProps = {
  quote?: string;
  author?: string;
  role?: string;
  avatarSrc?: string;
  className?: string;
};

const TestimonialBanner: React.FC<TestimonialBannerProps> = ({
  quote = '“Evallo helped us triple qualified leads and halve our demo no-shows — the conversational flows are a game-changer for lead qualification.”',
  author = "Arjun Patel",
  role = "Head of Growth, Brightlane",
  avatarSrc = "https://evallo.app/wp-content/uploads/2025/07/Janardhan-300x300.png",
  className = "",
}) => {
  return (
    <section className={`flex items-center justify-center py-12 px-6 ${className}`}>
      <div className="max-w-(--breakpoint-lg) w-full mx-auto py-4">
        <Card className="w-full bg-muted text-foreground border-0 shadow-none">
          <CardContent className="space-y-6 text-left md:px-24 md:py-16">
            <blockquote className="text-xl sm:text-3xl font-semibold text-pretty text-left">
              {quote}
            </blockquote>

            <div className="flex items-center justify-start gap-4">
              <Avatar className="size-12">
                <AvatarImage src={avatarSrc} alt={author} />
                <AvatarFallback className="text-lg">{author?.charAt(0) ?? "A"}</AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-semibold">{author}</div>
                <div className="text-sm text-muted-foreground">{role}</div>
              </div>
            </div>

            {/* CTA removed per request */}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialBanner;
