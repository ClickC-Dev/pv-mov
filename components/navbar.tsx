"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "O que é", href: "#o-que-e" },
  { label: "Como funciona", href: "#metodologia" },
  { label: "Módulos", href: "#modulos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "bg-bg-dark/90 backdrop-blur-xl border-b border-white/5 py-3 shadow-2xl shadow-black/20"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center font-heading font-black text-white text-sm tracking-tight">
              MOV
            </div>
            <div className="absolute inset-0 rounded-lg bg-primary blur-lg opacity-40 group-hover:opacity-60 transition-opacity" />
          </div>
          <div className="hidden sm:block">
            <span className="font-heading font-bold text-white text-lg">
              MOV
            </span>
            <span className="text-xs text-slate-400 block leading-none -mt-0.5">
              Máquina Online de Vendas
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="https://app.clickc.com.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="sm" className="shadow-lg shadow-primary/25">
              Teste Grátis
            </Button>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "lg:hidden absolute top-full left-0 right-0 bg-bg-dark/98 backdrop-blur-xl border-b border-white/5 overflow-hidden transition-all duration-300",
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="container-custom py-6 space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-base font-medium text-slate-300 hover:text-white transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://app.clickc.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="block pt-2"
          >
            <Button size="default" className="w-full shadow-lg shadow-primary/25">
              Teste Grátis
            </Button>
          </a>
        </div>
      </div>
    </nav>
  )
}
