"use client"

import { SectionReveal } from "@/components/ui/section-reveal"

export function ParadigmShift() {
  return (
    <section className="py-24 lg:py-32 bg-slate-900 text-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/8 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/8 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4" />

      {/* Top line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
        <SectionReveal>
          <span className="text-accent text-sm font-bold tracking-[0.25em] mb-6 uppercase inline-block">
            Quebra de Paradigma
          </span>
        </SectionReveal>

        <SectionReveal delay={100}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-10 leading-tight">
            O problema não é você trabalhar pouco.<br />
            <span className="text-slate-500">O problema é trabalhar sem método.</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={200}>
          <div className="space-y-8 text-slate-300 text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
            <p>
              A maioria dos contadores trabalha muito, estuda, se atualiza tecnicamente e cumpre prazos.
              <br />
              <strong className="text-white">Mesmo assim, não cresce</strong>, não atrai bons clientes e não vende com constância.
            </p>

            <div className="flex items-center gap-4 justify-center">
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-slate-700" />
              <div className="w-2 h-2 rounded-full bg-primary" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-slate-700" />
            </div>

            <p className="text-xl lg:text-2xl font-medium text-white">
              Isso não acontece por falta de esforço.<br />
              Acontece por falta de{" "}
              <span className="text-gradient relative">
                posicionamento, estrutura e método
              </span>.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
