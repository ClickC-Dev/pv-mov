import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MOV - Máquina Online de Vendas | ClickC",
  description:
    "A MOV é o método e sistema que transforma contadores técnicos em negócios contábeis que atraem, posicionam e vendem com consistência no digital.",
  keywords: [
    "MOV",
    "ClickC",
    "contabilidade digital",
    "marketing contábil",
    "vendas para contadores",
    "máquina online de vendas",
  ],
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Outfit:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  )
}
