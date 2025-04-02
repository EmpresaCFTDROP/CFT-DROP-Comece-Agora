"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function ProductsSection() {
  return (
    <section id="produtos" className="py-20 md:py-28 bg-dark-dim relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-bold text-primary-foreground rounded-lg mb-4">
            NOSSO CATÁLOGO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Produtos em Destaque</h2>
          <p className="text-light-dim text-lg">
            Conheça alguns dos nossos produtos mais vendidos. Com a CFT DROP, você tem acesso a calçados de alta
            qualidade para revender.
          </p>
        </div>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
  {/* Imagem: public/images/products/tenis-esportivo.jpg */}
  <ProductCard 
    image="/images/products/tenis-esportivo.jpg" 
    title="Tênis Esportivo Premium" 
    price="53,00"
    index={0}
  />
  
  {/* Imagem: public/images/products/tenis-casual.jpg */}
  <ProductCard 
    image="/images/products/tenis-casual.jpg" 
    title="Tênis Casual Masculino" 
    price="65,00"
    index={1}
  />
  
  {/* Imagem: public/images/products/sapato.jpg */}
  <ProductCard 
    image="/images/products/sapato.jpg" 
    title="Sapato Social Couro" 
    price="80,00"
    index={2}
  />
  
  {/* Imagem: public/images/products/sandalia.jpg */}
  <ProductCard 
    image="/images/products/sandalia.jpg" 
    title="Sandália Feminina" 
    price="50,00"
    index={3}
  />
</div>
        <div className="text-center">
          <Button
            asChild
            className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow-lg transition-all duration-300 text-white font-bold py-3 px-8 rounded-md mb-4"
          >
            <Link href="#contact">Ver Catálogo Completo</Link>
          </Button>
          <p className="text-light-dim text-sm italic">*Preços para revendedores cadastrados na plataforma.</p>
        </div>
      </div>
    </section>
  )
}

interface ProductCardProps {
  image: string
  title: string
  price: string
  index: number
}

function ProductCard({ image, title, price, index }: ProductCardProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl overflow-hidden shadow-lg transition-all duration-500
        hover:shadow-glow hover:translate-y-[-10px]
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="h-[300px] overflow-hidden">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={600}
          height={800}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 text-light">{title}</h3>
        <p className="text-xl font-bold text-primary">R$ {price}</p>
      </div>
    </div>
  )
}

