import Hero from "@/components/hero"
import Hero02 from "@/components/hero-02/hero-02"
import Features07 from "@/components/features-07"
import Pricing03 from "@/app/pricing/page"
import FAQ07 from "@/components/faq-07"
import Testimonial04 from "@/components/testimonial-04/testimonial-04"
import TestimonialBanner from "@/components/testimonial-banner"
import Footer04Page from "@/components/footer-04/footer-04"
import { Marquee } from "@/components/ui/marquee"
import Logos06Page from "@/components/logos-06/logos-06"
import Image from "next/image"

export default function Home() {
  return (
    <>
    {/* Original hero commented out for replacement - keep for reference */}
    {/* <Hero /> */}
    <Hero02 />
    {/* Logo marquee under hero */}
  <Logos06Page />
  <TestimonialBanner />
    <Features07 />
    <Pricing03 />
    <Testimonial04 />
    <FAQ07 />
    <Footer04Page />
    </>
  )
}
