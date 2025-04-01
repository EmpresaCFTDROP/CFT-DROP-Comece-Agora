"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Code, Check } from "lucide-react"

export default function UpsellerSection() {
  return (
    <section id="upseller" className="py-20 md:py-28 bg-upseller-primary/90 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-upseller-primary/40 via-transparent to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-upseller-accent px-3 py-1 text-sm font-bold text-upseller-primary rounded-lg mb-4">
            INTEGRAÇÃO PERFEITA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Integração Upseller</h2>
          <p className="text-light-dim text-lg">
            Automatize seu processo de vendas com a integração ao Upseller. Gerencie pedidos, estoque e envios em uma
            única plataforma.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <IntegrationProcess />
          <UpsellerCard />
        </div>
      </div>
    </section>
  )
}

function IntegrationProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        bg-dark/30 backdrop-blur-md border border-white/10 rounded-xl p-8 transition-all duration-500
        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
      `}
    >
      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-upseller-primary to-upseller-secondary flex items-center justify-center text-white shadow-lg">
          <Code size={24} />
        </div>
        <h3 className="text-2xl font-bold text-light">Processo de Integração</h3>
      </div>

      <p className="text-light-dim mb-8">
        Nossa integração com o Upseller permite que você gerencie todo o processo de vendas de forma automatizada, desde
        a captura do pedido até o envio para o cliente.
      </p>

      <div className="space-y-6">
        <IntegrationStep
          number={1}
          title="Conexão com API"
          description="Conecte sua loja ao nosso sistema através da API do Upseller."
        />

        <IntegrationStep
          number={2}
          title="Sincronização de Produtos"
          description="Importe automaticamente os produtos do nosso catálogo para sua loja."
        />

        <IntegrationStep
          number={3}
          title="Gerenciamento de Pedidos"
          description="Receba e processe pedidos diretamente na plataforma."
        />

        <IntegrationStep
          number={4}
          title="Envios Automatizados"
          description="Automatize o processo de envio de produtos aos seus clientes."
        />
      </div>
    </div>
  )
}

function UpsellerCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br from-[#001233] to-[#002766] border border-upseller-primary/30 rounded-xl p-8 relative overflow-hidden shadow-xl transition-all duration-500
        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
      `}
    >
      <span className="absolute top-4 right-4 bg-gradient-to-r from-upseller-primary to-upseller-secondary text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
        EXCLUSIVO
      </span>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-upseller-primary to-upseller-secondary flex items-center justify-center text-white shadow-lg">
          <Code size={24} />
        </div>
        <h3 className="text-2xl font-bold text-light">Upseller Integration</h3>
      </div>

      <p className="text-light-dim mb-8">
        Automatize seu processo de vendas com a integração ao Upseller. Gerencie pedidos, estoque e envios em uma única
        plataforma com facilidade.
      </p>

      <ul className="space-y-4 mb-8">
        <FeatureItem text="Integração com lojas virtuais" />
        <FeatureItem text="Gestão completa de pedidos" />
        <FeatureItem text="Sincronização em tempo real" />
        <FeatureItem text="Relatórios detalhados de vendas" />
        <FeatureItem text="Suporte técnico especializado" />
      </ul>

      <div className="text-center">
        <Button
          asChild
          className="bg-gradient-to-r from-upseller-primary to-upseller-secondary hover:shadow-blue-glow transition-all duration-300 text-white font-bold py-3 px-8 rounded-md"
        >
          <Link href="https://www.youtube.com/playlist?list=PLAYLIST_ID" target="_blank">
            Assistir Tutorial
          </Link>
        </Button>
      </div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}

interface IntegrationStepProps {
  number: number
  title: string
  description: string
}

function IntegrationStep({ number, title, description }: IntegrationStepProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-upseller-primary to-upseller-secondary flex items-center justify-center text-white font-bold text-sm shadow-md">
        {number}
      </div>
      <div>
        <h4 className="text-lg font-bold text-light mb-1">{title}</h4>
        <p className="text-light-dim">{description}</p>
      </div>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <Check size={18} className="text-green-400 flex-shrink-0" />
      <span className="text-light-dim">{text}</span>
    </li>
  )
}

