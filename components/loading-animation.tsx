"use client"

import { useEffect, useRef } from "react"

export function LoadingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    // Animation variables
    let time = 0
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2

    // Particle system
    const particles: {
      x: number
      y: number
      size: number
      speed: number
      angle: number
      color: string
      opacity: number
      rotationSpeed: number
    }[] = []

    // Create particles
    for (let i = 0; i < 100; i++) {
      const angle = Math.random() * Math.PI * 2
      const distance = 50 + Math.random() * 150
      particles.push({
        x: centerX + Math.cos(angle) * distance,
        y: centerY + Math.sin(angle) * distance,
        size: 2 + Math.random() * 4,
        speed: 0.2 + Math.random() * 0.8,
        angle: Math.random() * Math.PI * 2,
        color: `hsl(${Math.random() > 0.5 ? 240 : Math.random() > 0.5 ? 270 : 330}, 90%, ${40 + Math.random() * 20}%)`,
        opacity: 0.1 + Math.random() * 0.9,
        rotationSpeed: 0.01 + Math.random() * 0.03,
      })
    }

    // Animation loop
    const animate = () => {
      // Clear canvas with semi-transparent black for trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw logo
      const logoSize = 80 + Math.sin(time * 0.5) * 5

      // Draw logo background
      ctx.save()
      ctx.translate(centerX, centerY)

      // Draw square with rounded corners
      ctx.beginPath()
      const cornerRadius = 10
      const rectSize = logoSize * 0.8

      ctx.moveTo(-rectSize + cornerRadius, -rectSize)
      ctx.lineTo(rectSize - cornerRadius, -rectSize)
      ctx.arcTo(rectSize, -rectSize, rectSize, -rectSize + cornerRadius, cornerRadius)
      ctx.lineTo(rectSize, rectSize - cornerRadius)
      ctx.arcTo(rectSize, rectSize, rectSize - cornerRadius, rectSize, cornerRadius)
      ctx.lineTo(-rectSize + cornerRadius, rectSize)
      ctx.arcTo(-rectSize, rectSize, -rectSize, rectSize - cornerRadius, cornerRadius)
      ctx.lineTo(-rectSize, -rectSize + cornerRadius)
      ctx.arcTo(-rectSize, -rectSize, -rectSize + cornerRadius, -rectSize, cornerRadius)
      ctx.closePath()

      // Create gradient
      const gradient = ctx.createLinearGradient(-rectSize, -rectSize, rectSize, rectSize)
      gradient.addColorStop(0, `hsla(240, 90%, 50%, 1)`) // Blue
      gradient.addColorStop(0.5, `hsla(270, 90%, 50%, 1)`) // Purple
      gradient.addColorStop(1, `hsla(330, 90%, 50%, 1)`) // Pink

      // Apply shadow for glow effect
      ctx.shadowColor = `hsla(270, 90%, 50%, 0.8)`
      ctx.shadowBlur = 20

      // Fill with gradient
      ctx.fillStyle = gradient
      ctx.fill()

      // Draw inner background
      ctx.beginPath()
      const innerPadding = 4
      ctx.moveTo(-rectSize + cornerRadius + innerPadding, -rectSize + innerPadding)
      ctx.lineTo(rectSize - cornerRadius - innerPadding, -rectSize + innerPadding)
      ctx.arcTo(
        rectSize - innerPadding,
        -rectSize + innerPadding,
        rectSize - innerPadding,
        -rectSize + cornerRadius + innerPadding,
        cornerRadius - innerPadding,
      )
      ctx.lineTo(rectSize - innerPadding, rectSize - cornerRadius - innerPadding)
      ctx.arcTo(
        rectSize - innerPadding,
        rectSize - innerPadding,
        rectSize - cornerRadius - innerPadding,
        rectSize - innerPadding,
        cornerRadius - innerPadding,
      )
      ctx.lineTo(-rectSize + cornerRadius + innerPadding, rectSize - innerPadding)
      ctx.arcTo(
        -rectSize + innerPadding,
        rectSize - innerPadding,
        -rectSize + innerPadding,
        rectSize - cornerRadius - innerPadding,
        cornerRadius - innerPadding,
      )
      ctx.lineTo(-rectSize + innerPadding, -rectSize + cornerRadius + innerPadding)
      ctx.arcTo(
        -rectSize + innerPadding,
        -rectSize + innerPadding,
        -rectSize + cornerRadius + innerPadding,
        -rectSize + innerPadding,
        cornerRadius - innerPadding,
      )
      ctx.closePath()

      ctx.shadowBlur = 0
      ctx.fillStyle = "#000"
      ctx.fill()

      // Draw "V" text
      ctx.fillStyle = gradient
      ctx.font = "bold 48px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"
      ctx.fillText("V", 0, 0)

      ctx.restore()

      // Update and draw particles
      particles.forEach((p) => {
        // Update position
        p.angle += p.rotationSpeed
        const orbitDistance = 100 + Math.sin(time * 0.5) * 20
        p.x = centerX + Math.cos(p.angle) * orbitDistance * (1 + Math.sin(time * 0.2) * 0.2)
        p.y = centerY + Math.sin(p.angle) * orbitDistance * (1 + Math.cos(time * 0.2) * 0.2)

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = p.color.replace(")", `, ${p.opacity})`)
        ctx.fill()
      })

      // Draw loading text
      ctx.fillStyle = "#fff"
      ctx.font = "bold 18px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const loadingText = "LOADING VIREAL"
      const dots = ".".repeat(Math.floor((time * 2) % 4))
      ctx.fillText(`${loadingText}${dots}`, centerX, centerY + 120)

      // Update time
      time += 0.01

      // Request next frame
      requestAnimationFrame(animate)
    }

    // Start animation
    animate()

    // Handle window resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-50 bg-black" />
}
