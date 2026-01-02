"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { useState } from "react";
import { SignInDialog } from "@/components/signin-dialog";

// pricing config
const plans = [
  {
    name: "Starter",
    priceMonthly: 29,
    priceYearly: 290,
    description: "Best for individuals or small teams",
    features: [
      { title: "3 Evallos Total" },
      { title: "500 responses per month" },
      { title: "10 report generations per month" },
      { title: "Download list of responses (CSV or PDF)" },
      { title: "Customize your Chat UI" },
      { title: "Basic insights dashboard" },
      { title: "Remove Branding" },
    ],
    buttonText: "Start 7-Day Free Trial",
  },
  {
    name: "Lifetime Deal",
    priceOneTime: 499,
    description: "One-time purchase — lifetime access",
    features: [
      { title: "100 Evallos Total" },
      { title: "10000 responses per month" },
      { title: "30 report generations per month" },
      { title: "Download list of responses (CSV or PDF)" },
      { title: "Customize your Chat UI" },
      { title: "Basic insights dashboard" },
      { title: "Remove Branding" },
    ],
    buttonText: "Get Lifetime Deal",
    isPopular: true,
  },
  {
    name: "Pro",
    priceMonthly: 59,
    priceYearly: 590,
    description: "For power users and growing teams",
    features: [
      { title: "50 Evallos Total" },
      { title: "1000 responses per month" },
      { title: "20 report generations per month" },
      { title: "Download list of responses (CSV or PDF)" },
      { title: "Customize your Chat UI" },
      { title: "Basic insights dashboard" },
    ],
    buttonText: "Coming Soon",
    disabled: true,
  },
];

const Pricing03 = ({ maxWidthClass = "max-w-(--breakpoint-lg)", id }: { maxWidthClass?: string; id?: string }) => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id={id} className="flex flex-col items-center w-full px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] text-center">
        Pricing
      </h2>
      <Tabs
        value={selectedBillingPeriod}
        onValueChange={setSelectedBillingPeriod}
        className="mt-8"
      >
        <TabsList className="h-11 rounded-full">
          <TabsTrigger
            value="monthly"
            className="rounded-full data-[state=active]:shadow-none px-4"
          >
            Monthly
          </TabsTrigger>
          <TabsTrigger
            value="yearly"
            className="rounded-full data-[state=active]:shadow-none px-4"
          >
            Yearly
          </TabsTrigger>
        </TabsList>
      </Tabs>
  <div className={`mt-12 ${maxWidthClass} w-full mx-auto grid grid-cols-1 lg:grid-cols-3 items-start gap-8`}>
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative border rounded-xl p-6", {
              "border-2 border-primary py-10": plan.isPopular,
              "opacity-50": plan.disabled,
            })}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 rounded-full shadow-sm">
                Most popular
              </Badge>
            )}
            <div className="flex flex-col items-start mb-4">
              <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
              <div className="flex items-baseline gap-1 text-4xl font-semibold mb-2">
                ${plan.priceOneTime ?? (selectedBillingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly)}
                <span className="text-sm text-muted-foreground">
                  {plan.priceOneTime ? "once" : `/${selectedBillingPeriod === "monthly" ? "month" : "year"}`}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                {plan.description}
              </p>
            </div>
            <Button
              className="w-full rounded-full mb-4 cursor-pointer"
              variant={plan.isPopular ? "default" : "outline"}
              disabled={plan.disabled}
              onClick={() => setDialogOpen(true)}
            >
              {plan.buttonText}
            </Button>
            <Separator className="mb-4" />
            <ul className="space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <CircleCheck className={cn("w-5 h-5 mt-0.5 shrink-0", {
                    "text-primary": !plan.disabled,
                    "text-gray-400": plan.disabled,
                  })} />
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <SignInDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default Pricing03;
