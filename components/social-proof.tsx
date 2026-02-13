"use client"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Quote } from "lucide-react"

const stats = [
  { value: 500, suffix: "+", label: "Contadores usando" },
  { value: 14, suffix: "", label: "Contratos/mês (média)" },
  { value: 127, suffix: "+", label: "Leads gerados/mês" },
  { value: 97, suffix: "%", label: "Taxa de renovação" },
]

const testimonials = [
  {
    text: "Fechei 3 contratos nos primeiros 7 dias usando a MOV. Nunca imaginei que prospecção pudesse ser tão simples.",
    name: "Contador parceiro",
    role: "Escritório com 2 sócios",
    result: "+3 contratos em 7 dias",
  },
  {
    text: "Saí de 0 leads por mês para mais de 40 leads qualificados. O módulo de prospecção mudou meu negócio.",
    name: "Contador parceiro",
    role: "Autônomo",
    result: "0 → 40 leads/mês",
  },
  {
    text: "Parei de depender de indicação. Hoje tenho previsibilidade e sei exatamente de onde vem meu próximo cliente.",
    name: "Contador parceiro",
    role: "Escritório com equipe de 8",
    result: "Receita previsível",
  },
]

export function SocialProof() {
  return (
    <section className="relative z-10 py-20 lg:py-28 bg-bg-light">
      <div className="container-custom">

        {/* Stats Bar */}
        <SectionReveal>
          <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-slate-100 p-8 md:p-12 mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold text-surface mb-2">
                    <AnimatedCounter
                      end={stat.value}
                      suffix={stat.suffix}
                      duration={2000 + i * 200}
                    />
                  </div>
                  <p className="text-sm text-surface-sec font-medium uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </SectionReveal>

        {/* Testimonials */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Resultados Reais
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface">
              Quem ativou, <span className="text-gradient">já está colhendo</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((t, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg h-full flex flex-col relative overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 transition-opacity" />
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                <p className="text-surface-sec leading-relaxed flex-1 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-bold text-surface text-sm">{t.name}</p>
                      <p className="text-xs text-surface-sec">{t.role}</p>
                    </div>
                    <div className="px-3 py-1.5 rounded-full bg-green-main/10 text-green-main text-xs font-bold">
                      {t.result}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
