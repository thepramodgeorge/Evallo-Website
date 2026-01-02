import { Metadata } from "next";
import { headers } from "next/headers";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Hero from "@/components/hero";
import TestimonialBanner from "@/components/testimonial-banner";
import Features04Page from "@/components/features-04/features-04";
import Testimonial04 from "@/components/testimonial-04/testimonial-04";
import Features05Page from "@/components/features-05/features-05";
import Features03 from "@/components/features-03/features-03";
import Pricing03 from "@/app/pricing/page";
import HowItWorksSection from "@/components/features-02/features-02";
import FAQ07 from "@/components/faq-07";
import Footer from "@/components/footer";

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const host = headersList.get('host') || 'evallo.app';
  const protocol = host.includes('localhost') ? 'http' : 'https';

  return {
    title: "Evallo vs Typeform - Best AI Survey Alternative 2026 | Comparison",
    description: "Typeform alternative with AI-powered chat surveys. Get 40% higher completion rates, deeper insights, and smarter analytics. See why teams switch from Typeform to Evallo's conversational surveys.",
    keywords: [
      "Typeform alternative",
      "Evallo vs Typeform",
      "AI survey vs Typeform",
      "better than Typeform",
      "Typeform competitor",
      "conversational survey Typeform",
      "AI chat survey alternative"
    ],
    openGraph: {
      title: "Evallo vs Typeform - Best AI Survey Alternative 2026",
      description: "Get 40% higher completion rates with AI-powered chat surveys. See why teams switch from Typeform to Evallo.",
      url: `${protocol}://${host}/vs-typeform`,
      type: "article",
      images: [
        {
          url: "/typeform-logic-tree-complexity.webp",
          width: 1200,
          height: 630,
          alt: "Evallo vs Typeform Comparison",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Evallo vs Typeform - Best AI Survey Alternative 2026",
      description: "Get 40% higher completion rates with AI-powered chat surveys. See the comparison.",
    },
    alternates: {
      canonical: `${protocol}://${host}/vs-typeform`,
    },
  };
}

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
      answer: "Absolutely. Unlike Typeform's static paths, Evallo uses AI to perform 'adaptive probing'—asking intelligent follow-up questions based on user responses to uncover deeper insights automatically.",
    },
    {
      question: "Does Evallo support conditional logic like Typeform?",
      answer: "Yes, but with a major upgrade. Instead of you manually building complex 'If/Then' branching logic, our AI generates the logic dynamically based on your research goals.",
    },
    {
      question: "Is Evallo cheaper than Typeform?",
      answer: "Yes! While Typeform charges a recurring monthly subscription that gets expensive as you scale, Evallo currently offers a Lifetime Deal. Pay once, own it forever, and save thousands in the long run.",
    },
    {
      question: "Can I import my leads from Evallo to my CRM?",
      answer: "Yes, Evallo integrates seamlessly with popular CRMs and tools like HubSpot, Salesforce, and Zapier, ensuring your survey data flows directly into your existing workflow.",
    },
    {
      question: "How long does it take to set up an AI flow?",
      answer: "Under 2 minutes. You simply describe your research goal in plain English, and our AI builds the entire conversational flow for you instantly.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map((item) => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQ07 
        items={faqData} 
        title="Frequently Asked Questions" 
        description="Quick answers to common questions about Evallo vs Typeform."
      />
    </>
  );
}