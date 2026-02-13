import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero/hero"
import { SocialProof } from "@/components/social-proof"
import { IntroDetails } from "@/components/hero/intro-details"
import { ParadigmShift } from "@/components/mov/paradigm-shift"
import { InvisibleProblem } from "@/components/mov/invisible-problem"
import { Methodology } from "@/components/mov/methodology"
import { ModulesDetail } from "@/components/mov/modules-detail"
import { Pricing } from "@/components/mov/pricing"
import { FreeTrial } from "@/components/mov/free-trial"
import { Faq } from "@/components/mov/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      <Navbar />
      <Hero />
      <SocialProof />
      <IntroDetails />
      <ParadigmShift />
      <InvisibleProblem />
      <Methodology />
      <ModulesDetail />
      <Pricing />
      <FreeTrial />
      <Faq />
      <Footer />
    </main>
  )
}
