import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"

export function Hero() {
    return (
        <section className="relative overflow-hidden bg-bg-dark text-white pt-24 pb-32">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 opacity-20">
                <div className="h-96 w-96 rounded-full bg-primary blur-3xl filter" />
            </div>
            <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 opacity-10">
                <div className="h-80 w-80 rounded-full bg-blue-main blur-3xl filter" />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
                    {/* Content Column */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white">
                                Transforme sua contabilidade em uma <span className="text-primary">Máquina de Vendas</span>
                            </h1>
                            <p className="max-w-xl text-lg text-slate-300">
                                A MOV é o método que transforma contadores técnicos em negócios contábeis que atraem, posicionam e vendem com consistência no digital.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                <span>Você não precisa postar todo dia.</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                <span>Não precisa virar influencer.</span>
                            </div>
                            <div className="flex items-center gap-3 text-slate-300">
                                <CheckCircle2 className="h-5 w-5 text-accent" />
                                <span>E não precisa disputar cliente por preço.</span>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button size="lg" className="w-full sm:w-auto font-bold text-lg shadow-lg shadow-primary/20">
                                Quero estruturar meu crescimento
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Visual Column */}
                    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                        <div className="relative rounded-2xl bg-surface/50 border border-white/10 p-8 backdrop-blur-sm shadow-2xl">
                            <div className="space-y-6">
                                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                                    <div>
                                        <p className="text-sm text-slate-400">Objetivo</p>
                                        <p className="font-semibold text-white">Negócio Contábil Escalável</p>
                                    </div>
                                    <div className="h-10 w-10 rounded-full bg-green-main/20 flex items-center justify-center">
                                        <CheckCircle2 className="h-5 w-5 text-green-main" />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="h-2 w-full rounded-full bg-white/5 overflow-hidden">
                                        <div className="h-full w-[85%] bg-accent rounded-full animate-pulse" />
                                    </div>
                                    <p className="text-xs text-right text-accent font-mono">Processamento de vendas: 85%</p>
                                </div>
                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="rounded-xl bg-bg-dark p-4 border border-white/5">
                                        <p className="text-xs text-slate-400">Leads Qualificados</p>
                                        <p className="text-2xl font-bold text-white mt-1">+127</p>
                                    </div>
                                    <div className="rounded-xl bg-bg-dark p-4 border border-white/5">
                                        <p className="text-xs text-slate-400">Contratos Fechados</p>
                                        <p className="text-2xl font-bold text-white mt-1">+14</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Decorative Elements around card */}
                        <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-gradient-to-br from-primary to-transparent opacity-20 blur-xl" />
                    </div>
                </div>
            </div>
        </section>
    )
}
