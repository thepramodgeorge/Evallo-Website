import Hero from "@/components/hero"
import Features07 from "@/components/features-07"
import Pricing03 from "@/app/pricing/page"
import FAQ07 from "@/components/faq-07"
import Testimonial04 from "@/components/testimonial-04/testimonial-04"
import Footer04Page from "@/components/footer-04/footer-04"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <Hero />
      {/* Logo marquee under hero */}
      <div className="mt-8">
        <Marquee
          pauseOnHover
          className="bg-muted/50 rounded-md px-4 py-3 [--duration:40s] [&_img]:mr-6 [&_svg]:mr-6 mask-x-from-70% mask-x-to-90%"
        >
          <img src="/next.svg" alt="Next.js" width={96} height={24} className="object-contain" />
          <img src="/vercel.svg" alt="Vercel" width={96} height={24} className="object-contain" />
          <img src="/file.svg" alt="File" width={96} height={24} className="object-contain" />
          <img src="/globe.svg" alt="Globe" width={96} height={24} className="object-contain" />
          {/* External YouTube logo (uses plain img to avoid next/image remote domain config) */}
          <img
            src="https://1000logos.net/wp-content/uploads/2017/05/Youtube-Logo-500x281.png"
            alt="YouTube"
            width={96}
            height={24}
            className="object-contain"
          />
        </Marquee>
      </div>
      <Features07 />
      <Testimonial04 />
      <Pricing03 />
  <Testimonial04 />
      <FAQ07 />
      <Footer04Page />
    </>
  )
}
