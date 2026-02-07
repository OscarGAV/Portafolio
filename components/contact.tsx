"use client"

import type React from "react"

import { Github, Linkedin, Mail } from "lucide-react"

export default function Contact() {
  return (
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Ponerse en{" "}
            <span className="text-transparent bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text">Contacto</span>
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-8">
            ¿Tienes un proyecto en mente? Me encantaría escucharte y colaborar contigo.
          </p>

          <div className="flex flex-col items-center">
            {/* Contact Info & Social Links */}
            <div className="w-full max-w-md">
              <div className="flex justify-center gap-4">
                <a
                    href="https://github.com/OscarGAV"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 rounded-lg glass border border-border/50 flex items-center justify-center text-neon-cyan hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300 hover-lift"
                >
                  <Github className="w-8 h-8" />
                </a>
                <a
                    href="https://www.linkedin.com/in/oscar-gabriel-aranda-vallejos-946a352a5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-20 h-20 rounded-lg glass border border-border/50 flex items-center justify-center text-neon-violet hover:border-neon-violet hover:shadow-lg hover:shadow-neon-violet/30 transition-all duration-300 hover-lift"
                >
                  <Linkedin className="w-8 h-8" />
                </a>
                <a
                    href="mailto:oscararandavallejos@gmail.com"
                    className="w-20 h-20 rounded-lg glass border border-border/50 flex items-center justify-center text-neon-cyan hover:border-neon-cyan hover:shadow-lg hover:shadow-neon-cyan/30 transition-all duration-300 hover-lift"
                >
                  <Mail className="w-8 h-8" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}