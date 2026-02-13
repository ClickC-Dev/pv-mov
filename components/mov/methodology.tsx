"use client"

import { Button } from "@/components/ui/button"
import { LayoutTemplate, PenTool, Megaphone, DollarSign, X, Check, ArrowRight } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const motors = [
  {
    icon: LayoutTemplate,
    num: "01",
    title: "Estrutura",
    subtitle: "Fundação Estratégica",
    desc: "Clareza absoluta sobre quem você atende e como se diferencia. Sem isso, nenhuma ação de marketing funciona.",
    gradient: "from-primary/20 to-primary/5",
  },
  {
    icon: PenTool,
    num: "02",
    title: "Conteúdo",
    subtitle: "Autoridade que Atrai",
    desc: "Pare de postar dicas aleatórias. Criação de desejo e reputação com linguagem alinhada ao seu público.",
    gradient: "from-blue-main/20 to-blue-main/5",
  },
  {
    icon: Megaphone,
    num: "03",
    title: "Marketing",
    subtitle: "Visibilidade em Oportunidade",
    desc: "Prospecção, funis e campanhas que transformam desconhecidos em leads qualificados.",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    icon: DollarSign,
    num: "04",
    title: "Vendas",
    subtitle: "Conversão com Método",
    desc: "CRM, campanhas e fechamento. Nada de esperar indicação: aqui você vende ativamente.",
    gradient: "from-green-main/20 to-green-main/5",
  },
]

export function Methodology() {
  return (
    <section id="metodologia" className="bg-bg-dark py-28 lg:py-36 relative overflow-hidden text-surface-light">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-dark bg-grid" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -left-64 top-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute -right-64 top-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />

      <div className="container-custom relative z-10">

        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="text-accent text-sm font-bold tracking-[0.25em] uppercase mb-6 block">
              A Solução Definitiva
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 leading-tight">
              Muito mais que um curso.<br />
              Um <span className="text-gradient">Sistema Completo</span>.
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
              A MOV nasceu para tirar você da estagnação da &ldquo;tentativa e erro&rdquo;.
              Unimos <strong className="text-white">Método Validado</strong> com <strong className="text-white">Sistema de Execução</strong>.
            </p>
          </div>
        </SectionReveal>

        {/* 4 Motors */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-28">
          {motors.map((item, i) => (
            <SectionReveal key={i} delay={i * 100}>
              <div className="group relative p-8 rounded-3xl bg-white/[0.03] border border-white/5 hover:border-white/15 transition-all duration-500 h-full">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`} />
                <div className="relative z-10">
                  <span className="text-xs font-mono font-bold text-white/20 block mb-4">{item.num}</span>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-black/30`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                  <p className="text-sm font-bold text-accent uppercase tracking-wider mb-4">{item.subtitle}</p>
                  <p className="text-slate-400 leading-relaxed text-sm">{item.desc}</p>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        {/* Comparison */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal direction="left">
            <div className="space-y-8">
              <h3 className="text-3xl md:text-4xl font-heading font-bold text-white">
                Por que a MOV é diferente?
              </h3>
              <div className="space-y-5">
                {[
                  {
                    title: "Cursos Genéricos de Marketing",
                    desc: "Ensinam \"hacks\" de Instagram que não funcionam para vender B2B/Serviços Contábeis.",
                  },
                  {
                    title: "Consultorias \"Mágicas\"",
                    desc: "Prometem resultados sem mexer na estrutura do seu negócio. (Impossível).",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/[0.03] border border-red-main/10">
                    <div className="mt-0.5 w-8 h-8 rounded-full bg-red-main/10 flex items-center justify-center shrink-0">
                      <X className="w-5 h-5 text-red-main" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-300">{item.title}</p>
                      <p className="text-sm text-slate-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={200}>
            <div className="relative">
              <div className="bg-gradient-to-br from-white/[0.06] to-white/[0.02] rounded-3xl p-8 border border-primary/20 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute -top-4 -right-4 bg-accent text-bg-dark font-bold px-5 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-lg">
                  O jeito MOV
                </div>
                <h4 className="text-xl font-bold text-white mb-8 relative z-10">Com a Máquina você tem:</h4>
                <ul className="space-y-5 relative z-10">
                  {[
                    "100% Focada no Mercado Contábil",
                    "Método validado em campo de batalha",
                    "Modular: serve para 'Euquipes' ou Grandes Escritórios",
                    "Foco em Resultado (Contratos), não em Likes",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <div className="w-7 h-7 rounded-full bg-green-main/20 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-green-main" />
                      </div>
                      <span className="text-white font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* CTA */}
        <SectionReveal delay={100}>
          <div className="text-center mt-20">
            <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-bold text-lg shadow-xl shadow-primary/30">
                Quero testar a MOV grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
