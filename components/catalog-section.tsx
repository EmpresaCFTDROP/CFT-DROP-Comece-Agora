"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { GraduationCap, Check } from "lucide-react"

export default function CatalogSection() {
  return (
    <section id="catalogo" className="py-20 md:py-28 bg-[rgba(75,0,0,0.9)] relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/20 text-primary-light px-3 py-1 text-sm font-bold rounded-lg mb-4">
            PRODUTOS PREMIUM
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Catálogo CFT DROP</h2>
          <p className="text-light-dim text-lg">
            Acesse nosso catálogo completo de calçados premium para seu negócio de dropshipping. Mais de 60 modelos
            disponíveis para venda imediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CatalogCard />
          <CatalogImage />
        </div>
      </div>
    </section>
  )
}

function CatalogCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br from-[#7a0000] to-[#cc0000] border border-primary/30 rounded-xl p-8 relative overflow-hidden shadow-xl transition-all duration-500
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <span className="absolute top-4 right-4 bg-gradient-to-r from-primary to-primary-dark text-white text-xs font-bold py-1 px-3 rounded-full shadow-md">
        EXCLUSIVO
      </span>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white shadow-lg">
          <GraduationCap size={24} />
        </div>
        <h3 className="text-2xl font-bold text-light">Catálogo Completo</h3>
      </div>

      <p className="text-light-dim mb-8">
        Acesse nosso catálogo completo de calçados premium para seu negócio de dropshipping. Mais de 60 modelos
        disponíveis para venda imediata.
      </p>

      <ul className="space-y-4 mb-8">
        <FeatureItem text="Mais de 60 modelos de calçados" />
        <FeatureItem text="Fotos profissionais em alta resolução" />
        <FeatureItem text="Descrições prontas para usar" />
        <FeatureItem text="Atualização automática de estoque" />
        <FeatureItem text="Preços competitivos no mercado" />
      </ul>

      <div className="text-center">
        <Button
          asChild
          className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow-lg transition-all duration-300 text-white font-bold py-3 px-8 rounded-md"
        >
          <Link href="https://cftdropshipping.com.br/" target="_blank">
            Acessar Catálogo
          </Link>
        </Button>
      </div>

      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
    </div>
  )
}

function CatalogImage() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        relative rounded-xl overflow-hidden shadow-xl transition-all duration-500
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Imagem: public/images/catalog/catalog-image.jpg */}
      <Image
        src="/images/catalog/catalog-image.jpg"
        alt="Catálogo CFT DROP"
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex justify-center">
        <span className="text-2xl font-bold text-white shadow-text">+60 Modelos</span>
      </div>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <Check size={18} className="text-yellow-300 flex-shrink-0" />
      <span className="text-light-dim">{text}</span>
    </li>
  )
}

