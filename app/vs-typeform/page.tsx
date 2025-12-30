import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Hero from "@/components/hero";
import TestimonialBanner from "@/components/testimonial-banner";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";

export default function VsTypeformPage() {
  return (
    <div>
      {/* Section 1: Hero */}
      <Hero />

      {/* Individual Testimonial */}
      <TestimonialBanner avatarSrc="https://5jw1znnm2c.ufs.sh/f/0HPmnuCEv8pSHe860sMuxDatYrVP0L2B6GIQUiJmEjC8FRZk" />

      {/* Section 2: Pain Point */}
      <PainPointSection />

      {/* Section 3: Comparison Table */}
      <ComparisonTableSection />

      {/* Section 4: Feature Showdown */}
      <FeatureShowdownSection />

      {/* Section 5: Testimonial */}
      <Testimonial04 />

      {/* Section 6: FAQ */}
      <FAQSection />
    </div>
  );
}

function PainPointSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
          Why &quot;Static&quot; Surveys Are Costing You Insights
        </h2>
        <p className="mt-6 text-xl text-muted-foreground">
          Traditional forms are rigid. If a user gives a fascinating answer to question #3, Typeform just moves to question #4. You miss the &quot;Why.&quot;
        </p>
        <p className="mt-4 text-lg">
          The Evallo Difference: Our AI listens. It asks the follow-up question you would have asked if you were there in person.
        </p>
      </div>
    </section>
  );
}

function ComparisonTableSection() {
  const comparisonData = [
    { feature: "Logic Building", typeform: "Manual 'If/Then' Branching", evallo: "Zero-Logic AI Flows" },
    { feature: "Question Style", typeform: "Fixed & Static", evallo: "Adaptive & Conversational" },
    { feature: "Setup Time", typeform: "Hours for complex flows", evallo: "2 Minutes" },
    { feature: "Follow-up", typeform: "Impossible to automate", evallo: "AI-Generated Follow-ups" },
    { feature: "Insights", typeform: "Data Exports (CSV)", evallo: "AI-Summarized 'Aha' Moments" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-12">
          Evallo vs. Typeform: At a Glance
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-1/3">Feature</TableHead>
              <TableHead className="w-1/3">Typeform</TableHead>
              <TableHead className="w-1/3">Evallo.app</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell>{row.typeform}</TableCell>
                <TableCell className="font-semibold text-primary">{row['evallo']}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}

function FeatureShowdownSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold mb-6">Goodbye, Logic Map Spaghetti.</h3>
        <p className="text-lg text-muted-foreground mb-12">
          Building a 20-path logic tree in Typeform is a nightmare. With Evallo, you just describe your goal in plain English. Our AI handles the rest.
        </p>
        <h3 className="text-3xl font-semibold mb-6">Qualitative Depth at Quantitative Scale.</h3>
        <p className="text-lg text-muted-foreground">
          Evallo bridges the gap between a shallow survey and a 30-minute Zoom interview. Get the &quot;why&quot; from 1,000 people simultaneously.
        </p>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqData = [
    {
      question: "Is Evallo a better alternative to Typeform for UX Research?",
      answer: "Yes, because of adaptive probing.",
    },
    {
      question: "Can I import my leads from Evallo to my CRM?",
      answer: "Yes, we integrate with [X, Y, Z].",
    },
    {
      question: "How long does it take to set up an AI flow?",
      answer: "Under 2 minutes.",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl leading-[1.15]! font-semibold tracking-[-0.03em]">
          Frequently Asked Questions
        </h2>
        <p className="mt-2 text-xl text-muted-foreground">
          Quick answers to common questions about Evallo vs Typeform.
        </p>

        <div className="mt-8 sm:mt-10 space-y-4">
          {faqData.map((item, index) => (
            <div key={index} className="bg-accent py-4 px-4 rounded-xl">
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <p className="mt-2 text-base text-muted-foreground">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}