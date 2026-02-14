"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { X, Check, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const notFor = [
  "Quem quer resultado sem esforço nenhum",
  "Quem não acredita no digital para contabilidade",
  "Quem está satisfeito dependendo só de indicação",
  "Quem não quer crescer nos próximos 12 meses",
]

const yesFor = [
  "Contadores que querem previsibilidade de receita",
  "Escritórios que estão cansados de depender de indicação",
  "Quem quer uma máquina vendendo enquanto trabalha",
  "Quem sabe que 1 cliente já paga 4 meses de MOV",
]

export function NotForYou() {
  return (
    <section className="py-24 lg:py-32 bg-bg-light relative overflow-hidden">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">

          <SectionReveal>
            <div className="text-center mb-16">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                Antes de continuar
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface">
                A MOV <span className="text-red-main">não é para todo mundo.</span>
              </h2>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* NOT for you */}
            <SectionReveal direction="left" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-red-main/10 shadow-lg h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-red-main" />
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-red-sec flex items-center justify-center">
                    <X className="w-6 h-6 text-red-main" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-surface">
                    NÃO entre se você...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {notFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-red-sec flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 text-red-main" />
                      </div>
                      <span className="text-surface-sec">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>

            {/* YES for you */}
            <SectionReveal direction="right" delay={100}>
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-green-main/10 shadow-lg h-full relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-green-main" />
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-green-main/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-green-main" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-surface">
                    A MOV é perfeita se você...
                  </h3>
                </div>
                <ul className="space-y-4">
                  {yesFor.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-green-main/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-green-main" />
                      </div>
                      <span className="text-surface-sec">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </SectionReveal>
          </div>

          <SectionReveal delay={300}>
            <div className="text-center mt-14">
              <p className="text-xl md:text-2xl font-heading font-bold text-surface mb-6">
                Se você se identificou com a coluna da direita,{" "}
                <span className="text-primary">sua vaga está esperando.</span>
              </p>
              <a href="#planos">
                <Button size="lg" className="font-bold text-lg shadow-xl shadow-primary/30 animate-glow-pulse">
                  Ver planos e ativar agora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
