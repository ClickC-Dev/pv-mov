"use client"

import { AnimatedCounter } from "@/components/ui/animated-counter"
import { SectionReveal } from "@/components/ui/section-reveal"
import { Quote, MessageCircle, Send, UserPlus, FileCheck, Bell, TrendingUp } from "lucide-react"

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

        {/* Visual Proof - Live System Mockups */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Prova Concreta
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface mb-4">
              Isso acontece <span className="text-gradient">todo dia</span> dentro da MOV
            </h2>
            <p className="text-lg text-surface-sec">
              Enquanto você atende seus clientes, a máquina trabalha por você.
            </p>
          </div>
        </SectionReveal>

        {/* Mock System Screenshots */}
        <SectionReveal delay={100}>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-20">
            {/* CRM Mock */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-main/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-main/40" />
                </div>
                <span className="text-[10px] text-slate-400 font-mono ml-2">CRM — Funil de Vendas</span>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-3 gap-3">
                  {/* Lead Column */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-blue-main" />
                      Leads <span className="text-blue-main">(23)</span>
                    </div>
                    <div className="space-y-2">
                      {["João Silva - MEI", "Maria Costa - Comércio", "Pedro Santos - Serviços"].map((name, i) => (
                        <div key={i} className="bg-blue-main/5 border border-blue-main/10 rounded-xl p-2.5">
                          <p className="text-[11px] font-medium text-surface truncate">{name}</p>
                          <p className="text-[9px] text-surface-sec mt-0.5">via Instagram</p>
                        </div>
                      ))}
                      <div className="text-[10px] text-blue-main font-medium text-center">+20 mais...</div>
                    </div>
                  </div>
                  {/* Proposal Column */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      Proposta <span className="text-accent">(8)</span>
                    </div>
                    <div className="space-y-2">
                      {["Ana Lima - R$ 890/mês", "Carlos Oliveira - R$ 1.200/mês"].map((name, i) => (
                        <div key={i} className="bg-accent/5 border border-accent/10 rounded-xl p-2.5">
                          <p className="text-[11px] font-medium text-surface truncate">{name}</p>
                          <p className="text-[9px] text-surface-sec mt-0.5">Proposta enviada</p>
                        </div>
                      ))}
                      <div className="text-[10px] text-accent font-medium text-center">+6 mais...</div>
                    </div>
                  </div>
                  {/* Closed Column */}
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-green-main" />
                      Fechado <span className="text-green-main">(5)</span>
                    </div>
                    <div className="space-y-2">
                      {["Empresa ABC - R$ 650/mês", "Tech Solutions - R$ 1.500/mês"].map((name, i) => (
                        <div key={i} className="bg-green-main/5 border border-green-main/10 rounded-xl p-2.5">
                          <p className="text-[11px] font-medium text-surface truncate">{name}</p>
                          <p className="text-[9px] text-green-main font-bold mt-0.5">Contrato assinado</p>
                        </div>
                      ))}
                      <div className="text-[10px] text-green-main font-medium text-center">+3 mais...</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Live Feed Mock */}
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
              <div className="bg-slate-50 px-6 py-3 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-main/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/40" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-main/40" />
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono ml-2">Notificações — Tempo Real</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-green-main animate-pulse" />
                  <span className="text-[9px] text-green-main font-bold">AO VIVO</span>
                </div>
              </div>
              <div className="p-5 space-y-3">
                {[
                  { icon: UserPlus, text: "Novo lead capturado", detail: "Lucas Ferreira — via Landing Page", time: "agora", color: "text-blue-main", bg: "bg-blue-main/10" },
                  { icon: MessageCircle, text: "Lead respondeu no WhatsApp", detail: "Ana Lima — \"Quero saber mais sobre o plano\"", time: "2min", color: "text-green-main", bg: "bg-green-main/10" },
                  { icon: Send, text: "Proposta enviada automaticamente", detail: "Carlos Oliveira — R$ 890/mês Abertura + Contábil", time: "8min", color: "text-primary", bg: "bg-primary/10" },
                  { icon: Bell, text: "Follow-up automático disparado", detail: "3 leads sem resposta há 48h", time: "15min", color: "text-accent", bg: "bg-accent/10" },
                  { icon: FileCheck, text: "Contrato fechado!", detail: "Tech Solutions — R$ 1.500/mês", time: "32min", color: "text-green-main", bg: "bg-green-main/10", highlight: true },
                  { icon: TrendingUp, text: "Meta mensal atingida: 14 contratos", detail: "Parabéns! +R$ 8.400/mês em receita recorrente", time: "1h", color: "text-primary", bg: "bg-primary/10", highlight: true },
                ].map((item, i) => (
                  <div key={i} className={`flex items-center gap-3 p-3 rounded-xl border ${item.highlight ? "bg-green-main/5 border-green-main/15" : "bg-slate-50/50 border-slate-100"}`}>
                    <div className={`w-8 h-8 rounded-full ${item.bg} flex items-center justify-center shrink-0`}>
                      <item.icon className={`w-4 h-4 ${item.color}`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className={`text-[11px] font-bold ${item.highlight ? "text-green-main" : "text-surface"} truncate`}>{item.text}</p>
                      <p className="text-[10px] text-surface-sec truncate">{item.detail}</p>
                    </div>
                    <span className={`text-[9px] font-mono shrink-0 ${item.highlight ? "text-green-main font-bold" : "text-surface-sec"}`}>{item.time}</span>
                  </div>
                ))}
              </div>
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
