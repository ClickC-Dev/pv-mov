"use client"

import { useState } from "react"
import {
  LayoutTemplate, Globe, FileText, ShoppingCart, Bot, Phone, Settings, Cpu,
  PenTool, Calendar, FileVideo, BarChart3, Linkedin, MessageCircle,
  Megaphone, Instagram, MapPin, Search, BookOpen, FileImage, Zap,
  DollarSign, LayoutDashboard, Users, Kanban, Workflow, Plug, FileCheck, ClipboardList, Target,
} from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { cn } from "@/lib/utils"

const areas = [
  {
    id: "estrutura",
    label: "Estrutura",
    icon: LayoutTemplate,
    color: "primary",
    tagline: "A \"Loja\" do seu negócio digital",
    description: "É o alicerce de toda estruturação do negócio digital. Em uma metáfora, seria a \"Loja\" no mundo digital. Ative qualquer módulo que faça sentido para sua estratégia.",
    modules: [
      { icon: Globe, name: "Site", desc: "Seu site institucional já publicado" },
      { icon: FileText, name: "Página de Captura", desc: "Coleta leads em troca de algo de valor" },
      { icon: ShoppingCart, name: "Página de Vendas", desc: "Página pronta pra conversão" },
      { icon: Target, name: "Quiz", desc: "Interativo e ideal pra captar leads frios" },
      { icon: Bot, name: "ChatBot", desc: "Conversa automática 24h pro seu negócio" },
      { icon: Phone, name: "Call Fake", desc: "Simulação de ligação personalizada com áudio" },
      { icon: Settings, name: "Sistema", desc: "Tenha seu sistema personalizado" },
    ],
  },
  {
    id: "conteudo",
    label: "Conteúdo",
    icon: PenTool,
    color: "blue-main",
    tagline: "A \"Vitrine\" da sua marca",
    description: "É o que mostra que a marca está viva na internet. A \"Vitrine\" da \"Loja\", onde mostra que a marca é atualizada, segue tendências, é profissional e passa autoridade.",
    modules: [
      { icon: PenTool, name: "Criação", desc: "Posts, stories e reels com estratégias validadas" },
      { icon: Calendar, name: "Publicação Meta", desc: "Conteúdo no Facebook e Instagram sem esforço" },
      { icon: FileVideo, name: "Roteiros", desc: "O que falar, como falar e quando falar" },
      { icon: BarChart3, name: "Métricas", desc: "Acompanhe o desempenho em tempo real" },
      { icon: Linkedin, name: "Publicação LinkedIn", desc: "Posicionamento profissional automático" },
      { icon: MessageCircle, name: "Interação", desc: "Engajamento para manter audiência quente" },
    ],
  },
  {
    id: "marketing",
    label: "Marketing",
    icon: Megaphone,
    color: "accent",
    tagline: "Buscando oportunidades na internet",
    description: "Um motor que busca novas oportunidades na internet. Em uma metáfora, seria um vendedor coletando contatos em uma avenida movimentada.",
    modules: [
      { icon: Instagram, name: "Prospecção Instagram", desc: "Coleta leads que seguem você ou seus concorrentes" },
      { icon: MapPin, name: "Prospecção Local", desc: "Capta leads via Google Maps e palavras-chave locais" },
      { icon: Search, name: "Prospecção LinkedIn", desc: "Conecta com decisores e extrai contatos qualificados" },
      { icon: BookOpen, name: "Roteiros", desc: "Scripts prontos para prospectar sem parecer invasivo" },
      { icon: FileImage, name: "Material Digital", desc: "E-books e iscas digitais para atrair leads" },
      { icon: Zap, name: "Anúncio de Atração", desc: "Campanhas para transformar desconhecidos em leads" },
    ],
  },
  {
    id: "vendas",
    label: "Vendas",
    icon: DollarSign,
    color: "green-main",
    tagline: "Convertendo oportunidades em contratos",
    description: "Um motor que inicia o processo de vendas. Envio inteligente em massa usando IA ou mensagens pré-definidas com macros personalizados, gestão de contatos e roteiros estratégicos.",
    modules: [
      { icon: LayoutDashboard, name: "Painel", desc: "Dashboard com métricas, KPIs e insights em tempo real" },
      { icon: Users, name: "Contatos", desc: "Gestão completa de leads, clientes e categorias" },
      { icon: Kanban, name: "CRM", desc: "Funil de vendas Kanban — arraste e solte contatos" },
      { icon: Workflow, name: "Campanhas", desc: "Construtor visual de fluxos inteligentes de WhatsApp" },
      { icon: Plug, name: "Conexões", desc: "Gerencie instâncias do WhatsApp e status" },
      { icon: FileCheck, name: "Proposta Comercial", desc: "Propostas profissionais com poucos cliques" },
      { icon: ClipboardList, name: "Roteiros", desc: "Passo a passo do atendimento ao fechamento" },
      { icon: Target, name: "Anúncio de Venda", desc: "Anúncios prontos para fechamento em alta conversão" },
    ],
  },
]

const colorMap: Record<string, { bg: string; text: string; border: string; activeBg: string; gradientFrom: string }> = {
  primary: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20", activeBg: "bg-primary", gradientFrom: "from-primary/10" },
  "blue-main": { bg: "bg-blue-main/10", text: "text-blue-main", border: "border-blue-main/20", activeBg: "bg-blue-main", gradientFrom: "from-blue-main/10" },
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20", activeBg: "bg-accent", gradientFrom: "from-accent/10" },
  "green-main": { bg: "bg-green-main/10", text: "text-green-main", border: "border-green-main/20", activeBg: "bg-green-main", gradientFrom: "from-green-main/10" },
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
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Dentro da MOV
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface mb-6">
              Todos os módulos que você precisa.{" "}
              <span className="text-gradient">Em um só lugar.</span>
            </h2>
            <p className="text-lg text-surface-sec">
              Cada área da MOV possui módulos especializados para resolver cada etapa da jornada de vendas do seu negócio contábil.
            </p>
          </div>
        </SectionReveal>

        {/* Tabs */}
        <SectionReveal delay={100}>
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
                    Área de {activeArea.label}{" "}
                    <span className="text-surface-sec font-normal text-lg">— {activeArea.tagline}</span>
                  </h3>
                  <p className="text-surface-sec mt-1 max-w-2xl">{activeArea.description}</p>
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
