"use client"

import type React from "react"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Wallet, CalendarX, Truck, Footprints, Headphones, LineChart } from "lucide-react"

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 md:py-28 bg-dark-dim relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-bold text-primary-foreground rounded-lg mb-4">
            O MELHOR DO MERCADO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Vantagens Exclusivas CFT DROP</h2>
          <p className="text-light-dim text-lg">
            Nosso modelo de dropshipping oferece benefícios exclusivos que você não encontrará em nenhuma outra
            plataforma. Veja o que nos diferencia da concorrência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<Wallet size={24} />}
            title="ZERO Adesão"
            description="Comece seu negócio sem custo inicial. Não cobramos nenhuma taxa de adesão, você só paga pelos produtos que vender."
            isHighlighted={true}
            index={0}
          />

          <FeatureCard
            icon={<CalendarX size={24} />}
            title="ZERO Mensalidade"
            description="Sem taxas mensais ou anuais. Você terá acesso a todos os benefícios apenas pagando pelos produtos que vender, sem custos recorrentes."
            isHighlighted={true}
            index={1}
          />

          <FeatureCard
            icon={<Truck size={24} />}
            title="Entrega Rápida"
            description="Enviamos para todo o Brasil em 3 a 7 dias úteis, garantindo a satisfação dos seus clientes com um tempo de entrega competitivo."
            index={2}
          />

          <FeatureCard
            icon={<Footprints size={24} />}
            title="Calçados Premium"
            description="Trabalhamos apenas com calçados de alta qualidade, garantindo conforto, durabilidade e satisfação para seus clientes."
            index={3}
          />

          <FeatureCard
            icon={<Headphones size={24} />}
            title="Suporte Dedicado"
            description="Nossa equipe está pronta para te auxiliar em todas as etapas do processo, desde a escolha dos produtos até o pós-venda."
            index={4}
          />

          <FeatureCard
            icon={<LineChart size={24} />}
            title="Gestão Simplificada"
            description="Nossa plataforma facilita o acompanhamento de pedidos, estoque disponível e gestão financeira do seu negócio."
            index={5}
          />
        </div>

        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow-lg transition-all duration-300 text-white font-bold py-3 px-8 rounded-md"
          >
            <Link href="#how-it-works">Como Começar</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  description: string
  isHighlighted?: boolean
  index: number
}

function FeatureCard({ icon, title, description, isHighlighted = false, index }: FeatureCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        relative overflow-hidden rounded-xl p-6 transition-all duration-500
        ${
          isHighlighted
            ? "bg-gradient-to-br from-gray/20 to-gray/10 border border-primary/30 shadow-glow"
            : "bg-gray/10 backdrop-blur-md border border-white/5 hover:border-white/10"
        }
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{
        transitionDelay: `${index * 100}ms`,
        animation: isInView ? `float 6s ease-in-out infinite ${index * 0.5}s` : "none",
      }}
    >
      {isHighlighted && (
        <span className="absolute top-3 right-3 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
          EXCLUSIVO
        </span>
      )}

      <div
        className={`
        w-14 h-14 rounded-full flex items-center justify-center mb-4
        ${isHighlighted ? "bg-gradient-to-br from-primary to-primary-dark text-white" : "bg-primary/10 text-primary"}
      `}
      >
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-3 text-light">{title}</h3>
      <p className="text-light-dim">{description}</p>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}

