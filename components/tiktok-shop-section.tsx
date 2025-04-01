"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Zap, Sparkles, Check } from "lucide-react"

export default function TiktokShopSection() {
  return (
    <section id="tiktokshop" className="py-20 md:py-28 bg-dark relative overflow-hidden">
      {/* Imagem de fundo: public/images/backgrounds/tiktok-bg.jpg */}
      <div className="absolute inset-0 bg-[url('/images/backgrounds/tiktok-bg.jpg')] bg-center bg-no-repeat bg-cover opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary/20 text-primary px-3 py-1 text-sm font-bold rounded-lg mb-4">
            NOVA OPORTUNIDADE
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">TikTok Shop Brasil</h2>
          <p className="text-light-dim text-lg">
            Expanda seu alcance com a integração da CFT DROP com o TikTok Shop Brasil. Acesse um novo canal de vendas
            com milhões de usuários ativos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-8">
            <TiktokHeader />
            <TiktokInfo />
          </div>

          <div className="lg:col-span-2">
            <TiktokCard />
          </div>
        </div>
      </div>
    </section>
  )
}

function TiktokHeader() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        rounded-xl overflow-hidden shadow-xl transition-all duration-500
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {/* Imagem: public/images/tiktok/tiktok-shop.jpg */}
      <Image
        src="/images/tiktok/tiktok-shop.jpg"
        alt="TikTok Shop"
        width={1200}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  )
}

function TiktokInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 transition-all duration-500
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      <h3 className="text-2xl font-bold mb-4 text-light">Venda onde seu público está</h3>
      <p className="text-light-dim mb-8">
        O TikTok Shop Brasil é a nova fronteira do e-commerce social no país. Com a nossa integração, você pode conectar
        seu catálogo da CFT DROP diretamente ao TikTok Shop e começar a vender para um público engajado e propenso a
        compras.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF0050] to-[#00F2EA] flex items-center justify-center text-white shadow-lg flex-shrink-0">
            <Zap size={20} />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-light">Alcance Imediato</h4>
            <p className="text-light-dimmer text-sm">Acesse milhões de usuários ativos diariamente na plataforma</p>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF0050] to-[#00F2EA] flex items-center justify-center text-white shadow-lg flex-shrink-0">
            <Sparkles size={20} />
          </div>
          <div>
            <h4 className="text-lg font-bold mb-2 text-light">Conteúdo Viral</h4>
            <p className="text-light-dimmer text-sm">
              Aproveite o potencial viral do TikTok para impulsionar suas vendas
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function TiktokCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        bg-gradient-to-br from-[#121212] to-[#1E1E1E] border border-[#FF0050]/30 rounded-xl p-8 relative overflow-hidden shadow-xl transition-all duration-500 h-full
        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
      `}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#FF0050] to-[#00F2EA]"></div>

      <span className="inline-block bg-gradient-to-r from-[#FF0050] to-[#00F2EA] text-white text-xs font-bold py-2 px-4 rounded-full shadow-md mb-6">
        Exclusivo
      </span>

      <h3 className="text-2xl font-bold mb-4 text-light">Integração TikTok Shop</h3>
      <p className="text-light-dim mb-8">
        Nossa integração com o TikTok Shop Brasil permite que você venda calçados diretamente na plataforma,
        aproveitando o alto engajamento dos usuários e o potencial de vendas do e-commerce social.
      </p>

      <ul className="space-y-4 mb-8">
        <TiktokFeatureItem text="Sincronização automática de estoque" />
        <TiktokFeatureItem text="Gestão centralizada de pedidos" />
        <TiktokFeatureItem text="Suporte para criação de conteúdo" />
        <TiktokFeatureItem text="Estratégias de marketing específicas" />
      </ul>

      <div className="text-center mt-auto">
        <Button
          asChild
          className="bg-gradient-to-r from-[#FF0050] to-[#00F2EA] hover:shadow-pink-glow transition-all duration-300 text-white font-bold py-3 px-8 rounded-md"
        >
          <Link href="#contact">Saiba Mais</Link>
        </Button>
      </div>
    </div>
  )
}

function TiktokFeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <Check size={18} className="text-[#00F2EA] flex-shrink-0" />
      <span className="text-light-dim">{text}</span>
    </li>
  )
}

