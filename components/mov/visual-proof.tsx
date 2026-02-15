"use client"

import { SectionReveal } from "@/components/ui/section-reveal"
import {
  MessageCircle, Send, UserPlus, FileCheck, Kanban,
  LayoutDashboard, Bot, Phone, Bell,
} from "lucide-react"

export function VisualProof() {
  return (
    <section className="py-24 lg:py-32 bg-bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-mesh-dark bg-grid" />
      <div className="absolute top-0 right-0 -translate-y-24 translate-x-24 opacity-20">
        <div className="h-[400px] w-[400px] rounded-full bg-primary blur-[120px]" />
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Prova real
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
              Veja a MOV funcionando{" "}
              <span className="text-gradient">de verdade</span>
            </h2>
            <p className="text-xl text-slate-400">
              Não é teoria. <strong className="text-white">É estrutura rodando.</strong>
            </p>
          </div>
        </SectionReveal>

        {/* 4 Visual Proof Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto mt-14">

          {/* 1 - CRM Pipeline */}
          <SectionReveal delay={0}>
            <div className="rounded-3xl glass p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-blue-main/15 flex items-center justify-center">
                  <Kanban className="w-4 h-4 text-blue-main" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">CRM Pipeline</span>
              </div>
              <div className="space-y-2">
                {[
                  { stage: "Leads", count: "23", color: "bg-blue-main", border: "border-blue-main/20" },
                  { stage: "Proposta", count: "8", color: "bg-accent", border: "border-accent/20" },
                  { stage: "Negociação", count: "5", color: "bg-primary", border: "border-primary/20" },
                  { stage: "Fechado", count: "14", color: "bg-green-main", border: "border-green-main/20" },
                ].map((s, i) => (
                  <div key={i} className={`flex items-center justify-between p-2.5 rounded-xl border ${s.border} bg-white/5`}>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${s.color}`} />
                      <span className="text-[11px] text-slate-300 font-medium">{s.stage}</span>
                    </div>
                    <span className="text-[11px] font-bold text-white font-mono">{s.count}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <span className="text-[10px] text-green-main font-bold">+14 contratos este mês</span>
              </div>
            </div>
          </SectionReveal>

          {/* 2 - Lead entrando */}
          <SectionReveal delay={100}>
            <div className="rounded-3xl glass p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-green-main/15 flex items-center justify-center">
                  <UserPlus className="w-4 h-4 text-green-main" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Leads entrando</span>
              </div>
              <div className="space-y-2">
                {[
                  { name: "João Silva", source: "Landing Page", time: "agora" },
                  { name: "Maria Costa", source: "Instagram", time: "3min" },
                  { name: "Pedro Santos", source: "Google Maps", time: "12min" },
                  { name: "Ana Lima", source: "LinkedIn", time: "28min" },
                ].map((lead, i) => (
                  <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl border border-white/5 bg-white/5">
                    <div className="w-6 h-6 rounded-full bg-green-main/20 flex items-center justify-center shrink-0">
                      <div className={`w-2 h-2 rounded-full bg-green-main ${i === 0 ? "animate-pulse" : ""}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-white font-medium truncate">{lead.name}</p>
                      <p className="text-[9px] text-slate-500">via {lead.source}</p>
                    </div>
                    <span className="text-[9px] text-accent font-mono shrink-0">{lead.time}</span>
                  </div>
                ))}
              </div>
              <div className="mt-3 text-center">
                <span className="text-[10px] text-blue-main font-bold">+127 leads/mês</span>
              </div>
            </div>
          </SectionReveal>

          {/* 3 - WhatsApp */}
          <SectionReveal delay={200}>
            <div className="rounded-3xl glass p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-green-main/15 flex items-center justify-center">
                  <MessageCircle className="w-4 h-4 text-green-main" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
              </div>
              <div className="space-y-2">
                <div className="p-2.5 rounded-xl bg-green-main/10 border border-green-main/20">
                  <p className="text-[11px] text-green-main font-medium">Oi! Vi que você precisa de contabilidade. Posso ajudar?</p>
                  <p className="text-[9px] text-slate-500 mt-1">IA da MOV — automático</p>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 ml-4">
                  <p className="text-[11px] text-slate-300">Sim! Preciso de abertura de empresa</p>
                  <p className="text-[9px] text-slate-500 mt-1">Lead — João Silva</p>
                </div>
                <div className="p-2.5 rounded-xl bg-green-main/10 border border-green-main/20">
                  <p className="text-[11px] text-green-main font-medium">Perfeito! Preparei uma proposta personalizada para você.</p>
                  <p className="text-[9px] text-slate-500 mt-1">IA da MOV — automático</p>
                </div>
                <div className="flex items-center gap-1.5 justify-center mt-1">
                  <Bot className="w-3 h-3 text-accent" />
                  <span className="text-[9px] text-accent font-bold">IA qualificando 24h</span>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* 4 - Proposta gerada */}
          <SectionReveal delay={300}>
            <div className="rounded-3xl glass p-6 h-full">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center">
                  <Send className="w-4 h-4 text-primary" />
                </div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Propostas</span>
              </div>
              <div className="space-y-2">
                <div className="p-3 rounded-xl border border-primary/20 bg-primary/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] text-white font-bold">Proposta #047</span>
                    <span className="text-[9px] bg-green-main/20 text-green-main px-2 py-0.5 rounded-full font-bold">Aceita</span>
                  </div>
                  <p className="text-[10px] text-slate-400">João Silva — Abertura + Contábil</p>
                  <p className="text-[13px] font-bold text-primary mt-1">R$ 890/mês</p>
                </div>
                <div className="p-3 rounded-xl border border-accent/20 bg-accent/5">
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] text-white font-bold">Proposta #048</span>
                    <span className="text-[9px] bg-accent/20 text-accent px-2 py-0.5 rounded-full font-bold">Enviada</span>
                  </div>
                  <p className="text-[10px] text-slate-400">Maria Costa — Contábil + Fiscal</p>
                  <p className="text-[13px] font-bold text-accent mt-1">R$ 1.200/mês</p>
                </div>
                <div className="flex items-center gap-1.5 justify-center mt-1">
                  <FileCheck className="w-3 h-3 text-green-main" />
                  <span className="text-[9px] text-green-main font-bold">Gerada em 1 clique</span>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* Bottom reinforcement */}
        <SectionReveal delay={400}>
          <div className="text-center mt-14">
            <p className="text-lg text-slate-500">
              Isso acontece <strong className="text-white">todo dia</strong>, no automático,{" "}
              <strong className="text-accent">enquanto você atende seus clientes.</strong>
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
