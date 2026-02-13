"use client"

import { Shield, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"

export function Guarantee() {
  return (
    <section className="py-20 lg:py-28 bg-bg-light relative overflow-hidden">
      <div className="container-custom">
        <SectionReveal>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-main via-accent to-green-main" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-main/5 rounded-full blur-[80px]" />

              <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 relative z-10">
                <div className="shrink-0">
                  <div className="w-24 h-24 rounded-3xl bg-green-main/10 flex items-center justify-center">
                    <Shield className="w-12 h-12 text-green-main" />
                  </div>
                </div>

                <div className="text-center md:text-left space-y-4">
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-surface">
                    Sem fidelidade. Sem multa. Sem risco.
                  </h2>
                  <p className="text-surface-sec text-lg leading-relaxed">
                    A assinatura é mensal e você pode cancelar a qualquer momento. Sem burocracia, sem perguntas, sem letras miúdas.
                    Se em 30 dias você não sentir que a MOV está transformando seu negócio,{" "}
                    <strong className="text-surface">basta cancelar</strong>.
                  </p>
                  <p className="text-green-main font-bold text-lg">
                    Nós apostamos que você vai querer ficar.
                  </p>
                  <div className="pt-2">
                    <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
                      <Button size="lg" className="font-bold shadow-xl shadow-primary/30">
                        Ativar minha máquina agora
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
