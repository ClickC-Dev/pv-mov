"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, DollarSign, Calculator } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const scenarios = [
  { clients: 1, ticket: 400, label: "1 cliente" },
  { clients: 2, ticket: 400, label: "2 clientes" },
  { clients: 5, ticket: 400, label: "5 clientes" },
  { clients: 10, ticket: 400, label: "10 clientes" },
]

export function FinancialSimulation() {
  const [activeScenario, setActiveScenario] = useState(2)
  const scenario = scenarios[activeScenario]
  const monthlyRevenue = scenario.clients * scenario.ticket
  const yearlyRevenue = monthlyRevenue * 12
  const investment = 97
  const roi = Math.round(yearlyRevenue / (investment * 12))

  return (
    <section className="py-28 lg:py-36 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark bg-grid" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-main/5 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-green-main text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Simulação Real
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
              Faça as contas.{" "}
              <span className="text-gradient">O investimento se paga sozinho.</span>
            </h2>
            <p className="text-lg text-slate-400">
              Quanto vale um novo cliente para sua contabilidade? Veja o impacto da MOV.
            </p>
          </div>
        </SectionReveal>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Selector */}
            <SectionReveal direction="left">
              <div className="space-y-8">
                <div>
                  <p className="text-white font-bold text-lg mb-4">
                    Se a MOV te ajudar a fechar:
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {scenarios.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveScenario(i)}
                        className={`p-4 rounded-2xl border transition-all duration-300 text-left ${
                          activeScenario === i
                            ? "bg-green-main/15 border-green-main/40 shadow-lg shadow-green-main/10"
                            : "bg-white/[0.03] border-white/10 hover:border-white/20"
                        }`}
                      >
                        <p className={`text-2xl font-heading font-extrabold ${
                          activeScenario === i ? "text-green-main" : "text-white"
                        }`}>
                          {s.label}
                        </p>
                        <p className="text-xs text-slate-500 mt-1">
                          de R$ {s.ticket}/mês cada
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10">
                  <div className="flex items-center gap-3 mb-4">
                    <Calculator className="w-5 h-5 text-accent" />
                    <p className="text-sm text-slate-400 font-medium">Seu investimento na MOV</p>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-sm text-slate-500">R$</span>
                    <span className="text-4xl font-heading font-extrabold text-white">97</span>
                    <span className="text-slate-500">/mês</span>
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    Menos que um almoço executivo por semana.
                  </p>
                </div>
              </div>
            </SectionReveal>

            {/* Results */}
            <SectionReveal direction="right" delay={200}>
              <div className="rounded-3xl glass p-8 md:p-10 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-main to-accent" />
                <div className="absolute top-0 right-0 w-48 h-48 bg-green-main/10 rounded-full blur-[80px]" />

                <div className="relative z-10 space-y-6">
                  <h3 className="font-heading font-bold text-xl text-white">
                    Resultado com {scenario.label}:
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-dark/60 border border-white/5">
                      <div className="flex items-center gap-3">
                        <DollarSign className="w-5 h-5 text-green-main" />
                        <span className="text-slate-400">Receita mensal</span>
                      </div>
                      <span className="text-2xl font-heading font-extrabold text-green-main">
                        R$ {monthlyRevenue.toLocaleString("pt-BR")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-4 rounded-2xl bg-bg-dark/60 border border-white/5">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-accent" />
                        <span className="text-slate-400">Receita anual</span>
                      </div>
                      <span className="text-2xl font-heading font-extrabold text-accent">
                        R$ {yearlyRevenue.toLocaleString("pt-BR")}
                      </span>
                    </div>

                    <div className="flex items-center justify-between p-5 rounded-2xl bg-green-main/10 border border-green-main/20">
                      <div className="flex items-center gap-3">
                        <TrendingUp className="w-5 h-5 text-green-main" />
                        <span className="text-green-main font-bold">Retorno sobre investimento</span>
                      </div>
                      <span className="text-3xl font-heading font-extrabold text-green-main">
                        {roi}x
                      </span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <p className="text-slate-400 text-sm text-center">
                      <strong className="text-white">Basta 1 contrato</strong> para pagar <strong className="text-white">4 meses</strong> de MOV.
                    </p>
                  </div>
                </div>
              </div>
            </SectionReveal>

          </div>

          {/* CTA */}
          <SectionReveal delay={300}>
            <div className="text-center mt-16">
              <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="font-bold text-lg shadow-xl shadow-primary/30 animate-glow-pulse">
                  Quero minha contabilidade vendendo no automático
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
