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
                  Todo mês começa igual.
                </p>
                <p>
                  <strong className="text-surface">Boletos vencendo. Equipe custando. Sistema rodando.</strong>
                </p>
                <p>
                  Você abre o escritório, atende, entrega, resolve.
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
                Mas a pergunta é:{" "}
                <span className="text-primary">quem está trazendo cliente novo?</span>
              </p>
              <p className="text-lg md:text-xl text-surface-sec max-w-2xl mx-auto">
                Se a resposta for <strong className="text-surface">&ldquo;ninguém&rdquo;</strong>, você não está crescendo.
                Está apenas <strong className="text-surface">mantendo</strong>. E manter, no mercado contábil de hoje, é o mesmo que regredir.
              </p>
            </div>
          </SectionReveal>

          <SectionReveal delay={400}>
            <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-blue-main" />

              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                  <p className="text-xl md:text-2xl font-heading font-bold text-surface">
                    O problema <span className="text-red-main line-through decoration-2">nunca</span> foi sua competência.
                  </p>
                  <p className="text-2xl md:text-3xl font-heading font-extrabold text-primary">
                    Foi a falta de estrutura comercial.
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Ninguém te ensinou a atrair",
                    "Ninguém te ensinou a posicionar",
                    "Ninguém te ensinou a vender",
                  ].map((text, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <p className="text-surface-sec text-lg">{text}</p>
                    </div>
                  ))}
                  <p className="text-surface font-bold text-lg pt-2">
                    A MOV resolve isso.
                  </p>
                </div>
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
