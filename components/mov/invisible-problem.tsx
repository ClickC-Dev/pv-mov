"use client"

import { ArrowRight, AlertTriangle, Target } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function InvisibleProblem() {
  return (
    <section className="py-24 md:py-32 bg-bg-semi relative overflow-hidden bg-grid-light">
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />

      <div className="container-custom max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          <SectionReveal direction="left">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-sec border border-red-main/15 text-red-main text-xs font-bold uppercase tracking-wider">
                <AlertTriangle className="w-3.5 h-3.5" />
                <span>Atenção</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface leading-tight">
                O Problema <span className="text-primary">Invisível</span>
              </h2>
              <p className="text-surface-sec leading-relaxed text-lg">
                Você pode ter Instagram, site, postar conteúdo, anunciar e falar com leads.
              </p>
              <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-primary relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
                <p className="text-surface leading-relaxed relative z-10">
                  &ldquo;Mas sem clareza do que vende, para quem vende, por que alguém escolheria você e sem um processo de vendas estruturado,
                  <strong className="text-primary"> tudo vira tentativa.</strong>&rdquo;
                </p>
              </div>
              <p className="font-bold text-lg text-primary flex items-center gap-3">
                <ArrowRight className="w-5 h-5 text-primary" />
                E tentativa não escala.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={200}>
            <div className="relative">
              <div className="bg-white p-10 rounded-3xl shadow-2xl border border-slate-100 flex flex-col justify-center text-center space-y-6 relative overflow-hidden">
                {/* Decorative bg */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-sec/30 to-transparent" />

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-blue-sec text-blue-main rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-main/10">
                    <Target className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-surface">
                    O mercado contábil não está saturado.
                  </h3>
                  <div className="mt-4 space-y-2">
                    <p className="text-lg text-surface-sec font-medium">
                      Ele está <span className="text-red-main line-through decoration-2 decoration-red-main/40">saturado</span>.
                    </p>
                    <p className="text-xl font-heading font-bold text-primary bg-primary-sec/50 px-4 py-2 rounded-full inline-block">
                      Ele está mal posicionado.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating accent card */}
              <div className="absolute -bottom-4 -right-4 bg-bg-dark text-white p-4 rounded-2xl shadow-xl max-w-[200px]">
                <p className="text-xs font-medium">A MOV resolve isso com método e sistema.</p>
              </div>
            </div>
          </SectionReveal>

        </div>
      </div>
    </section>
  )
}
