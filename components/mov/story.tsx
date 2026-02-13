"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import { ChevronDown } from "lucide-react"

export function Story() {
  return (
    <section className="py-24 lg:py-32 bg-bg-light relative overflow-hidden bg-mesh">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">

          <SectionReveal>
            <div className="space-y-8 text-center">
              <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase block">
                A verdade que ninguém conta
              </span>

              <div className="space-y-6 text-xl md:text-2xl lg:text-3xl text-surface-sec leading-relaxed">
                <p>
                  A maioria dos contadores <strong className="text-surface">trabalha muito</strong>.
                </p>
                <p>
                  Se especializa. Se dedica. Entrega com excelência.
                </p>
                <p>
                  Estuda tributação, reforma, IRPF, SPED...
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={200}>
            <div className="my-12 flex items-center gap-4 justify-center">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-slate-300" />
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-slate-300" />
            </div>
          </SectionReveal>

          <SectionReveal delay={300}>
            <div className="text-center space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-surface leading-tight">
                Mas no final do mês, o crescimento{" "}
                <span className="text-primary">não vem</span>.
              </p>
              <p className="text-lg md:text-xl text-surface-sec max-w-2xl mx-auto">
                Os clientes chegam por <strong className="text-surface">indicação</strong>. Meses bons, meses ruins. Sem previsibilidade. Sem controle. Sempre apagando incêndio.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={400}>
            <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-blue-main" />
              <div className="text-center space-y-4">
                <p className="text-xl md:text-2xl font-heading font-bold text-surface">
                  O problema <span className="text-red-main line-through decoration-2">nunca</span> foi sua capacidade técnica.
                </p>
                <p className="text-2xl md:text-3xl font-heading font-extrabold text-primary">
                  Foi a falta de estrutura comercial.
                </p>
                <p className="text-surface-sec text-lg pt-2">
                  Você sabe entregar. Mas ninguém te ensinou a <strong className="text-surface">atrair, posicionar e vender</strong>.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal delay={500}>
            <div className="flex flex-col items-center gap-2 pt-12 opacity-50">
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-surface-sec">Veja o que você está perdendo</span>
              <ChevronDown className="w-6 h-6 text-surface-sec animate-bounce" />
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
