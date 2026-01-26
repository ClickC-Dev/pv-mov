import { ArrowRight } from "lucide-react"

export function InvisibleProblem() {
    return (
        <section className="py-20 md:py-28 bg-bg-semi border-t border-slate-200">
            <div className="container-custom max-w-5xl mx-auto">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div className="space-y-6">
                        <h2 className="text-3xl font-heading font-bold text-primary">
                            O Problema Invisível
                        </h2>
                        <p className="text-surface-sec leading-relaxed text-lg">
                            Você pode ter Instagram, site, postar conteúdo, anunciar e falar com leads.
                        </p>
                        <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
                            <p className="text-surface italic">
                                "Mas sem clareza do que vende, para quem vende, por que alguém escolheria você e sem um processo de vendas estruturado,
                                <strong className="text-primary not-italic"> tudo vira tentativa.</strong>"
                            </p>
                        </div>
                        <p className="font-bold text-lg text-primary flex items-center gap-2">
                            E tentativa não escala.
                            <ArrowRight className="w-4 h-4 text-red-500" />
                        </p>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 flex flex-col justify-center text-center space-y-6 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                        <div className="w-16 h-16 bg-blue-sec text-blue-main rounded-full flex items-center justify-center mx-auto mb-2">
                            <ArrowRight className="w-8 h-8" />
                        </div>
                        <h3 className="text-2xl font-bold text-primary">
                            O mercado contábil não está saturado.
                        </h3>
                        <p className="text-lg text-surface-sec font-medium">
                            Ele está <span className="text-red-500 line-through decoration-2 decoration-red-200">saturado</span>. <br />
                            <span className="text-primary font-bold bg-yellow-100 px-2 py-0.5 mt-2 inline-block">Ele está mal posicionado.</span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}
