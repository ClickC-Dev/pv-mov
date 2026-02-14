"use client"

import { useState } from "react"
import {
  LayoutTemplate, Globe, FileText, ShoppingCart, Bot, Phone, Settings, Cpu,
  PenTool, Calendar, FileVideo, BarChart3, Linkedin, MessageCircle,
  Megaphone, Instagram, MapPin, Search, BookOpen, FileImage, Zap,
  DollarSign, LayoutDashboard, Users, Kanban, Workflow, Plug, FileCheck, ClipboardList, Target,
  UserX, Palette, Volume2, LineChart,
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { cn } from "@/lib/utils"

const noNeedToHire = [
  {
    icon: Palette,
    role: "Social Media",
    cost: "R$ 2.000/mês",
    replacement: "A MOV cria, agenda e publica conteúdo automaticamente.",
  },
  {
    icon: Volume2,
    role: "Gestor de Tráfego",
    cost: "R$ 1.500/mês",
    replacement: "Anúncios prontos e prospecção automática integrados.",
  },
  {
    icon: UserX,
    role: "SDR / Pré-vendedor",
    cost: "R$ 2.500/mês",
    replacement: "IA prospecta, qualifica e agenda no WhatsApp por você.",
  },
  {
    icon: LineChart,
    role: "Designer + Copywriter",
    cost: "R$ 3.000/mês",
    replacement: "Artes, textos e roteiros gerados prontos para usar.",
  },
]

const areas = [
  {
    id: "estrutura",
    label: "Estrutura",
    icon: LayoutTemplate,
    color: "primary",
    tagline: "Sua \"Loja\" no digital — pronta em minutos",
    modules: [
      { icon: Globe, name: "Site", desc: "Publicado e otimizado" },
      { icon: FileText, name: "Página de Captura", desc: "Coleta leads automático" },
      { icon: ShoppingCart, name: "Página de Vendas", desc: "Pronta para conversão" },
      { icon: Target, name: "Quiz", desc: "Captação interativa" },
      { icon: Bot, name: "ChatBot", desc: "Atendimento 24h com IA" },
      { icon: Phone, name: "Call Fake", desc: "Ligação personalizada" },
      { icon: Settings, name: "Sistema", desc: "Personalizado para você" },
    ],
  },
  {
    id: "conteudo",
    label: "Conteúdo",
    icon: PenTool,
    color: "blue-main",
    tagline: "Sua marca viva e com autoridade — sem esforço",
    modules: [
      { icon: PenTool, name: "Criação", desc: "Posts, stories e reels prontos" },
      { icon: Calendar, name: "Publicação", desc: "Automática no Meta e LinkedIn" },
      { icon: FileVideo, name: "Roteiros", desc: "O que falar nos vídeos" },
      { icon: BarChart3, name: "Métricas", desc: "Desempenho em tempo real" },
      { icon: Linkedin, name: "LinkedIn", desc: "Posicionamento profissional" },
      { icon: MessageCircle, name: "Interação", desc: "Engajamento automático" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    color: "accent",
    tagline: "Leads chegando todo dia — sem você precisar fazer nada",
    modules: [
      { icon: Instagram, name: "Prospecção IG", desc: "Leads do seu concorrente" },
      { icon: MapPin, name: "Prospecção Local", desc: "Via Google Maps" },
      { icon: Search, name: "Prospecção LinkedIn", desc: "Decisores direto" },
      { icon: BookOpen, name: "Roteiros", desc: "Scripts que não parecem spam" },
      { icon: FileImage, name: "Material Digital", desc: "E-books e iscas" },
      { icon: Zap, name: "Anúncios", desc: "Campanhas de atração prontas" },
    ],
  },
  {
    id: "vendas",
    label: "Vendas",
    icon: DollarSign,
    color: "green-main",
    tagline: "Leads viram contratos — no automático",
    modules: [
      { icon: LayoutDashboard, name: "Painel", desc: "KPIs em tempo real" },
      { icon: Users, name: "Contatos", desc: "Gestão completa de leads" },
      { icon: Kanban, name: "CRM", desc: "Funil Kanban arrasta e solta" },
      { icon: Workflow, name: "Campanhas", desc: "Fluxos inteligentes WhatsApp" },
      { icon: Plug, name: "Conexões", desc: "WhatsApp integrado" },
      { icon: FileCheck, name: "Proposta", desc: "Profissional em 1 clique" },
      { icon: ClipboardList, name: "Roteiros", desc: "Do atendimento ao fechamento" },
      { icon: Target, name: "Anúncio de Venda", desc: "Alta conversão pronto" },
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

        {/* Header */}
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

        {/* No Need to Hire - Impact Section */}
        <SectionReveal delay={100}>
          <div className="max-w-5xl mx-auto mb-20">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-accent to-green-main" />

              <div className="text-center mb-10">
                <h3 className="text-2xl md:text-3xl font-heading font-bold text-surface mb-3">
                  Você <span className="text-red-main line-through decoration-2">não precisa contratar</span> nenhum deles:
                </h3>
                <p className="text-surface-sec text-lg">
                  A MOV substitui toda essa equipe por <strong className="text-surface">R$ 97/mês</strong>.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {noNeedToHire.map((item, i) => (
                  <div key={i} className="group relative">
                    <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 h-full transition-all duration-300 group-hover:shadow-lg group-hover:border-primary/20">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-xl bg-red-sec flex items-center justify-center shrink-0">
                          <item.icon className="w-5 h-5 text-red-main" />
                        </div>
                        <div>
                          <p className="font-bold text-surface text-sm">{item.role}</p>
                          <p className="text-xs text-red-main font-bold line-through">{item.cost}</p>
                        </div>
                      </div>
                      <p className="text-sm text-surface-sec leading-relaxed">{item.replacement}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-3 bg-green-main/10 border border-green-main/20 px-6 py-3 rounded-2xl">
                  <span className="text-sm text-surface-sec">Economia total:</span>
                  <span className="text-xl font-heading font-extrabold text-green-main">R$ 9.000/mês</span>
                  <span className="text-sm text-surface-sec">→ Você paga</span>
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
                </button>
              )
            })}
          </div>
        </SectionReveal>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          {/* Area header */}
          <SectionReveal key={activeTab}>
            <div className={`rounded-3xl p-8 md:p-10 mb-8 bg-white border border-slate-100 shadow-xl relative overflow-hidden`}>
              <div className={`absolute top-0 right-0 w-64 h-64 ${colors.bg} rounded-full blur-[80px] opacity-60`} />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4">
                <div className={`w-16 h-16 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center shrink-0`}>
                  <activeArea.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold text-surface">
                    {activeArea.label}
                  </h3>
                  <p className="text-surface-sec mt-1 text-lg">{activeArea.tagline}</p>
                </div>
              </div>
            </div>
          </SectionReveal>

          {/* Modules grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {activeArea.modules.map((mod, i) => (
              <SectionReveal key={`${activeTab}-${i}`} delay={i * 50}>
                <div className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300 h-full card-3d">
                  <div className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <mod.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-surface mb-1.5">{mod.name}</h4>
                  <p className="text-sm text-surface-sec leading-relaxed">{mod.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
