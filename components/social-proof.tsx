"use client"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { SectionReveal } from "@/components/ui/section-reveal"

const stats = [
  { value: 500, suffix: "+", label: "Contadores atendidos" },
  { value: 4, suffix: "", label: "Motores integrados" },
  { value: 24, suffix: "/7", label: "Sistema no ar" },
  { value: 100, suffix: "%", label: "Focada em contabilidade" },
]

export function SocialProof() {
  return (
    <section className="relative z-10 -mt-1">
      <div className="container-custom">
        <SectionReveal>
          <div className="bg-white rounded-3xl shadow-xl shadow-black/5 border border-slate-100 p-8 md:p-12">
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
      </div>
    </section>
  )
}
