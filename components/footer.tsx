"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-bg-dark relative overflow-hidden">
      {/* Final CTA */}
      <div className="relative py-24 lg:py-32">
        <div className="absolute inset-0 bg-mesh-dark" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[200px]" />

        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6 leading-tight">
            Pare de depender de indicação.{" "}
            <span className="text-gradient">Comece a vender com método.</span>
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
            A MOV já está transformando a forma como contadores vendem no digital. Chegou a sua vez.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://app.clickc.com.br" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-bold text-lg shadow-xl shadow-primary/30 animate-glow-pulse w-full sm:w-auto">
                Começar meu Teste Grátis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/5">
        <div className="container-custom py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center font-heading font-black text-white text-xs">
                MOV
              </div>
              <div>
                <span className="font-heading font-bold text-white text-sm">
                  MOV — Máquina Online de Vendas
                </span>
                <p className="text-xs text-slate-500">Parte do ecossistema ClickC</p>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8">
              {[
                { label: "O que é", href: "#o-que-e" },
                { label: "Como funciona", href: "#metodologia" },
                { label: "Módulos", href: "#modulos" },
                { label: "Planos", href: "#planos" },
                { label: "FAQ", href: "#faq" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-500 hover:text-white transition-colors hidden md:block"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-xs text-slate-600">
              &copy; {new Date().getFullYear()} ClickC. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
