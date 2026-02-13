"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "Preciso ter experiência em marketing digital para usar a MOV?",
    answer: "Não. A MOV foi criada justamente para contadores que não têm experiência em marketing. O sistema é guiado, com roteiros prontos, templates e automações que fazem o trabalho pesado por você. Você só precisa ativar e personalizar.",
  },
  {
    question: "A MOV funciona para escritórios de qualquer tamanho?",
    answer: "Sim. A MOV é modular e se adapta tanto para contadores autônomos ('Euquipes') quanto para escritórios com equipes grandes. Você ativa apenas os módulos que fazem sentido para o seu momento.",
  },
  {
    question: "O que está incluso na assinatura MOV + ClickApp?",
    answer: "Você tem acesso completo às 4 áreas da MOV (Estrutura, Conteúdo, Marketing e Vendas) com todos os seus módulos, além de todo o conteúdo educacional do ClickApp (caixas de ferramentas, sistemas, cursos e CLIA - IA Contábil).",
  },
  {
    question: "Posso testar antes de assinar?",
    answer: "Sim! Oferecemos um Test Drive gratuito onde você coloca os dados da sua contabilidade e vê na hora como a MOV funcionaria no seu nome — com site, conteúdo, leads e tudo mais. É uma simulação real. Acesse app.clickc.com.br e clique em 'Teste Grátis'.",
  },
  {
    question: "Qual a diferença entre a MOV e cursos de marketing?",
    answer: "Cursos ensinam teoria genérica. A MOV é um sistema completo de execução, 100% focado no mercado contábil. Você não precisa adaptar nada — tudo já foi pensado para a realidade de quem vende serviços contábeis. É método + ferramenta + execução.",
  },
  {
    question: "Tem fidelidade ou multa de cancelamento?",
    answer: "Não. A assinatura é mensal e sem fidelidade. Você pode cancelar a qualquer momento. Mas acreditamos que quando você ver os resultados, vai querer continuar.",
  },
  {
    question: "Como funciona o desconto para contadores?",
    answer: "Profissionais contábeis têm um plano especial: de R$ 197 por R$ 97/mês para o plano MOV + ClickApp. Basta comprovar seu vínculo com a contabilidade no momento da assinatura.",
  },
  {
    question: "A MOV cria conteúdo e posta automaticamente?",
    answer: "Sim! O módulo de Conteúdo cria posts, stories e reels com base em estratégias validadas, e o módulo de Publicação Meta coloca tudo no ar no Facebook e Instagram automaticamente. Você não precisa escrever nem postar nada manualmente.",
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "border rounded-2xl transition-all duration-300 overflow-hidden",
        isOpen
          ? "bg-white border-primary/15 shadow-lg shadow-primary/5"
          : "bg-white/80 border-slate-100 hover:border-slate-200 shadow-sm"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left px-6 md:px-8 py-5 md:py-6 flex items-center gap-4"
      >
        <span className={cn(
          "flex-1 font-bold transition-colors",
          isOpen ? "text-primary" : "text-surface"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300",
          isOpen ? "bg-primary text-white rotate-180" : "bg-slate-100 text-surface-sec"
        )}>
          <ChevronDown className="w-4 h-4" />
        </div>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isOpen ? "max-h-96 pb-6 md:pb-8" : "max-h-0"
        )}
      >
        <p className="px-6 md:px-8 text-surface-sec leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function Faq() {
  return (
    <section id="faq" className="py-28 lg:py-36 bg-bg-semi relative overflow-hidden bg-grid-light">
      <div className="container-custom relative z-10">

        {/* Header */}
        <SectionReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface mb-6">
              Perguntas que você pode ter
            </h2>
            <p className="text-lg text-surface-sec">
              Se sua dúvida não estiver aqui, entre em contato conosco.
            </p>
          </div>
        </SectionReveal>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <SectionReveal key={i} delay={i * 50}>
              <FaqItem question={faq.question} answer={faq.answer} />
            </SectionReveal>
          ))}
        </div>

      </div>
    </section>
  )
}
