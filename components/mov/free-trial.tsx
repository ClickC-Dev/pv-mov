"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Zap, Eye, Monitor, BarChart3 } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function FreeTrial() {
  return (
    <section className="py-28 lg:py-36 bg-bg-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-mesh-dark bg-grid" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/8 rounded-full blur-[200px]" />

      <div className="container-custom relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Content */}
            <SectionReveal direction="left">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium">
                  <Zap className="w-4 h-4 text-accent" />
                  <span className="text-accent font-bold">Novo</span>
                  <span className="text-slate-400">|</span>
                  <span className="text-slate-300">Test Drive Gratuito</span>
                </div>

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
                  Veja a MOV rodando{" "}
                  <span className="text-gradient">no nome da sua contabilidade</span>
                </h2>

                <p className="text-lg text-slate-400 leading-relaxed">
                  Antes de ativar, faça um test drive. Coloque os dados da sua contabilidade e veja na hora como a MOV funcionaria para você — com site, conteúdo, leads e tudo mais.
                </p>

                <p className="text-white font-medium text-lg">
                  É uma simulação real, como se você estivesse ativando hoje.
                </p>

                <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="font-bold text-lg shadow-xl shadow-primary/30 animate-glow-pulse mt-2">
                    Fazer meu Test Drive grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </a>

                <p className="text-xs text-slate-500">
                  Acesse app.clickc.com.br &rarr; Clique em &ldquo;Clique aqui para Teste Grátis&rdquo;
                </p>
              </div>
            </SectionReveal>

            {/* Visual */}
            <SectionReveal direction="right" delay={200}>
              <div className="relative">
                <div className="rounded-3xl glass p-8 space-y-6">
                  <div className="flex items-center gap-3 border-b border-white/10 pb-5">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-main/60" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                      <div className="w-3 h-3 rounded-full bg-green-main/60" />
                    </div>
                    <span className="text-xs text-slate-500 font-mono">app.clickc.com.br</span>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Monitor className="w-5 h-5 text-primary" />
                      <div className="flex-1">
                        <div className="h-3 w-3/4 bg-white/10 rounded-full" />
                        <div className="h-2 w-1/2 bg-white/5 rounded-full mt-2" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { icon: Eye, label: "Site Pronto", value: "Ativo" },
                        { icon: BarChart3, label: "Conteúdo", value: "12 posts" },
                        { icon: Zap, label: "Leads", value: "+23" },
                        { icon: Monitor, label: "Campanhas", value: "3 ativas" },
                      ].map((item, i) => (
                        <div key={i} className="rounded-2xl bg-bg-dark/60 p-4 border border-white/5">
                          <item.icon className="w-4 h-4 text-accent mb-2" />
                          <p className="text-[10px] text-slate-500 uppercase tracking-wider">{item.label}</p>
                          <p className="text-sm font-bold text-white mt-0.5">{item.value}</p>
                        </div>
                      ))}
                    </div>

                    <div className="rounded-2xl bg-green-main/10 border border-green-main/20 p-4 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-green-main/20 flex items-center justify-center">
                        <Zap className="w-4 h-4 text-green-main" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-green-main">Simulação pronta!</p>
                        <p className="text-[10px] text-slate-400">Sua MOV está pronta para ativação</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating glow */}
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/20 rounded-full blur-3xl animate-float" />
                <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/15 rounded-full blur-3xl animate-float" style={{ animationDelay: "-3s" }} />
              </div>
            </SectionReveal>

          </div>
        </div>
      </div>
    </section>
  )
}
