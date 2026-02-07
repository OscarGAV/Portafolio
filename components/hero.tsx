"use client"

import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"
import React, { useState } from "react"
import { smoothScrollTo } from "@/lib/scroll-utils"

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false)

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    smoothScrollTo(id)
  }

  return (
      <section id="home" className="min-h-screen pt-20 flex items-center justify-center px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 border border-neon-cyan/30 rounded-full opacity-20 hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-48 h-48 border border-neon-violet/30 rounded-full opacity-20 hidden lg:block"></div>

        <div className="max-w-4xl mx-auto z-10 text-center space-y-8">
          {/* Tech illustration placeholder */}
          <div className="w-32 h-32 mx-auto mb-8">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 rounded-lg blur-xl"></div>
              <div className="absolute inset-0 glass rounded-lg flex items-center justify-center">
                <code className="text-3xl font-mono font-bold text-transparent bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text">
                  {"{ }"}
                </code>
              </div>
            </div>
          </div>

          {/* Hoverable title section */}
          <div
              className="transition-all duration-500 ease-in-out cursor-pointer mt-8"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
          >
            {/* Headline with transition */}
            <div className="space-y-4 relative min-h-[200px] md:min-h-[280px]">
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className={`inline-block transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
                Desarrollador de <br />
                <span className="text-transparent bg-gradient-to-r from-neon-cyan via-primary to-neon-violet bg-clip-text">
                  Software
                </span>
              </span>
                <span className={`absolute inset-0 flex flex-col items-center justify-center transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                <span className="text-transparent bg-gradient-to-r from-neon-violet via-primary to-neon-cyan bg-clip-text">
                  Oscar Gabriel
                </span>
                <span>Aranda Vallejos</span>
              </span>
              </h1>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Construyo experiencias digitales innovadoras con tecnología de punta, fusionando diseño moderno con código
              limpio y eficiente.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link
                href="projects.tsx"
                onClick={(e) => handleScrollTo(e, '#projects')}
                className="px-8 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-primary text-foreground font-medium flex items-center justify-center gap-2 hover-lift hover-glow group"
            >
              Ver Proyectos
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
                href="https://portafolio2026.blob.core.windows.net/oscar-gav/CV%20-%20Oscar%20Gabriel%20Aranda%20Vallejos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-lg glass border border-neon-cyan/50 text-neon-cyan font-medium flex items-center justify-center gap-2 hover-lift hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
          </div>
        </div>
      </section>
  )
}