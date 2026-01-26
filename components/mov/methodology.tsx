import { Button } from "@/components/ui/button"
import { LayoutTemplate, PenTool, Megaphone, DollarSign, X, Check } from "lucide-react"

export function Methodology() {
    return (
        <section className="bg-bg-dark py-24 relative overflow-hidden text-surface-light">
            {/* Background Effects */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute -left-96 top-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>

            <div className="container-custom relative z-10">

                {/* 1. APRESENTAÇÃO DO SISTEMA */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <span className="text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4 block">
                        A Solução Definitiva
                    </span>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
                        Muito mais que um curso.<br />
                        Um <span className="text-primary">Sistema Completo</span>.
                    </h2>
                    <p className="text-xl text-slate-400 leading-relaxed max-w-2xl mx-auto">
                        O MOV nasceu para tirar você da estagnação da "tentativa e erro".
                        Unimos <strong className="text-white">Método Validado</strong> com <strong className="text-white">Sistema de Execução</strong>.
                    </p>
                </div>

                {/* 2. OS 4 MOTORES (DEEP DIVE) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {[
                        {
                            icon: LayoutTemplate,
                            title: "1. Estrutura",
                            subtitle: "Fundação Estratégica",
                            desc: "Clareza absoluta sobre quem você atende e como se diferencia. Sem isso, nenhuma ação de marketing funciona."
                        },
                        {
                            icon: PenTool,
                            title: "2. Conteúdo",
                            subtitle: "Autoridade que Atrai",
                            desc: "Pare de postar dicas aleatórias. Criação de desejo e reputação com linguagem alinhada ao seu público."
                        },
                        {
                            icon: Megaphone,
                            title: "3. Marketing",
                            subtitle: "Visibilidade em Oportunidade",
                            desc: "Tráfego pago, funis e campanhas que transformam desconhecidos em leads qualificados."
                        },
                        {
                            icon: DollarSign,
                            title: "4. Vendas",
                            subtitle: "Conversão com Método",
                            desc: "Scripts, processos e fechamento. Nada de esperar indicação: aqui você vende ativamente."
                        }
                    ].map((item, i) => (
                        <div key={i} className="group relative p-8 rounded-2xl bg-surface/30 border border-white/5 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-xl bg-bg-dark border border-white/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-black/50">
                                    <item.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-1">{item.title}</h3>
                                <p className="text-sm font-bold text-accent uppercase tracking-wide mb-4">{item.subtitle}</p>
                                <p className="text-slate-400 leading-relaxed text-sm">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 3. DIFERENCIAÇÃO (COMPARATIVO) */}
                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-8">
                        <h3 className="text-3xl font-heading font-bold text-white">
                            Por que a MOV é diferente?
                        </h3>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                    <X className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-300">Cursos Genéricos de Marketing</p>
                                    <p className="text-sm text-slate-500">Ensinam "hacks" de Instagram que não funcionam para vender B2B/Serviços Contábeis.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                                    <X className="w-5 h-5 text-red-500" />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-300">Consultorias "Mágicas"</p>
                                    <p className="text-sm text-slate-500">Prometem resultados sem mexer na estrutura do seu negócio. (Impossível).</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-surface to-bg-dark rounded-3xl p-8 border border-primary/20 relative shadow-2xl">
                        <div className="absolute -top-4 -right-4 bg-accent text-bg-dark font-bold px-4 py-1 rounded-full text-sm uppercase tracking-wider shadow-lg">
                            O jeito MOV
                        </div>
                        <h4 className="text-xl font-bold text-white mb-6">Com a Máquina você tem:</h4>
                        <ul className="space-y-4">
                            {[
                                "100% Focada no Mercado Contábil",
                                "Método validado em campo de batalha",
                                "Modular: serve para 'Euquipes' ou Grandes Escritórios",
                                "Foco em Resultado (Contratos), não em Likes"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3">
                                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                                        <Check className="w-4 h-4 text-green-500" />
                                    </div>
                                    <span className="text-white font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

            </div>
        </section>
    )
}
