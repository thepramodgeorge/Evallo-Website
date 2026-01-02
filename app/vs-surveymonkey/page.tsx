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
    title: "Evallo vs SurveyMonkey - Best AI Survey Alternative 2026 | Comparison",
    description: "SurveyMonkey alternative with AI-powered conversational surveys. Get 40% higher completion rates and deeper insights without complex branching logic. See why teams switch from SurveyMonkey to Evallo.",
    keywords: [
      "SurveyMonkey alternative",
      "Evallo vs SurveyMonkey",
      "AI survey vs SurveyMonkey",
      "better than SurveyMonkey",
      "SurveyMonkey competitor",
      "conversational survey SurveyMonkey",
      "AI chat survey alternative"
    ],
    openGraph: {
      title: "Evallo vs SurveyMonkey - Best AI Survey Alternative 2026",
      description: "Get 40% higher completion rates with AI-powered conversational surveys. See why teams switch from SurveyMonkey to Evallo.",
      url: `${protocol}://${host}/vs-surveymonkey`,
      type: "article",
      images: [
        {
          url: "/Evallo-Hero-Image-1-1024x1024.webp",
          width: 1024,
          height: 1024,
          alt: "Evallo vs SurveyMonkey Comparison",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Evallo vs SurveyMonkey - Best AI Survey Alternative 2026",
      description: "Get 40% higher completion rates with AI-powered conversational surveys. See the comparison.",
    },
    alternates: {
      canonical: `${protocol}://${host}/vs-surveymonkey`,
    },
  };
}

export default function VsSurveymonkeyPage() {
  return (
    <div className="overflow-x-hidden">
      {/* Section 1: Hero */}
      <Hero 
        description="SurveyMonkey makes you play architect with complex branching logic. Evallo uses AI to conduct adaptive interviews that dig deeper, without the setup headache."
      />

      {/* Individual Testimonial */}
      <TestimonialBanner avatarSrc="https://5jw1znnm2c.ufs.sh/f/0HPmnuCEv8pSHe860sMuxDatYrVP0L2B6GIQUiJmEjC8FRZk" />

      {/* Features Section */}
      <Features04Page 
        imageAlt="Comparison between complex SurveyMonkey logic trees and simple Evallo AI flows"
      />

      {/* Aha Moments Section */}
      <Features05Page 
        description='Traditional forms are rigid. If a user gives a fascinating answer to question #3, SurveyMonkey just moves to question #4. You miss the "Why." The Evallo Difference? Our AI listens. It asks the follow-up question you would have asked if you were there in person.'
      />

      {/* How It Works Section */}
      <HowItWorksSection id="how-it-works" />

      {/* Section 3: Comparison Table */}
      <ComparisonTableSection />

      {/* Section 5: Features 03 */}
      <Features03 
        logicTreeText="Building a 20-path logic tree in SurveyMonkey is a nightmare."
        media1Src="https://i.pcmag.com/imagery/reviews/017DmecKscssWFj6CCBVrw9-5..v1569469972.png"
      />

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
    { feature: "Survey Experience", surveymonkey: "Long, Boring Forms", evallo: "Engaging AI Conversations" },
    { feature: "Logic & Branching", surveymonkey: "Complex Manual Logic", evallo: "Dynamic AI-Driven Flows" },
    { feature: "Data Analysis", surveymonkey: "Manual CSV Crunching", evallo: "Instant AI Insights & Summaries" },
    { feature: "Response Quality", surveymonkey: "Surface-level Data", evallo: "Deep Probing with AI Follow-ups" },
    { feature: "Pricing Model", surveymonkey: "Expensive Monthly Tiers", evallo: "Transparent Lifetime Deal" },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-(--breakpoint-lg) w-full mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold text-center tracking-tight mb-12">
          Evallo vs. SurveyMonkey: At a Glance
        </h2>
        <div className="border rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/50">
                <TableHead className="w-1/3">Feature</TableHead>
                <TableHead className="w-1/3">SurveyMonkey</TableHead>
                <TableHead className="w-1/3">Evallo.app</TableHead>
              </TableRow>
            </TableHeader>
          <TableBody>
            {comparisonData.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.feature}</TableCell>
                <TableCell>{row.surveymonkey}</TableCell>
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
      question: "Is Evallo a better alternative to SurveyMonkey for UX Research?",
      answer: "Absolutely. While SurveyMonkey is built for traditional, static data collection, Evallo uses AI to perform 'adaptive probing'—asking intelligent follow-up questions based on user responses to uncover deeper insights that static forms miss.",
    },
    {
      question: "How does Evallo's AI compare to SurveyMonkey's logic?",
      answer: "SurveyMonkey requires you to manually build every 'If/Then' branch, which is time-consuming and error-prone. Evallo's AI handles the logic dynamically, adjusting the conversation in real-time based on your research goals.",
    },
    {
      question: "Is Evallo cheaper than SurveyMonkey?",
      answer: "Yes! SurveyMonkey's pricing can be complex and expensive, especially for teams. Evallo currently offers a Lifetime Deal—pay once, own it forever, and avoid recurring monthly fees while getting more advanced AI features.",
    },
    {
      question: "Can I migrate my SurveyMonkey data to Evallo?",
      answer: "Yes, you can easily export your existing data and use Evallo's AI to analyze it, or simply start your next project on Evallo to experience the difference in response quality and completion rates.",
    },
    {
      question: "Does Evallo integrate with my existing tools?",
      answer: "Yes, Evallo integrates seamlessly with HubSpot, Salesforce, Zapier, and more, ensuring your AI-generated insights flow directly into your existing workflow just like SurveyMonkey, but with better data.",
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
        description="Quick answers to common questions about Evallo vs SurveyMonkey."
      />
    </>
  );
}