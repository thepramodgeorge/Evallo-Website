import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Patel",
    designation: "Head of Research",
    company: "Brightlane",
    testimonial:
      "Since switching to Evallo, our survey response rates jumped from 15% to 45%. The AI-powered questions adapt to respondents, giving us much richer data than SurveyMonkey ever did.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    designation: "VP of Customer Insights",
    company: "RetailIQ",
    testimonial:
      "Evallo's AI automatically categorizes open-ended responses and identifies themes we never would have found manually. Survey analysis that used to take days now happens in minutes.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Sofia Nguyen",
    designation: "Head of Product Research",
    company: "Greenloop",
    testimonial:
      "We replaced SurveyMonkey with Evallo and our completion rates doubled. The conversational format feels more natural, and respondents provide more detailed feedback.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Liam O'Connor",
    designation: "Founder & CEO",
    company: "Dockly",
    testimonial:
      "Evallo's AI generates follow-up questions based on previous answers, uncovering insights we didn't even know to ask about. Game-changing for user research.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Priya Kaur",
    designation: "Customer Experience Manager",
    company: "Nimbus Health",
    testimonial:
      "Setting up surveys in Evallo takes minutes instead of hours. The AI suggests question types and logic flows, making complex surveys simple to build.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Owen Blake",
    designation: "Director of Product",
    company: "Platformly",
    testimonial:
      "Evallo automatically detects survey fatigue and adjusts question difficulty. Our long-form surveys now have completion rates we never thought possible.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Nina Patel",
    designation: "Head of Market Research",
    company: "ScaleSum",
    testimonial:
      "The AI insights feature surfaces correlations and patterns in our survey data instantly. We're making data-driven decisions faster than ever before.",
    avatar: "https://randomuser.me/api/portraits/women/22.jpg",
  },
  {
    id: 8,
    name: "Carlos Mendez",
    designation: "Research Lead",
    company: "MarketSpring",
    testimonial:
      "Evallo's real-time analytics let us monitor survey responses as they come in. We can adjust our research strategy mid-survey based on early findings.",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Aisha Bello",
    designation: "Director of User Research",
    company: "Leadcraft",
    testimonial:
      "SurveyMonkey couldn't handle our complex branching logic, but Evallo's AI makes it effortless. We've eliminated response bias and gotten more honest feedback.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 10,
    name: "Tomás Rivera",
    designation: "VP Product",
    company: "Cloudline",
    testimonial:
      "Integration was seamless and the API lets us pull survey data directly into our analytics stack. No more manual exports and data cleaning.",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 11,
    name: "Hannah Lee",
    designation: "Head of Customer Success",
    company: "Carelytics",
    testimonial:
      "Evallo's AI detects inconsistent responses and follows up automatically. Data quality has never been this high, and our insights are more actionable.",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 12,
    name: "Marcus Young",
    designation: "Head of Data Analytics",
    company: "DealForge",
    testimonial:
      "The sentiment analysis and automated tagging features save us hours of manual coding. We can now analyze thousands of responses in the time it used to take for hundreds.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 13,
    name: "Zoe Chen",
    designation: "Research Manager",
    company: "Adwise",
    testimonial:
      "Evallo predicts survey drop-off points and suggests improvements in real-time. Our survey completion rates have increased by 60% since implementation.",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  },
  {
    id: 14,
    name: "Ethan Brooks",
    designation: "CTO",
    company: "Stackline",
    testimonial:
      "The developer-friendly API and webhooks make it easy to integrate survey responses into our product. Real-time feedback loops have transformed our development process.",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 15,
    name: "Rhea Kapoor",
    designation: "Product Marketing Manager",
    company: "Launchly",
    testimonial:
      "Evallo's AI generates survey templates based on our goals, then optimizes them for engagement. We've seen a 3x improvement in response quality.",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 16,
    name: "Jonas Müller",
    designation: "Enterprise Research Director",
    company: "B2Bify",
    testimonial:
      "For enterprise surveys, Evallo handles complex stakeholder mapping and relationship analysis automatically. We're getting deeper insights than ever before.",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];

const Testimonial04 = () => (
  <section className="flex items-center justify-center py-12 px-6">
    <div className="max-w-(--breakpoint-lg) w-full mx-auto py-8">
      <h2 className="mb-14 text-4xl md:text-5xl md:leading-14 font-semibold tracking-[-0.03em] text-center">
        Testimonials
      </h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="mb-8 bg-accent rounded-xl p-6 break-inside-avoid"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="size-10">
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                  <AvatarFallback className="text-xl font-medium bg-primary text-primary-foreground">
                    {testimonial.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-lg font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.designation}</p>
                </div>
              </div>
              <Button variant="ghost" size="lg" className="rounded-full" asChild>
                <Link href="#" target="_blank">
                  <TwitterLogo className="w-4 h-4" />
                </Link>
              </Button>
            </div>
            <p className="mt-5 text-[17px]">{testimonial.testimonial}</p>
          </div>
        ))}
      </div>
      {/* CTA at end of section */}
      <div className="mt-8 flex justify-center">
        <Button asChild size="lg" className="rounded-full">
          <Link href="#">Create Your First Evallo in 2 mins</Link>
        </Button>
      </div>
    </div>
  </section>
);

// kept existing TestimonialList for reference (not exported). Cards are rendered inline in the grid above.
const TestimonialList = () => null;

const TwitterLogo = (props: ComponentProps<"svg">) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <title>X</title>
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
    />
  </svg>
);

export default Testimonial04;
