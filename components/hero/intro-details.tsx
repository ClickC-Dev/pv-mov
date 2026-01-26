import { CheckCircle2, ChevronDown, Users, Building2, Rocket, Briefcase } from "lucide-react"

export function IntroDetails() {
    return (
        <section className="bg-bg-light py-20 lg:py-24 relative z-10">
            <div className="container-custom space-y-24">

                {/* 1. O QUE É A MOV */}
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-sec border border-blue-main/20 text-blue-main text-xs font-bold uppercase tracking-wider">
                            <Rocket className="w-3 h-3" />
                            <span>O Ecossistema</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-surface">
                            O que é a <span className="text-blue-main">MOV</span>?
                        </h2>
                        <p className="text-lg text-surface-sec leading-relaxed">
                            A MOV (<span className="font-semibold text-primary">Máquina Online de Vendas</span>) é um sistema completo para dar toda a estrutura que uma contabilidade precisa para vender na internet.
                        </p>
                        <p className="text-lg text-surface-sec leading-relaxed border-l-4 border-primary/20 pl-4 italic">
                            "Não é sobre postar mais. É sobre se posicionar com autoridade, gerar demanda qualificada e vender com consistência."
                        </p>
                    </div>

                    <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-xl shadow-blue-main/5">
                        <h3 className="font-heading font-bold text-xl text-surface mb-6">
                            Os 4 Motores da MOV:
                        </h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { title: "Estrutura", desc: "Fundação estratégica e técnica." },
                                { title: "Conteúdo", desc: "Autoridade que atrai e retém." },
                                { title: "Marketing", desc: "Atração e crescimento real." },
                                { title: "Vendas", desc: "Conversão com método validado." }
                            ].map((item, i) => (
                                <div key={i} className="p-4 rounded-xl bg-bg-semi border border-slate-200">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle2 className="w-5 h-5 text-primary" />
                                        <h4 className="font-bold text-surface">{item.title}</h4>
                                    </div>
                                    <p className="text-sm text-surface-sec">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. PARA QUEM É */}
                <div className="space-y-12">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-3xl font-heading font-bold text-surface">
                            Para quem a MOV foi criada?
                        </h2>
                        <p className="text-surface-sec text-lg">
                            Um método validado em campo, adaptável ao seu momento de negócio.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Users,
                                title: "Autônomos",
                                desc: "Que querem se destacar e atrair clientes online sem depender de indicação."
                            },
                            {
                                icon: Building2,
                                title: "Escritórios",
                                desc: "Que já possuem equipe mas precisam escalar sua geração de demanda."
                            },
                            {
                                icon: Rocket,
                                title: "Novos Entrantes",
                                desc: "Profissionais começando agora que querem iniciar da forma certa no digital."
                            },
                            {
                                icon: Briefcase,
                                title: "Equipes de Mkt",
                                desc: "Setores de marketing contábil que precisam de um método e processos claros."
                            }
                        ].map((item, i) => (
                            <div key={i} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="w-12 h-12 rounded-full bg-blue-sec flex items-center justify-center text-blue-main mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-lg text-surface mb-2">{item.title}</h3>
                                <p className="text-sm text-surface-sec leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. TRANSIÇÃO NARRATIVA */}
                <div className="max-w-4xl mx-auto text-center pt-8 pb-4">
                    <div className="space-y-6">
                        <p className="text-2xl md:text-3xl text-surface-sec font-medium leading-tight">
                            Muitos contadores estudam, se especializam, trabalham horas a fio e entregam com excelência técnica...
                        </p>
                        <p className="text-xl md:text-2xl text-primary font-bold">
                            Mas o crescimento financeiro e a liberdade não vêm.
                        </p>
                        <div className="flex flex-col items-center gap-2 pt-4 opacity-50">
                            <span className="text-sm font-bold uppercase tracking-widest text-surface-sec">Por quê?</span>
                            <ChevronDown className="w-6 h-6 text-surface-sec animate-bounce" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}
