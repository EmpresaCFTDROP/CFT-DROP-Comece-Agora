"use client"

import type React from "react"

import { useRef } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"
import { Building, CreditCard, MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react"

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-gradient-to-br from-gray to-gray-light relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-primary px-3 py-1 text-sm font-bold text-primary-foreground rounded-lg mb-4">
            FALE CONOSCO
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-light">Entre em Contato</h2>
          <p className="text-light-dim text-lg">
            Estamos prontos para tirar todas as suas dúvidas e ajudar você a começar seu negócio de dropshipping sem
            taxas ou mensalidades.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <CompanyInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

function CompanyInfo() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        space-y-8 transition-all duration-500
        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}
      `}
    >
      <div className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg transition-all duration-300 hover:shadow-glow hover:border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <Building size={24} className="text-primary" />
          <h3 className="text-2xl font-bold text-light">Informações da Empresa</h3>
        </div>

        <ul className="space-y-5">
          <InfoItem icon={<CreditCard size={18} />} text="CNPJ: 37.731.184/0001-70" />
          <InfoItem
            icon={<MapPin size={18} />}
            text="Rua João Urias Pimenta, 4460 - Parque Franville - Franca - SP, 14.403-574"
          />
          <InfoItem icon={<Phone size={18} />} text="(16) 99148-6936" />
          <InfoItem icon={<Mail size={18} />} text="cftdrop@gmail.com" />
          <InfoItem icon={<Clock size={18} />} text="Segunda a Sexta: 9h às 18h" />
        </ul>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        <FeatureTag text="Sem taxa de adesão" />
        <FeatureTag text="Sem mensalidade" />
        <FeatureTag text="Suporte especializado" />
      </div>
    </div>
  )
}

function ContactForm() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-500
        ${isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
      `}
    >
      <div className="bg-gray/10 backdrop-blur-md border border-white/5 rounded-xl p-6 md:p-8 shadow-lg">
        <div className="max-w-md mx-auto">
          <div className="text-center">
            <Link
              href="https://wa.me/5516991486936"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-green-glow transition-all duration-300 hover:translate-y-[-5px] mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-message-circle"
              >
                <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
              </svg>
              <span>Fale com um Consultor</span>
            </Link>

            <Link
              href="tel:+551699148-6936"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg hover:shadow-glow transition-all duration-300 hover:translate-y-[-5px]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span>Ligue para Nós</span>
            </Link>

            <p className="text-light-dimmer text-sm mt-4">Atendimento de segunda a sexta, das 9h às 17h</p>
          </div>
        </div>
      </div>
    </div>
  )
}

interface InfoItemProps {
  icon: React.ReactNode
  text: string
}

function InfoItem({ icon, text }: InfoItemProps) {
  return (
    <li className="flex items-start gap-3">
      <span className="text-primary flex-shrink-0 mt-1">{icon}</span>
      <span className="text-light-dim">{text}</span>
    </li>
  )
}

function FeatureTag({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
      <CheckCircle size={16} className="text-primary" />
      <span className="text-light-dim text-sm">{text}</span>
    </div>
  )
}

