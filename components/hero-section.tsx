"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Zap } from "lucide-react"
import { Logo } from "@/components/logo"

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight * 0.8 // 80vh
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Particle system
    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
    }[] = []

    // Create particles with new color scheme
    const createParticles = () => {
      const particleCount = Math.min(100, Math.floor((canvas.width * canvas.height) / 10000))
      const colors = ["#3b82f6", "#8b5cf6", "#ec4899"] // Blue, Purple, Pink

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: 1 + Math.random() * 2,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: 0.1 + Math.random() * 0.4,
        })
      }
    }

    createParticles()

    // Animation loop
    let animationId: number
    const animate = () => {
      // Create a semi-transparent background for trail effect
      ctx.fillStyle = "rgba(10, 10, 20, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particles.forEach((p, index) => {
        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Wrap around edges
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(")", `, ${p.opacity})`)
        ctx.fill()

        // Connect nearby particles with lines
        for (let j = index + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx)

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)

            // Use gradient colors for lines
            const lineOpacity = 0.1 * (1 - distance / 100)
            if (p.color === "#3b82f6") {
              ctx.strokeStyle = `rgba(59, 130, 246, ${lineOpacity})`
            } else if (p.color === "#8b5cf6") {
              ctx.strokeStyle = `rgba(139, 92, 246, ${lineOpacity})`
            } else {
              ctx.strokeStyle = `rgba(236, 72, 153, ${lineOpacity})`
            }

            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      })

      animationId = requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <div className="relative overflow-hidden">
      {/* Background canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />

      {/* Content */}
      <div className="relative z-10 min-h-[80vh] flex flex-col items-center justify-center">
        <div className="container px-4 py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-10 flex items-center justify-center">
              <h1
                className="text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight"
                style={{
                  background: "linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  textShadow: "0 0 15px rgba(139, 92, 246, 0.3)",
                  letterSpacing: "-0.02em",
                }}
              >
                VIREAL
              </h1>
              <div className="ml-4">
                <Logo size="lg" withText={false} />
              </div>
            </div>
            <h2 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Every Digital Thing.
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                One Plug.
              </span>
            </h2>
            <p className="mb-10 text-lg text-gray-300 md:text-xl max-w-2xl mx-auto">
              Your all-in-one marketplace for game keys, streaming accounts, software licenses, AI tools, and exclusive
              digital bundles. Instant delivery, secure payments.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 justify-center">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                asChild
              >
                <Link href="/category/games" scroll={true}>
                  Browse Products
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="group border-purple-500 text-purple-400 hover:text-purple-300 hover:bg-purple-950/30"
                asChild
              >
                <Link href="/category/mystery" scroll={true}>
                  <Zap className="mr-2 h-4 w-4" />
                  Mystery Packs
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  )
}
