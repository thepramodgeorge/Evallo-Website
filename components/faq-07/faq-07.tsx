"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Accordion as AccordionPrimitive } from "radix-ui";
import { PlusIcon } from "lucide-react";
import { useState } from "react";
import { SignInDialog } from "@/components/signin-dialog";

const faq = [
  {
    question: "What is Evallo?",
    answer:
      "Evallo helps you create dynamic AI surveys that converse with your audience to uncover the 'why', without the nightmare of complex logic trees or manual setup.",
  },
  {
    question: "How does Evallo improve form completion rates?",
    answer:
      "Evallo uses a chat-like interface that adapts to user responses, making flows feel conversational rather than static. Early users report ~2.3x higher completion rates and around 40% fewer drop-offs compared to traditional forms.",
  },
  {
    question: "How does lead scoring and routing work?",
    answer:
      "Leads are scored in real time based on configurable business rules (for example: budget, urgency, deal size). High-intent leads can be routed to the right SDRs automatically to accelerate your sales cycle.",
  },
  {
    question: "Which CRMs does Evallo integrate with?",
    answer:
      "Evallo supports CRM integrations and lead routing, but the public homepage doesn't list a comprehensive set. For a full list of supported CRMs and integration details, request a demo or contact the team via the meeting link or email.",
  },
  {
    question: "Can I use Evallo on mobile?",
    answer:
      "Yes — Evallo’s conversational experiences are designed to work on mobile and desktop. The adaptive chat-like UI optimizes for form completion across devices.",
  },
  {
    question: "How do I get help setting up my first Evallo?",
    answer:
      "Request a demo (https://pramodgeorge.com/meet) or email pramod@evallo.app for assistance. The team can help with initial setup, flow creation and CRM wiring.",
  },
  {
    question: "How is Evallo different from Typeform and other form builders?",
    answer:
      "Evallo combines AI-generated conversational flows, real-time lead scoring and integrations for routing and automation — it's focused on qualifying buyers and generating actionable lead intelligence, not just collecting responses.",
  },
];

interface FAQ07Props {
  items?: { question: string; answer: string }[];
  title?: string;
  description?: string;
}

const FAQ07 = ({ items, title, description }: FAQ07Props) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const displayFaq = items || faq;

  return (
    <section className="flex items-center justify-center py-12 px-6">
      <div className="max-w-2xl w-full mx-auto py-8">
        <h2 className="text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] text-center">
          {title || "Frequently Asked Questions"}
        </h2>
        <p className="mt-2 text-xl text-muted-foreground text-center">
          {description || "Answers about how Evallo works, integrations, setup and results."}
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-8 sm:mt-10 space-y-4"
          defaultValue="question-0"
        >
          {displayFaq.map(({ question, answer }, index) => (
            <AccordionItem
              key={question}
              value={`question-${index}`}
              className="bg-accent py-1 px-4 rounded-xl border-none"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    "flex flex-1 items-center justify-between pt-4 pb-3 font-semibold tracking-tight transition-all hover:underline [&[data-state=open]>svg]:rotate-45",
                    "text-start text-lg"
                  )}
                >
                  {question}
                  <PlusIcon className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-200" />
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionContent className="text-base text-muted-foreground">
                {answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        {/* CTA at end of section */}
        <div className="mt-8 flex justify-center">
          <Button size="lg" className="rounded-full cursor-pointer" onClick={() => setDialogOpen(true)}>
            Create Your First Evallo in 2 mins
          </Button>
        </div>
      </div>
      <SignInDialog open={dialogOpen} onOpenChange={setDialogOpen} />
    </section>
  );
};

export default FAQ07;
