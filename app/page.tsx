import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero/hero"
import { Story } from "@/components/mov/story"
import { InvisibleProblem } from "@/components/mov/invisible-problem"
import { CostComparison } from "@/components/mov/cost-comparison"
import { Methodology } from "@/components/mov/methodology"
import { ModulesDetail } from "@/components/mov/modules-detail"
import { SocialProof } from "@/components/social-proof"
import { FinancialSimulation } from "@/components/mov/financial-simulation"
import { Pricing } from "@/components/mov/pricing"
import { Guarantee } from "@/components/mov/guarantee"
import { Faq } from "@/components/mov/faq"
import { FreeTrial } from "@/components/mov/free-trial"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-light">
      {/* 1. Hero confrontativo */}
      <Navbar />
      <Hero />

      {/* 2. Narrativa emocional - dor de depender de indicação */}
      <Story />

      {/* 3. O problema invisível */}
      <InvisibleProblem />

      {/* 4. O custo de não ter a MOV (antes vs depois) */}
      <CostComparison />

      {/* 5. A solução: NÃO é curso, é estrutura (4 motores) */}
      <Methodology />

      {/* 6. Detalhes dos módulos */}
      <ModulesDetail />

      {/* 7. Prova social agressiva */}
      <SocialProof />

      {/* 8. Simulação financeira (ROI) */}
      <FinancialSimulation />

      {/* 9. Oferta com urgência */}
      <Pricing />

      {/* 10. Garantia */}
      <Guarantee />

      {/* 11. FAQ */}
      <Faq />

      {/* 12. Test Drive */}
      <FreeTrial />

      {/* 13. CTA final forte */}
      <Footer />
    </main>
  )
}
