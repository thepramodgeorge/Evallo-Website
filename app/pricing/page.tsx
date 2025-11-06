"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { useState } from "react";

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

const Pricing03 = ({ maxWidthClass = "max-w-(--breakpoint-lg)" }: { maxWidthClass?: string }) => {
  const [selectedBillingPeriod, setSelectedBillingPeriod] = useState("monthly");

  return (
    <section className="flex flex-col items-center justify-center py-12 px-6">
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
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              ${plan.priceOneTime ? plan.priceOneTime : (selectedBillingPeriod === "monthly" ? plan.priceMonthly : plan.priceYearly)}
              <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                {plan.priceOneTime ? "one-time" : (selectedBillingPeriod === "monthly" ? "/month" : "/year")}
              </span>
            </p>
            <p className="mt-4 font-medium text-muted-foreground">
              {plan.description.includes('.') ? (
                <>
                  {plan.description.split('.')[0]}<br />
                  {plan.description.split('.')[1]}
                </>
              ) : (
                plan.description
              )}
            </p>

            <Button
              variant={plan.isPopular ? "default" : "outline"}
              size="lg"
              className={cn("w-full mt-6 rounded-full", { "opacity-50 cursor-not-allowed": plan.disabled })}
              disabled={plan.disabled}
            >
              {plan.buttonText}
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5">
                  <CircleCheck className={cn("h-4 w-4 mt-1", {
                    "text-green-600": !plan.disabled,
                    "text-gray-400": plan.disabled,
                  })} />
                  {feature.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing03;
