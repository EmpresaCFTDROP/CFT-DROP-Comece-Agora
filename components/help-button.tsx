"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { HelpCircle, X } from "lucide-react"

export default function HelpButton() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 w-72 animate-fade-in">
          <div className="bg-primary text-white p-3 rounded-t-lg">
            <h3 className="font-bold">Central de Ajuda CFT DROP</h3>
            <p className="text-xs">Como podemos ajudar?</p>
          </div>

          <div className="p-4">
            <p className="text-gray-700 mb-4">
              Encontre respostas para suas dúvidas sobre nosso programa de dropshipping.
            </p>

            <button
              onClick={() => {
                setIsOpen(false)
                router.push("/ajuda")
              }}
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-full w-full block text-center mb-2"
            >
              Ver Central de Ajuda
            </button>

            <a
              href="https://wa.me/5516991486936"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-2 px-4 rounded-full w-full block text-center"
            >
              Falar com Consultor
            </a>
          </div>

          <button onClick={() => setIsOpen(false)} className="absolute top-2 right-2 text-white">
            <X size={16} />
          </button>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-primary hover:bg-primary-dark w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300"
        aria-label="Abrir Central de Ajuda"
      >
        <HelpCircle size={28} className="text-white" />
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}
