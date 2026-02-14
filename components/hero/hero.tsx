"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp, Users, FileCheck, MessageCircle, Send } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-dark text-white min-h-screen flex items-center pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-mesh-dark bg-grid" />
      <div className="absolute top-0 right-0 -translate-y-24 translate-x-24 opacity-30">
        <div className="h-[500px] w-[500px] rounded-full bg-primary blur-[120px]" />
      </div>
      <div className="absolute bottom-0 left-0 translate-y-24 -translate-x-24 opacity-15">
        <div className="h-[400px] w-[400px] rounded-full bg-blue-main blur-[100px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10">
        <div className="h-[600px] w-[600px] rounded-full bg-accent blur-[150px]" />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-8">
            <SectionReveal>
              <p className="text-slate-500 text-sm font-bold uppercase tracking-[0.2em]">
                Para contadores que querem previsibilidade
              </p>
            </SectionReveal>

            <SectionReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight leading-[1.05]">
                Você não tem problema de cliente.{" "}
                <span className="text-gradient">
                  Tem problema de estrutura.
                </span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p className="max-w-xl text-lg lg:text-xl text-slate-400 leading-relaxed">
                Contadores não quebram por falta de competência.{" "}
                <strong className="text-white">Quebram por falta de previsibilidade.</strong>{" "}
                A MOV cria sua própria máquina de aquisição — enquanto você trabalha, ela vende.
              </p>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="flex items-center gap-6 flex-wrap">
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-main" />
                  <span className="text-slate-400">Site</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-main" />
                  <span className="text-slate-400">Conteúdo</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-main" />
                  <span className="text-slate-400">Leads</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-main" />
                  <span className="text-slate-400">IA</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <div className="w-2 h-2 rounded-full bg-green-main" />
                  <span className="text-slate-400">CRM</span>
                </div>
                <span className="text-accent font-bold text-sm">Tudo conectado. Tudo automático.</span>
              </div>
            </SectionReveal>

            <SectionReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto font-bold text-lg shadow-xl shadow-primary/30 animate-glow-pulse">
                    Quero previsibilidade no meu negócio
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#custo">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5">
                    Ver o custo de não ter
                  </Button>
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Visual Column - Live Proof */}
          <SectionReveal direction="right" delay={300}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              <div className="relative rounded-3xl glass p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Painel MOV — ao vivo</p>
                    <p className="font-heading font-bold text-xl text-white mt-1">Contabilidade Silva &amp; Associados</p>
                  </div>
                  <div className="h-10 w-10 rounded-xl bg-green-main/15 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-main" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="rounded-2xl bg-bg-dark/80 p-4 border border-white/5 text-center">
                    <Users className="w-4 h-4 text-accent mx-auto mb-2" />
                    <p className="text-xl font-bold text-white font-mono">+127</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Leads/mês</p>
                  </div>
                  <div className="rounded-2xl bg-bg-dark/80 p-4 border border-white/5 text-center">
                    <FileCheck className="w-4 h-4 text-primary mx-auto mb-2" />
                    <p className="text-xl font-bold text-white font-mono">+14</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Contratos</p>
                  </div>
                  <div className="rounded-2xl bg-bg-dark/80 p-4 border border-white/5 text-center">
                    <TrendingUp className="w-4 h-4 text-green-main mx-auto mb-2" />
                    <p className="text-xl font-bold text-white font-mono">3.2x</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">ROI</p>
                  </div>
                </div>

                {/* Live feed - visual proof */}
                <div className="space-y-3">
                  <div className="rounded-xl bg-bg-dark/60 p-3 border border-white/5 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-green-main/20 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-3.5 h-3.5 text-green-main" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-white font-medium truncate">Lead respondeu no WhatsApp</p>
                      <p className="text-[10px] text-slate-500">João Silva — Empresa XYZ Ltda</p>
                    </div>
                    <span className="text-[9px] text-accent font-mono shrink-0">2min</span>
                  </div>

                  <div className="rounded-xl bg-bg-dark/60 p-3 border border-white/5 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <Send className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-white font-medium truncate">Proposta enviada automaticamente</p>
                      <p className="text-[10px] text-slate-500">R$ 890/mês — Abertura + Contábil</p>
                    </div>
                    <span className="text-[9px] text-accent font-mono shrink-0">15min</span>
                  </div>

                  <div className="rounded-xl bg-green-main/10 p-3 border border-green-main/20 flex items-center gap-3">
                    <div className="w-7 h-7 rounded-full bg-green-main/20 flex items-center justify-center shrink-0">
                      <div className="w-3 h-3 rounded-full bg-green-main animate-pulse" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-green-main font-bold truncate">Contrato fechado!</p>
                      <p className="text-[10px] text-slate-400">Maria Costa — R$ 1.200/mês</p>
                    </div>
                    <span className="text-[9px] text-green-main font-mono font-bold shrink-0">agora</span>
                  </div>
                </div>
              </div>

              {/* Floating decorative */}
              <div className="absolute -top-6 -right-6 h-32 w-32 rounded-full bg-gradient-to-br from-primary/30 to-transparent blur-2xl animate-float" />
              <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl animate-float" style={{ animationDelay: "-3s" }} />
            </div>
          </SectionReveal>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-[#f5f8ff]" />
    </section>
  )
}
