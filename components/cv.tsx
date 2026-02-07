"use client"

import { Download, BookOpen, Award } from "lucide-react"

export default function CV() {
  const education = [
    {
      degree: "Bachillerato, Ingeniería de Software",
      school: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      year: "2022 - 2027",
      url: "https://www.linkedin.com/in/oscar-gabriel-aranda-vallejos-946a352a5/"
    },
    {
      degree: "Programa de Iniciación Tecnológica, Cloud Computing",
      school: "Universidad Nacional de Ingeniería (UNI)",
      year: "2025",
      url: "https://www.linkedin.com/in/oscar-gabriel-aranda-vallejos-946a352a5/"
    },
  ]

  const certifications = [
    {
      title: "Databases for Data Scientists Specialization",
      issuer: "University of Colorado Boulder",
      year: "2025",
      url: "https://coursera.org/share/91ed98cba1f2ed18b620c47800fad0f2"
    },
    {
      title: "Scrum Master Specialization",
      issuer: "LearnQuest",
      year: "2024",
      url: "https://coursera.org/share/e197e9d8befab57d05e929ab4fcb472d"
    },
  ]

  return (
      <section id="cv" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              Mi <span className="text-transparent bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text">CV</span>
            </h2>
            <a
                href="https://portafolio2026.blob.core.windows.net/oscar-gav/CV%20-%20Oscar%20Gabriel%20Aranda%20Vallejos.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg bg-gradient-to-r from-neon-cyan to-primary text-foreground font-medium flex items-center gap-2 hover-lift hover-glow transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Education */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-6 h-6 text-neon-violet" />
                <h3 className="text-2xl font-bold">Educación</h3>
              </div>
              {education.map((edu, index) => (
                  <a
                      key={index}
                      href={edu.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass rounded-lg border border-border/50 p-4 hover:border-neon-violet/50 hover:shadow-lg hover:shadow-neon-violet/20 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-sm text-neon-violet font-medium">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.year}</p>
                  </a>
              ))}
            </div>

            {/* Certifications */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-neon-cyan" />
                <h3 className="text-2xl font-bold">Certificaciones</h3>
              </div>
              {certifications.map((cert, index) => (
                  <a
                      key={index}
                      href={cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block glass rounded-lg border border-border/50 p-4 hover:border-neon-cyan/50 hover:shadow-lg hover:shadow-neon-cyan/20 transition-all duration-300 cursor-pointer"
                  >
                    <h4 className="font-semibold text-foreground mb-1">{cert.title}</h4>
                    <p className="text-xs text-neon-cyan">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">{cert.year}</p>
                  </a>
              ))}
            </div>
          </div>
        </div>
      </section>
  )
}