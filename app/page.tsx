import Hero02 from "@/components/hero-02/hero-02"
import Pricing03 from "@/app/pricing/page"
import FAQ07 from "@/components/faq-07"
import Testimonial04 from "@/components/testimonial-04/testimonial-04"
import TestimonialBanner from "@/components/testimonial-banner"
import Footer from "@/components/footer"
import Features04Page from "@/components/features-04/features-04"
import Features06Page from "@/components/features-06/features-06"
import HowItWorksSection from "@/components/features-02/features-02"

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
    <HowItWorksSection id="how-it-works" />
    <Testimonial04 />
    {/*<Features07 />*/}
  <Pricing03 maxWidthClass="max-w-7xl" id="pricing" />
    <TestimonialBanner 
      quote="We replaced SurveyMonkey with Evallo. Our survey completion rates increased by 40%, and we get richer insights from every response."
      author="Sarah L"
      role="Head of Research, Greenhouse"
      avatarSrc="https://randomuser.me/api/portraits/women/81.jpg"
    />
    <FAQ07 />
    <Footer />
    </>
  )
}
