"use client"

import { X, Check, ArrowRight, AlertTriangle, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SectionReveal } from "@/components/ui/section-reveal"

const withoutMov = [
  "Depende 100% de indicação",
  "Meses bons e meses desastrosos",
  "Zero previsibilidade de receita",
  "Trabalha muito e cresce pouco",
  "Vive apagando incêndio",
  "Perde clientes por preço",
  "Não tem funil de vendas",
  "Não sabe de onde vem o próximo cliente",
]

const withMov = [
  "Geração contínua de leads qualificados",
  "Receita previsível e crescente",
  "Funil de vendas organizado e automático",
  "Follow-up inteligente via WhatsApp",
  "Conteúdo publicado sem esforço",
  "Posicionamento que atrai, não que implora",
  "CRM com controle total do pipeline",
  "Previsibilidade de crescimento mês a mês",
]

export function CostComparison() {
  return (
    <section id="custo" className="py-28 lg:py-36 bg-bg-semi relative overflow-hidden bg-grid-light">
      <div className="container-custom">

        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-red-main text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Aten&ccedil;&atilde;o
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface mb-6">
              O custo de <span className="text-red-main">NÃO</span> ter a MOV
            </h2>
            <p className="text-lg text-surface-sec">
              Cada mês sem estrutura é um mês de contratos perdidos que nunca voltam.
            </p>
          </div>
        </SectionReveal>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">

          {/* WITHOUT MOV */}
          <SectionReveal direction="left">
            <div className="bg-white rounded-3xl p-8 md:p-10 border border-red-main/20 shadow-lg h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-main" />
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-red-main/10 flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-red-main" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-surface">Sem a MOV</h3>
                  <p className="text-sm text-red-main font-medium">Sua realidade hoje</p>
                </div>
              </div>

              <ul className="space-y-4">
                {withoutMov.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-red-main/10 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-main" />
                    </div>
                    <span className="text-surface-sec">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-2xl bg-red-sec border border-red-main/10">
                <p className="text-sm text-red-main font-bold text-center">
                  Resultado: estagnação, frustração e risco de fechar as portas.
                </p>
              </div>
            </div>
          </SectionReveal>

          {/* WITH MOV */}
          <SectionReveal direction="right" delay={200}>
            <div className="bg-bg-dark rounded-3xl p-8 md:p-10 border border-green-main/20 shadow-xl h-full relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-main to-accent" />
              <div className="absolute top-0 right-0 w-48 h-48 bg-green-main/5 rounded-full blur-[80px]" />

              <div className="flex items-center gap-3 mb-8 relative z-10">
                <div className="w-12 h-12 rounded-2xl bg-green-main/15 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-main" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-bold text-white">Com a MOV</h3>
                  <p className="text-sm text-green-main font-medium">Sua realidade em 30 dias</p>
                </div>
              </div>

              <ul className="space-y-4 relative z-10">
                {withMov.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-main/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-green-main" />
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-2xl bg-green-main/10 border border-green-main/20 relative z-10">
                <p className="text-sm text-green-main font-bold text-center">
                  Resultado: crescimento previsível, liberdade e controle total.
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* CTA */}
        <SectionReveal delay={300}>
          <div className="text-center">
            <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-bold text-lg shadow-xl shadow-primary/30">
                Quero parar de depender de indicação
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
