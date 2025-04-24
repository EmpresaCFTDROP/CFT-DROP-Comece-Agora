import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import TidioChatbot from "@/components/tidio-chatbot"
import HelpButton from "@/components/help-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CFT DROP - Dropshipping de Calçados",
  description: "Venda calçados sem estoque e sem investimento inicial. Comece seu negócio de dropshipping hoje mesmo.",
  keywords: "dropshipping, calçados, venda online, sem estoque, empreendedorismo",
  authors: [{ name: "CFT DROP" }],
  creator: "CFT DROP",
  publisher: "CFT DROP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/images/favicon.ico" />
      <script src="//code.tidio.co/hcb4iqisxpo8etghga2olwe79byjyss1.js" async></script>
      </head>
      <body className={inter.className}>
        {children}
        {/* Você pode remover o componente TidioChatbot se estiver usando o método acima */}
        <body className={inter.className}>
  {children}
  <HelpButton />
</body>
      </body>
    </html>
  )
}



import './globals.css'
