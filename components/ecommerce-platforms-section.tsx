"use client"

import type React from "react"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Image from "next/image"
import { ShoppingBag } from "lucide-react"

export default function EcommercePlatformsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="ecommerce" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-bold text-primary-foreground rounded-lg mb-4">
            CANAIS DE VENDA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Venda em Múltiplas Plataformas</h2>
          <p className="text-light-dim text-lg">
            Com a CFT DROP, você pode vender nossos produtos em diversos marketplaces e e-commerces populares no Brasil,
            maximizando seu alcance e potencial de vendas.
          </p>
        </div>

        <div
          ref={ref}
          className={`
            grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto
            ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
            transition-all duration-500
          `}
        >
          {/* Imagem: public/images/platforms/mercadolivre.png */}
          <PlatformCard name="Mercado Livre" logo="/images/platforms/mercadolivre.png" color="#FFE600" index={0} />

          {/* Imagem: public/images/platforms/shopee.png */}
          <PlatformCard name="Shopee" logo="/images/platforms/shopee.png" color="#EE4D2D" index={1} />

          {/* Imagem: public/images/platforms/amazon.png */}
          <PlatformCard name="Amazon" logo="/images/platforms/amazon.png" color="#FF9900" index={2} />

          {/* Imagem: public/images/platforms/netshoes.png */}
          <PlatformCard name="Netshoes" logo="/images/platforms/netshoes.png" color="#00A046" index={3} />

          {/* Imagem: public/images/platforms/magalu.png */}
          <PlatformCard name="Magalu" logo="/images/platforms/magalu.png" color="#0086FF" index={4} />

          {/* Imagem: public/images/platforms/kwai.png */}
          <PlatformCard name="Kwai" logo="/images/platforms/kwai.png" color="#FF7E00" index={5} />

          {/* Imagem: public/images/platforms/shein.png */}
          <PlatformCard name="Shein" logo="/images/platforms/shein.png" color="#000000" index={6} />

          <PlatformCard
            name="Site Próprio"
            logo="/images/platforms/site-proprio.png"
            icon={<ShoppingBag size={40} className="text-primary" />}
            color="#ff3a3a"
            index={7}
          />
        </div>

        <div className="text-center mt-12 max-w-2xl mx-auto">
          <p className="text-light-dim">
            Nosso sistema é compatível com as principais plataformas de e-commerce do Brasil, permitindo que você
            gerencie suas vendas de forma centralizada e eficiente, independentemente de onde seus clientes compram.
          </p>
        </div>
      </div>
    </section>
  )
}

interface PlatformCardProps {
  name: string
  logo: string
  icon?: React.ReactNode
  color: string
  index: number
}

function PlatformCard({ name, logo, icon, color, index }: PlatformCardProps) {
  return (
    <div
      className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg hover:border-white/20 transition-all duration-300 hover:translate-y-[-5px] group"
      style={{
        transitionDelay: `${index * 50}ms`,
        animation: `float 6s ease-in-out infinite ${index * 0.5}s`,
      }}
    >
      <div className="h-16 flex items-center justify-center mb-4">
        {icon || (
          <Image
            src={logo || "/placeholder.svg"}
            alt={name}
            width={160}
            height={80}
            className="max-h-16 w-auto object-contain"
          />
        )}
      </div>

      <span
        className="font-semibold text-light-dim group-hover:text-light transition-colors duration-300"
        style={{
          textShadow: `0 0 10px ${color}30`,
        }}
      >
        {name}
      </span>
    </div>
  )
}

