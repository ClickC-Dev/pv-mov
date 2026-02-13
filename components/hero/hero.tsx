"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2, Play, TrendingUp, Users, FileCheck } from "lucide-react"
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

      {/* Orbiting decorative elements */}
      <div className="absolute top-1/3 right-1/4 hidden lg:block">
        <div className="w-2 h-2 rounded-full bg-primary animate-orbit opacity-40" />
      </div>
      <div className="absolute bottom-1/3 left-1/4 hidden lg:block">
        <div className="w-1.5 h-1.5 rounded-full bg-accent animate-orbit opacity-30" style={{ animationDelay: "-4s", animationDuration: "16s" }} />
      </div>

      <div className="container-custom relative z-10 py-20 lg:py-32">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="space-y-10">
            <SectionReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-slate-300">
                <span className="w-2 h-2 rounded-full bg-green-main animate-pulse" />
                <span>Plataforma ClickC</span>
                <span className="text-white/30">|</span>
                <span className="text-primary font-bold">MOV</span>
              </div>
            </SectionReveal>

            <SectionReveal delay={100}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-extrabold tracking-tight leading-[1.05]">
                Transforme sua contabilidade em uma{" "}
                <span className="text-gradient">
                  Máquina de Vendas
                </span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={200}>
              <p className="max-w-xl text-lg lg:text-xl text-slate-400 leading-relaxed">
                A MOV é o método e sistema que transforma contadores técnicos em negócios contábeis que{" "}
                <strong className="text-white">atraem, posicionam e vendem</strong> com consistência no digital.
              </p>
            </SectionReveal>

            <SectionReveal delay={300}>
              <div className="space-y-4">
                {[
                  "Você não precisa postar todo dia.",
                  "Não precisa virar influencer.",
                  "E não precisa disputar cliente por preço.",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300 group">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center shrink-0 group-hover:bg-accent/20 transition-colors">
                      <CheckCircle2 className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-base">{text}</span>
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="w-full sm:w-auto font-bold text-lg shadow-xl shadow-primary/30 animate-glow-pulse">
                    Quero testar grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>
                <a href="#metodologia">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/20 text-white hover:bg-white/5">
                    <Play className="mr-2 h-4 w-4" />
                    Como funciona
                  </Button>
                </a>
              </div>
            </SectionReveal>
          </div>

          {/* Visual Column - Dashboard Preview */}
          <SectionReveal direction="right" delay={300}>
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Main Card */}
              <div className="relative rounded-3xl glass p-8 shadow-2xl">
                {/* Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-5 mb-6">
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-medium">Painel MOV</p>
                    <p className="font-heading font-bold text-xl text-white mt-1">Negócio Contábil Escalável</p>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-green-main/15 flex items-center justify-center">
                    <TrendingUp className="h-6 w-6 text-green-main" />
                  </div>
                </div>

                {/* Progress */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Processamento de vendas</span>
                    <span className="text-accent font-mono font-bold">85%</span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-accent to-blue-main animate-shimmer" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="rounded-2xl bg-bg-dark/80 p-4 border border-white/5 text-center">
                    <Users className="w-4 h-4 text-accent mx-auto mb-2" />
                    <p className="text-xl font-bold text-white font-mono">+127</p>
                    <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">Leads</p>
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

                {/* Activity mini */}
                <div className="mt-5 pt-5 border-t border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-white font-medium">Novo contrato fechado</p>
                      <p className="text-[10px] text-slate-500">Empresa ABC - R$ 2.400/mês</p>
                    </div>
                    <span className="text-[10px] text-accent font-mono">agora</span>
                  </div>
                </div>
              </div>

              {/* Floating decorative elements */}
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
