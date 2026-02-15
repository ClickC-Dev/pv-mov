"use client"

import { useState } from "react"
import {
  LayoutTemplate, Globe, FileText, ShoppingCart, Bot, Phone, Settings,
  PenTool, Calendar, FileVideo, BarChart3, Linkedin, MessageCircle,
  Megaphone, Instagram, MapPin, Search, BookOpen, FileImage, Zap,
  DollarSign, LayoutDashboard, Users, Kanban, Workflow, Plug, FileCheck, ClipboardList, Target,
  UserX, Palette, Volume2, LineChart,
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { cn } from "@/lib/utils"

const noNeedToHire = [
  { icon: Palette, role: "Social Media", cost: "R$ 2.000/mês" },
  { icon: Volume2, role: "Gestor de Tráfego", cost: "R$ 1.500/mês" },
  { icon: UserX, role: "SDR", cost: "R$ 2.500/mês" },
  { icon: LineChart, role: "Designer", cost: "R$ 3.000/mês" },
]

const areas = [
  {
    id: "estrutura",
    label: "Estrutura",
    icon: LayoutTemplate,
    color: "primary",
    modules: [
      { icon: Globe, name: "Site" },
      { icon: FileText, name: "Página de Captura" },
      { icon: ShoppingCart, name: "Página de Vendas" },
      { icon: Target, name: "Quiz" },
      { icon: Bot, name: "ChatBot" },
      { icon: Phone, name: "Call Fake" },
      { icon: Settings, name: "Sistema" },
    ],
  },
  {
    id: "conteudo",
    label: "Conteúdo",
    icon: PenTool,
    color: "blue-main",
    modules: [
      { icon: PenTool, name: "Criação" },
      { icon: Calendar, name: "Publicação" },
      { icon: FileVideo, name: "Roteiros" },
      { icon: BarChart3, name: "Métricas" },
      { icon: Linkedin, name: "LinkedIn" },
      { icon: MessageCircle, name: "Interação" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    color: "accent",
    modules: [
      { icon: Instagram, name: "Prospecção IG" },
      { icon: MapPin, name: "Prospecção Local" },
      { icon: Search, name: "Prospecção LinkedIn" },
      { icon: BookOpen, name: "Roteiros" },
      { icon: FileImage, name: "Material Digital" },
      { icon: Zap, name: "Anúncios" },
    ],
  },
  {
    id: "vendas",
    label: "Vendas",
    icon: DollarSign,
    color: "green-main",
    modules: [
      { icon: LayoutDashboard, name: "Painel" },
      { icon: Users, name: "Contatos" },
      { icon: Kanban, name: "CRM" },
      { icon: Workflow, name: "Campanhas" },
      { icon: Plug, name: "Conexões" },
      { icon: FileCheck, name: "Proposta" },
      { icon: ClipboardList, name: "Roteiros" },
      { icon: Target, name: "Anúncio de Venda" },
    ],
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; activeBg: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", activeBg: "bg-primary" },
  "blue-main": { bg: "bg-blue-main/10", text: "text-blue-main", border: "border-blue-main/20", activeBg: "bg-blue-main" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20", activeBg: "bg-accent" },
  "green-main": { bg: "bg-green-main/10", text: "text-green-main", border: "border-green-main/20", activeBg: "bg-green-main" },
}

export function ModulesDetail() {
  const [activeTab, setActiveTab] = useState("estrutura")
  const activeArea = areas.find((a) => a.id === activeTab)!
  const colors = colorMap[activeArea.color]

  return (
    <section id="modulos" className="py-28 lg:py-36 bg-bg-light relative overflow-hidden bg-mesh">
      <div className="container-custom relative z-10">

        {/* Header - Direct Impact */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Dentro da MOV
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface mb-6">
              Tudo que você precisaria contratar.{" "}
              <span className="text-gradient">Em um só lugar.</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Quick Overview - Ultra Direct */}
        <SectionReveal delay={50}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {["Site", "Conteúdo", "Leads", "IA", "CRM"].map((item) => (
              <div key={item} className="flex items-center gap-2 bg-white px-5 py-3 rounded-2xl border border-slate-100 shadow-sm">
                <div className="w-2.5 h-2.5 rounded-full bg-green-main" />
                <span className="font-bold text-surface text-sm">{item}</span>
              </div>
            ))}
            <div className="flex items-center px-5 py-3">
              <span className="text-accent font-bold text-sm">Tudo conectado.</span>
            </div>
          </div>
        </SectionReveal>

        {/* No Need to Hire - Compact Impact */}
        <SectionReveal delay={100}>
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-main via-accent to-green-main" />

              <h3 className="text-xl md:text-2xl font-heading font-bold text-surface text-center mb-8">
                Sem precisar contratar:
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {noNeedToHire.map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="w-12 h-12 rounded-2xl bg-red-sec flex items-center justify-center mx-auto mb-3">
                      <item.icon className="w-6 h-6 text-red-main" />
                    </div>
                    <p className="font-bold text-surface text-sm">
                      <span className="text-red-main">&#10005;</span> {item.role}
                    </p>
                    <p className="text-xs text-red-main font-bold line-through mt-1">{item.cost}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-flex items-center gap-3 bg-green-main/10 border border-green-main/20 px-6 py-3 rounded-2xl">
                  <span className="text-sm text-surface-sec">Economia:</span>
                  <span className="text-xl font-heading font-extrabold text-green-main">R$ 9.000/mês</span>
                  <span className="text-sm text-surface-sec">→</span>
                  <span className="text-xl font-heading font-extrabold text-primary">R$ 97/mês</span>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Tabs */}
        <SectionReveal delay={200}>
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {areas.map((area) => {
              const isActive = activeTab === area.id
              const c = colorMap[area.color]
              return (
                <button
                  key={area.id}
                  onClick={() => setActiveTab(area.id)}
                  className={cn(
                    "flex items-center gap-2.5 px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 border",
                    isActive
                      ? `${c.activeBg} text-white border-transparent shadow-lg`
                      : `bg-white ${c.text} ${c.border} hover:shadow-md`
                  )}
                >
                  <area.icon className="w-5 h-5" />
                  {area.label}
                  <span className="text-xs opacity-70">({activeTab === area.id ? areas.find(a => a.id === area.id)!.modules.length : areas.find(a => a.id === area.id)!.modules.length})</span>
                </button>
              )
            })}
          </div>
        </SectionReveal>

        {/* Modules Grid - Compact, Name-focused */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {activeArea.modules.map((mod, i) => (
              <SectionReveal key={`${activeTab}-${i}`} delay={i * 40}>
                <div className="group bg-white p-5 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full text-center card-3d">
                  <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <mod.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-surface text-sm">{mod.name}</h4>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
