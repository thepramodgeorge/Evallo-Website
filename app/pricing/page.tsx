"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { CircleCheck } from "lucide-react";
import { useState } from "react";

const YEARLY_DISCOUNT = 20;
const plans = [
  {
    name: "Starter",
    price: 29,
    description: "For Hobbyists. 500 survey responses per month",
    features: [
      { title: "10 Surveys" },
      { title: "Core AI analysis & reporting" },
      { title: "Web & email deployment" }
    ],
    buttonText: "Start 7-Day Free Trial",
  },
  {
    name: "Pro",
    price: 79,
    isRecommended: true,
    description: "For Teams. 2,500 survey responses per month",
    features: [
      { title: "100 Surveys" },
      { title: "Advanced AI analysis & sentiment tracking" },
      { title: "Custom branding & white-labeling" }
    ],
    buttonText: "Start 7-Day Free Trial",
    isPopular: true,
  },
  {
    name: "Scale",
    price: 199,
    description: "For Enterprises. 10,000 survey responses per month",
    features: [
      { title: "Unlimited Surveys" },
      { title: "Priority support & setup" },
      { title: "Dedicated success manager" }
    ],
    buttonText: "Start 7-Day Free Trial",
  },
];

const Pricing03 = () => {
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
            Yearly (Save {YEARLY_DISCOUNT}%)
          </TabsTrigger>
        </TabsList>
      </Tabs>
  <div className="mt-12 max-w-(--breakpoint-lg) w-full mx-auto grid grid-cols-1 lg:grid-cols-3 items-start gap-8">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn("relative border rounded-xl p-6", {
              "border-2 border-primary py-10": plan.isPopular,
            })}
          >
            {plan.isPopular && (
              <Badge className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2">
                Most Popular
              </Badge>
            )}
            <h3 className="text-lg font-medium">{plan.name}</h3>
            <p className="mt-2 text-4xl font-bold">
              $
              {selectedBillingPeriod === "monthly"
                ? plan.price
                : Math.ceil(plan.price * ((100 - YEARLY_DISCOUNT) / 100))}
              <span className="ml-1.5 text-sm text-muted-foreground font-normal">
                /month
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
              className="w-full mt-6 rounded-full"
            >
              {plan.buttonText}
            </Button>
            <Separator className="my-8" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature.title} className="flex items-start gap-1.5">
                  <CircleCheck className="h-4 w-4 mt-1 text-green-600" />
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
