"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { smoothScrollTo } from "@/lib/scroll-utils"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#home" },
    { label: "Sobre mí", href: "#about" },
    { label: "Proyectos", href: "#projects" },
    { label: "CV", href: "#cv" },
    { label: "Contacto", href: "#contact" },
  ]

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    smoothScrollTo(href, () => setIsOpen(false))
  }

  return (
      <header className="fixed top-0 w-full z-50 glass border-b border-border/30">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          {/* Logo */}
          <Link href="https://github.com/OscarGAV" className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text text-transparent">
            My DevFolio
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
                <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleScrollTo(e, item.href)}
                    className="text-sm font-medium text-muted-foreground hover:text-neon-cyan transition-colors duration-300"
                >
                  {item.label}
                </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
              className="md:hidden text-neon-cyan hover:text-neon-violet transition-colors"
              onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Menu */}
          {isOpen && (
              <div className="absolute top-full left-0 right-0 glass border-b border-border/30 p-4 flex flex-col gap-4 md:hidden">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        onClick={(e) => handleScrollTo(e, item.href)}
                        className="text-sm font-medium text-muted-foreground hover:text-neon-cyan transition-colors"
                    >
                      {item.label}
                    </Link>
                ))}
              </div>
          )}
        </nav>
      </header>
  )
}