import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Hero from "@/components/hero";
import TestimonialBanner from "@/components/testimonial-banner";
import Features04Page from "@/components/features-04/features-04";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";
import Features05Page from "@/components/features-05/features-05";
import Features03 from "@/components/features-03/features-03";
import Pricing03 from "@/app/pricing/page";
import HowItWorksSection from "@/components/features-02/features-02";
import Footer from "@/components/footer";

export default function VsTypeformPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <Hero />

      {/* Individual Testimonial */}
      <TestimonialBanner avatarSrc="https://5jw1znnm2c.ufs.sh/f/0HPmnuCEv8pSHe860sMuxDatYrVP0L2B6GIQUiJmEjC8FRZk" />

      {/* Features Section */}
      <Features04Page />

      {/* Aha Moments Section */}
      <Features05Page />

      {/* How It Works Section */}
      <HowItWorksSection id="how-it-works" />

      {/* Section 3: Comparison Table */}
      <ComparisonTableSection />

      {/* Section 5: Features 03 */}
      <Features03 />

      {/* Section 6: Testimonial */}
      <Testimonial04 />

      {/* Pricing Section */}
      <Pricing03 maxWidthClass="max-w-7xl" />

      {/* Section 6: FAQ */}
      <FAQSection />
      <Footer />
    </div>
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
      <div className="max-w-(--breakpoint-lg) w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-12">
          Evallo vs. Typeform: At a Glance
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
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