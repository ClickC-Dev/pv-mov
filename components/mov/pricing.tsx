"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight, Crown, Clock, Gift, Zap } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

const plans = [
  {
    id: "clickapp",
    name: "ClickApp",
    badge: null,
    description: "Ferramentas e educação prática para iniciar sua jornada digital.",
    price: "47",
    period: "/mês",
    originalPrice: null,
    features: [
      "Caixas de Ferramentas (concorrência, vendas, etc.)",
      "Sistemas práticos (contratos, cálculos, etc.)",
      "Cursos específicos (IRPF, Reforma Tributária)",
      "CLIA - Inteligência Artificial Contábil",
    ],
    cta: "Começar com ClickApp",
    highlight: false,
    variant: "outline" as const,
  },
  {
    id: "mov-clickapp",
    name: "MOV + ClickApp",
    badge: "Mais Popular",
    description: "A máquina completa para atrair, posicionar e vender no automático.",
    price: "97",
    period: "/mês",
    originalPrice: "197",
    features: [
      "Tudo do ClickApp incluso",
      "Área de Estrutura (site, landing pages, quiz, chatbot)",
      "Área de Conteúdo (criação e publicação automática)",
      "Área de Marketing (prospecção IG, LinkedIn, Maps)",
      "Área de Vendas (CRM, WhatsApp, propostas)",
      "Automações e IA integradas",
      "Suporte e atualizações contínuas",
    ],
    cta: "Ativar minha máquina agora",
    highlight: true,
    variant: "default" as const,
  },
]

export function Pricing() {
  return (
    <section id="planos" className="py-28 lg:py-36 bg-bg-light relative overflow-hidden bg-mesh">
      <div className="container-custom relative z-10">

        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-6">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Oferta
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface mb-6">
              Investimento que{" "}
              <span className="text-gradient">se paga no primeiro contrato</span>
            </h2>
            <p className="text-lg text-surface-sec">
              Escolha o plano ideal para o momento do seu negócio. Sem fidelidade, cancele quando quiser.
            </p>
          </div>
        </SectionReveal>

        {/* ROI Reinforcement */}
        <SectionReveal delay={50}>
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-8 max-w-3xl w-full">
              <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
                <div className="w-16 h-16 rounded-2xl bg-green-main/10 flex items-center justify-center shrink-0">
                  <Zap className="w-8 h-8 text-green-main" />
                </div>
                <div className="text-center md:text-left">
                  <p className="text-xl md:text-2xl font-heading font-bold text-surface mb-2">
                    Se fechar <span className="text-green-main">1 cliente de R$ 400</span>,
                    a MOV se paga <span className="text-primary">4x no primeiro mês.</span>
                  </p>
                  <p className="text-surface-sec">
                    A média dos nossos contadores é de <strong className="text-surface">14 contratos/mês</strong>.
                    Faça as contas: <strong className="text-green-main">R$ 5.600/mês</strong> de receita nova recorrente por <strong className="text-primary">R$ 97/mês</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Urgency Banner */}
        <SectionReveal delay={100}>
          <div className="flex justify-center mb-14">
            <div className="inline-flex items-center gap-3 bg-red-sec border border-red-main/20 px-6 py-3 rounded-2xl">
              <Clock className="w-5 h-5 text-red-main" />
              <p className="text-sm font-bold text-red-main">
                Vagas limitadas para ativação com desconto contábil. Ative antes que o preço suba.
              </p>
            </div>
          </div>
        </SectionReveal>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <SectionReveal key={plan.id} delay={i * 150}>
              <div
                className={`relative rounded-3xl p-8 md:p-10 h-full flex flex-col ${
                  plan.highlight
                    ? "bg-bg-dark text-white border-2 border-primary/30 shadow-2xl shadow-primary/10"
                    : "bg-white border border-slate-200 shadow-lg"
                }`}
              >
                {/* Badge */}
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1.5 bg-primary text-white px-5 py-1.5 rounded-full text-sm font-bold shadow-lg shadow-primary/30">
                      <Crown className="w-4 h-4" />
                      {plan.badge}
                    </div>
                  </div>
                )}

                {/* Decorative */}
                {plan.highlight && (
                  <>
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-[80px]" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent/10 rounded-full blur-[60px]" />
                  </>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  {/* Name */}
                  <h3 className={`text-2xl font-heading font-bold mb-2 ${plan.highlight ? "text-white" : "text-surface"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-sm mb-6 ${plan.highlight ? "text-slate-400" : "text-surface-sec"}`}>
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-8">
                    {plan.originalPrice && (
                      <div className="flex items-center gap-2 mb-1">
                        <span className={`text-sm line-through ${plan.highlight ? "text-slate-500" : "text-surface-sec/50"}`}>
                          R$ {plan.originalPrice}
                        </span>
                        <span className="text-xs font-bold bg-green-main/15 text-green-main px-2 py-0.5 rounded-full">
                          -51% Desconto Contábil
                        </span>
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className={`text-sm font-medium ${plan.highlight ? "text-slate-400" : "text-surface-sec"}`}>R$</span>
                      <span className={`text-5xl font-heading font-extrabold ${plan.highlight ? "text-white" : "text-surface"}`}>
                        {plan.price}
                      </span>
                      <span className={`text-lg font-medium ${plan.highlight ? "text-slate-400" : "text-surface-sec"}`}>
                        {plan.period}
                      </span>
                    </div>
                    {plan.highlight && (
                      <p className="text-xs text-slate-500 mt-2">
                        Menos que R$ 3,23/dia. <strong className="text-accent">1 cliente paga a MOV por 4 meses.</strong>
                      </p>
                    )}
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          plan.highlight ? "bg-green-main/20" : "bg-green-main/10"
                        }`}>
                          <Check className="w-3 h-3 text-green-main" />
                        </div>
                        <span className={`text-sm ${plan.highlight ? "text-slate-300" : "text-surface-sec"}`}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Bonus */}
                  {plan.highlight && (
                    <div className="mb-6 p-4 rounded-2xl bg-accent/10 border border-accent/20">
                      <div className="flex items-center gap-2 mb-1">
                        <Gift className="w-4 h-4 text-accent" />
                        <span className="text-xs font-bold text-accent uppercase tracking-wider">Bônus exclusivo</span>
                      </div>
                      <p className="text-sm text-slate-400">
                        Ative agora e ganhe acesso ao módulo <strong className="text-white">VIRA IR</strong> — estratégia completa para captar clientes na temporada do Imposto de Renda.
                      </p>
                    </div>
                  )}

                  {/* CTA */}
                  <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
                    <Button
                      size="lg"
                      variant={plan.variant}
                      className={`w-full font-bold text-base ${
                        plan.highlight
                          ? "shadow-xl shadow-primary/30 animate-glow-pulse"
                          : "border-slate-300 text-surface hover:bg-surface hover:text-white"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
