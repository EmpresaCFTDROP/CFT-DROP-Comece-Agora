import type React from "react"
import Link from "next/link"
import { Zap, Instagram, Facebook, MessageSquare, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-dark py-16 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center mb-10">
  <Link href="#" className="flex items-center gap-2 text-2xl font-extrabold text-light mb-6">
    <Zap size={28} className="text-primary" />
    CFT <span className="text-primary">DROP</span>
  </Link>

  <p className="text-light-dimmer max-w-md text-center mb-6">
    A melhor plataforma de dropshipping de calçados do Brasil. Venda sem estoque e sem investimento inicial.
  </p>

  <div className="flex gap-4">
    <SocialLink href="https://www.instagram.com/cftdrop.com.br/" icon={<Instagram size={18} />} />
    <SocialLink href="https://wa.me/5516991486936" icon={<MessageSquare size={18} />} />
    <SocialLink href="https://www.youtube.com/@CFTDROPSHIPPING-2023" icon={<Youtube size={18} />} />
  </div>
</div>

        <div className="text-center border-t border-white/5 pt-6">
          <p className="text-light-dimmer text-sm">
            &copy; {new Date().getFullYear()} CFT DROP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-light hover:bg-primary hover:text-white hover:translate-y-[-5px] transition-all duration-300"
    >
      {icon}
    </Link>
  )
}

