export function ParadigmShift() {
    return (
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
            {/* Background Blur */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

            <div className="container-custom relative z-10 text-center max-w-3xl mx-auto">
                <h2 className="text-accent text-sm font-bold tracking-[0.2em] mb-4 uppercase">
                    Quebra de Paradigma
                </h2>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 leading-tight">
                    O problema não é você trabalhar pouco.<br />
                    <span className="text-slate-400">O problema é trabalhar sem método.</span>
                </h3>

                <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                    <p>
                        A maioria dos contadores trabalha muito, estuda, se atualiza tecnicamente e cumpre prazos.
                        <br />
                        <strong className="text-white">Mesmo assim, não cresce</strong>, não atrai bons clientes e não vende com constância.
                    </p>
                    <div className="h-px w-24 bg-slate-800 mx-auto my-8"></div>
                    <p className="text-xl font-medium text-white">
                        Isso não acontece por falta de esforço.<br />
                        Acontece por falta de <span className="text-accent border-b border-accent/20 pb-0.5">posicionamento, estrutura e método</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}
