import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { ComponentProps } from "react";

const testimonials = [
  {
    id: 1,
    name: "Arjun Patel",
    designation: "Head of Growth",
    company: "Brightlane",
    testimonial:
      "Since integrating Evallo into our site, qualified leads increased 3x and demo bookings doubled — lead qualification time dropped by 60%. Evallo captures buyer intent better than our old forms.",
    avatar: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Maya Rodriguez",
    designation: "VP of Sales",
    company: "RetailIQ",
    testimonial:
      "Evallo helped our sales team prioritize the highest-intent conversations. Our close rate rose from 12% to 26% in three months because leads are better qualified.",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Sofia Nguyen",
    designation: "Head of Marketing",
    company: "Greenloop",
    testimonial:
      "With Evallo we consolidated three tools into one — acquisition costs are down and lead quality is up. The analytics help us fine-tune campaigns quickly.",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    id: 4,
    name: "Liam O'Connor",
    designation: "Founder & CEO",
    company: "Dockly",
    testimonial:
      "Implementation was fast and the ROI showed within 30 days. We identified high-intent segments and doubled our MQL→SQL velocity.",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    id: 5,
    name: "Priya Kaur",
    designation: "Customer Success Manager",
    company: "Nimbus Health",
    testimonial:
      "Support and setup were thoughtful — the team helped tailor flows to our personas and handoffs to CS are cleaner. Our onboarding time shortened significantly.",
    avatar: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    id: 6,
    name: "Owen Blake",
    designation: "Director of Product",
    company: "Platformly",
    testimonial:
      "Evallo's conversational flows and reporting highlighted motivations we hadn't tracked before — demo no-shows dropped 40% after prioritizing outreach.",
    avatar: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    id: 7,
    name: "Nina Patel",
    designation: "Head of Revenue Operations",
    company: "ScaleSum",
    testimonial:
      "Evallo automated lead qualification so our reps talk to buyers who are already ready. Bookings-quality improved and rep efficiency increased noticeably.",
    avatar: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    id: 8,
    name: "Carlos Mendez",
    designation: "Growth Lead",
    company: "MarketSpring",
    testimonial:
      "The conversational experiences are smooth and the analytics expose intent signals we never had. Our pipeline velocity increased across the board.",
    avatar: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    id: 9,
    name: "Aisha Bello",
    designation: "Director of Demand Gen",
    company: "Leadcraft",
    testimonial:
      "Evallo gave us better context on each lead so SDRs can personalize outreach. Reply rates and demo conversions climbed in the first month.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    id: 10,
    name: "Tomás Rivera",
    designation: "VP Product",
    company: "Cloudline",
    testimonial:
      "Integration was seamless and the UI is extremely flexible. We built tailored flows that mirror our sales process in under a week.",
    avatar: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    id: 11,
    name: "Hannah Lee",
    designation: "Head of Customer Success",
    company: "Carelytics",
    testimonial:
      "Evallo reduced friction during onboarding and handed off higher-quality leads. Our CS team closes onboarding issues faster now.",
    avatar: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    id: 12,
    name: "Marcus Young",
    designation: "Head of Sales Ops",
    company: "DealForge",
    testimonial:
      "The reporting and segmentation capabilities let us measure intent in new ways — we now prioritize follow-ups with much better results.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    id: 13,
    name: "Zoe Chen",
    designation: "Growth Marketing Manager",
    company: "Adwise",
    testimonial:
      "We attribute a clear uplift in demo scheduling and lower CPL to Evallo's smarter qualification and conversational UI.",
    avatar: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    id: 14,
    name: "Ethan Brooks",
    designation: "CTO",
    company: "Stackline",
    testimonial:
      "The implementation was developer-friendly and the API made it simple to connect into our stack. Data integrity improved immediately.",
    avatar: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    id: 15,
    name: "Rhea Kapoor",
    designation: "Product Marketing",
    company: "Launchly",
    testimonial:
      "Evallo's messaging suggestions and conversation templates helped us iterate quickly and increase conversion on landing pages.",
    avatar: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    id: 16,
    name: "Jonas Müller",
    designation: "Enterprise Sales Director",
    company: "B2Bify",
    testimonial:
      "For enterprise deals, Evallo surfaces decision-makers faster and provides the context reps need. Deal sizes and win rates improved.",
    avatar: "https://randomuser.me/api/portraits/men/16.jpg",
  },
];

const Testimonial04 = () => (
  <section className="flex items-center justify-center py-12 px-6">
    <div className="max-w-(--breakpoint-xl) w-full mx-auto py-8">
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
              <Button variant="ghost" size="icon" asChild>
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
