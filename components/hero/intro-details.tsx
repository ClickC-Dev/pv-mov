"use client"

import { CheckCircle2, ChevronDown, Users, Building2, Rocket, Briefcase } from "lucide-react"
import { SectionReveal } from "@/components/ui/section-reveal"

export function IntroDetails() {
  return (
    <section id="o-que-e" className="bg-bg-light py-24 lg:py-32 relative z-10 bg-mesh">
      <div className="container-custom space-y-28">

        {/* 1. O QUE É A MOV */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <SectionReveal direction="left">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-sec border border-blue-main/20 text-blue-main text-xs font-bold uppercase tracking-wider">
                <Rocket className="w-3.5 h-3.5" />
                <span>O Ecossistema</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-surface leading-tight">
                O que é a <span className="text-gradient-blue">MOV</span>?
              </h2>
              <p className="text-lg text-surface-sec leading-relaxed">
                A MOV (<span className="font-semibold text-primary">Máquina Online de Vendas</span>) é um sistema completo para dar toda a estrutura que uma contabilidade precisa para vender na internet.
              </p>
              <div className="relative pl-6">
                <div className="absolute left-0 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-primary to-accent" />
                <p className="text-lg text-surface-sec leading-relaxed italic">
                  &ldquo;Não é sobre postar mais. É sobre se posicionar com autoridade, gerar demanda qualificada e vender com consistência.&rdquo;
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right" delay={200}>
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-blue-main/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-sec to-transparent opacity-60" />
              <h3 className="font-heading font-bold text-xl text-surface mb-6 relative z-10">
                Os 4 Motores da MOV:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 relative z-10">
                {[
                  { num: "01", title: "Estrutura", desc: "Fundação estratégica e técnica.", color: "from-primary/10 to-primary/5" },
                  { num: "02", title: "Conteúdo", desc: "Autoridade que atrai e retém.", color: "from-blue-main/10 to-blue-main/5" },
                  { num: "03", title: "Marketing", desc: "Atração e crescimento real.", color: "from-accent/10 to-accent/5" },
                  { num: "04", title: "Vendas", desc: "Conversão com método validado.", color: "from-green-main/10 to-green-main/5" },
                ].map((item, i) => (
                  <div key={i} className={`p-5 rounded-2xl bg-gradient-to-br ${item.color} border border-slate-100 group hover:shadow-md transition-all duration-300`}>
                    <span className="text-xs font-mono font-bold text-surface-sec/50 block mb-2">{item.num}</span>
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <h4 className="font-bold text-surface">{item.title}</h4>
                    </div>
                    <p className="text-sm text-surface-sec">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        </div>

        {/* 2. PARA QUEM É */}
        <div className="space-y-14">
          <SectionReveal>
            <div className="text-center max-w-2xl mx-auto space-y-4">
              <span className="text-primary text-sm font-bold tracking-[0.15em] uppercase">Público-Alvo</span>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface">
                Para quem a MOV foi criada?
              </h2>
              <p className="text-surface-sec text-lg">
                Um método validado em campo, adaptável ao seu momento de negócio.
              </p>
            </div>
          </SectionReveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Autônomos",
                desc: "Que querem se destacar e atrair clientes online sem depender de indicação.",
                gradient: "from-primary/5 to-transparent",
              },
              {
                icon: Building2,
                title: "Escritórios",
                desc: "Que já possuem equipe mas precisam escalar sua geração de demanda.",
                gradient: "from-blue-main/5 to-transparent",
              },
              {
                icon: Rocket,
                title: "Novos Entrantes",
                desc: "Profissionais começando agora que querem iniciar da forma certa no digital.",
                gradient: "from-accent/5 to-transparent",
              },
              {
                icon: Briefcase,
                title: "Equipes de Mkt",
                desc: "Setores de marketing contábil que precisam de um método e processos claros.",
                gradient: "from-green-main/5 to-transparent",
              },
            ].map((item, i) => (
              <SectionReveal key={i} delay={i * 100}>
                <div className={`group bg-white p-7 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-500 card-3d h-full bg-gradient-to-br ${item.gradient}`}>
                  <div className="w-14 h-14 rounded-2xl bg-blue-sec flex items-center justify-center text-blue-main mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-bold text-lg text-surface mb-2">{item.title}</h3>
                  <p className="text-sm text-surface-sec leading-relaxed">{item.desc}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>

        {/* 3. TRANSIÇÃO NARRATIVA */}
        <SectionReveal>
          <div className="max-w-4xl mx-auto text-center pt-8 pb-4">
            <div className="space-y-6">
              <p className="text-2xl md:text-3xl lg:text-4xl text-surface-sec font-medium leading-tight">
                Muitos contadores estudam, se especializam, trabalham horas a fio e entregam com excelência técnica...
              </p>
              <p className="text-xl md:text-2xl lg:text-3xl text-primary font-bold">
                Mas o crescimento financeiro e a liberdade não vêm.
              </p>
              <div className="flex flex-col items-center gap-2 pt-6 opacity-50">
                <span className="text-sm font-bold uppercase tracking-[0.2em] text-surface-sec">Por quê?</span>
                <ChevronDown className="w-6 h-6 text-surface-sec animate-bounce" />
              </div>
            </div>
          </div>
        </SectionReveal>

      </div>
    </section>
  )
}
