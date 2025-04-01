"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { Truck, Store } from "lucide-react"
import { MapPin } from "lucide-react"

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-dark relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-bold text-primary-foreground rounded-lg mb-4">
            PROCESSO SIMPLES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Como Funciona</h2>
          <p className="text-light-dim text-lg">
            Nosso modelo de dropshipping é simples e prático. Veja como começar seu negócio online com a CFT DROP em
            apenas 4 passos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <ProcessStep
            number={1}
            title="Cadastre-se"
            description="Faça seu cadastro gratuito em nossa plataforma. Não cobramos taxa de adesão ou mensalidade."
            index={0}
          />

          <ProcessStep
            number={2}
            title="Escolha Produtos"
            description="Selecione os calçados que deseja vender do nosso catálogo com mais de 3000 produtos."
            index={1}
          />

          <ProcessStep
            number={3}
            title="Faça Suas Vendas"
            description="Divulgue e venda os produtos em suas redes sociais, marketplace ou site próprio."
            index={2}
          />

          <ProcessStep
            number={4}
            title="Nós Entregamos"
            description="Quando você vender, nós enviamos o produto diretamente para seu cliente ou você pode retirar na fábrica."
            deliveryOptions={true}
            index={3}
          />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-glow hover:border-white/10">
            <div className="flex items-center gap-4 mb-6">
              <MapPin size={32} className="text-primary" />
              <h3 className="text-2xl font-bold text-light">Nossa Fábrica</h3>
            </div>

            <div className="rounded-lg overflow-hidden mb-6 shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.227614133252!2d-47.42130932391783!3d-20.532677457098384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a7b730f04c5b%3A0x87a079cad597f87d!2sR.%20Jo%C3%A3o%20Urias%20Pimenta%2C%204460%20-%20Parque%20Franville%2C%20Franca%20-%20SP%2C%2014403-574!5e0!3m2!1spt-BR!2sbr!4v1699125096717!5m2!1spt-BR!2sbr"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <div className="flex items-center gap-3 text-light-dim">
              <MapPin size={18} className="text-primary flex-shrink-0" />
              <span>Rua João Urias Pimenta, 4460 - Parque Franville - Franca - SP, 14403-574</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface ProcessStepProps {
  number: number
  title: string
  description: string
  deliveryOptions?: boolean
  index: number
}

function ProcessStep({ number, title, description, deliveryOptions, index }: ProcessStepProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        flex gap-5 bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 transition-all duration-500
        hover:shadow-lg hover:border-white/10 hover:translate-y-[-5px]
        ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-white font-bold text-xl shadow-glow">
        {number}
      </div>

      <div>
        <h3 className="text-xl font-bold mb-3 text-light">{title}</h3>
        <p className="text-light-dim mb-4">{description}</p>

        {deliveryOptions && (
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm">
              <Truck size={16} className="text-primary" />
              <span>Envio para Todo Brasil</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full text-sm">
              <Store size={16} className="text-primary" />
              <span>Retirada na Fábrica</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

