"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const particleCount = 100
    const connectionDistance = 150
    const particleColors = [
      "#ff3a3a", // vermelho
      "#ffffff", // branco
      "#333333", // preto
    ]

    // Resize handler
    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Particle class
    class Particle {
      x: number
      y: number
      velocityX: number
      velocityY: number
      radius: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.velocityX = (Math.random() - 0.5) * 1
        this.velocityY = (Math.random() - 0.5) * 1
        this.radius = Math.random() * 3 + 1
        this.color = particleColors[Math.floor(Math.random() * particleColors.length)]
      }

      update() {
        this.x += this.velocityX
        this.y += this.velocityY

        if (this.x < 0 || this.x > width) this.velocityX = -this.velocityX
        if (this.y < 0 || this.y > height) this.velocityY = -this.velocityY
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.fill()
      }
    }

    // Create particles
    const particles: Particle[] = []
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    // Connect particles with lines
    function connectParticles() {
      if (!ctx) return

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < connectionDistance) {
            const opacity = 1 - distance / connectionDistance

            ctx.strokeStyle = particles[i].color
            ctx.globalAlpha = opacity * 0.5
            ctx.lineWidth = 1

            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
            ctx.globalAlpha = 1
          }
        }
      }
    }

    // Mouse effect
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      for (let i = 0; i < particles.length; i++) {
        const dx = mouseX - particles[i].x
        const dy = mouseY - particles[i].y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          const angle = Math.atan2(dy, dx)
          const force = (100 - distance) / 100

          particles[i].velocityX -= Math.cos(angle) * force * 0.2
          particles[i].velocityY -= Math.sin(angle) * force * 0.2
        }
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    function animate() {
      if (!ctx) return

      ctx.fillStyle = "rgba(3, 3, 3, 0.97)"
      ctx.fillRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw()
      }

      connectParticles()

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-primary/15 via-transparent to-transparent opacity-50 animate-pulse"></div>
        <canvas ref={canvasRef} className="w-full h-full"></canvas>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block bg-primary/20 border border-primary/40 px-4 py-2 rounded-full text-sm font-semibold text-primary mb-6 backdrop-blur-sm shadow-glow animate-pulse-slow">
            Novidade no Brasil
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 text-light">
            Venda{" "}
            <span className="bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              calçados
            </span>{" "}
            sem estoque e sem investimento inicial
          </h1>

        <p className="text-lg md:text-xl text-light-dim mb-10 max-w-2xl mx-auto">
  Precisando de fornecedor de DROPSHIPPING e ATACADO sem dor de cabeça e mi-mi-mi?. Bem vind@ a CFTDROP, faça vendas ONLINE sem se preocupar com estoque.
</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              asChild
              className="bg-gradient-to-r from-primary to-primary-dark hover:shadow-glow-lg transition-all duration-300 text-white font-bold py-3 px-8 rounded-md"
            >
              <Link href="#features">Conheça as Vantagens</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-light-dim text-light hover:bg-light/10 transition-all duration-300 font-bold py-3 px-8 rounded-md"
            >
              <Link href="#contact">Fale Conosco</Link>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16 justify-center pt-8 border-t border-white/10">
            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-light mb-1">1170</span>
              <span className="text-sm text-light-dimmer">Clientes Ativos</span>
            </div>

            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-light mb-1">98%</span>
              <span className="text-sm text-light-dimmer">Satisfação</span>
            </div>

            <div className="text-center">
              <span className="block text-2xl md:text-3xl font-bold text-light mb-1">24 horas</span>
              <span className="text-sm text-light-dimmer">Tempo de Entrega</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

