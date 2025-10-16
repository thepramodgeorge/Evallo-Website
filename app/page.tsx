import Hero from "@/components/hero"
import Hero02 from "@/components/hero-02/hero-02"
import Features07 from "@/components/features-07"
import Pricing03 from "@/app/pricing/page"
import FAQ07 from "@/components/faq-07"
import Testimonial04 from "@/components/testimonial-04/testimonial-04"
import TestimonialBanner from "@/components/testimonial-banner"
import Footer04Page from "@/components/footer-04/footer-04"
import { Marquee } from "@/components/ui/marquee"
import Features04Page from "@/components/features-04/features-04"
import Features05Page from "@/components/features-05/features-05"
import Features06Page from "@/components/features-06/features-06"
import HowItWorksSection from "@/components/features-02/features-02"
import Image from "next/image"

export default function Home() {
  return (
    <>
    {/* Original hero commented out for replacement - keep for reference */}
    {/* <Hero /> */}
    <Hero02 />
    {/* Logo marquee under hero */}
    <TestimonialBanner />
    <Features04Page />
    {/* <Features05Page />*/}
    <Features06Page />
    <HowItWorksSection />
    <Testimonial04 />
    {/*<Features07 />*/}
    <Pricing03 />
    <TestimonialBanner 
      quote="We replaced 3 tools with Evallo. Our sales cycle shortened by 30%, and marketing finally knows what messaging works!."
      author="Sarah L"
      role="Head of Growth, Greenhouse"
      avatarSrc="https://randomuser.me/api/portraits/women/81.jpg"
    />
    <FAQ07 />
    <Footer04Page />
    </>
  )
}
