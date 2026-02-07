"use client"

import { ExternalLink } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Moderno",
      description:
        "Plataforma de comercio electrónico con carrito dinámico, búsqueda avanzada y sistema de pagos integrado.",
      technologies: ["React", "Node.js", "Stripe", "MongoDB"],
      link: "#",
      github: "#",
      image: "/e-commerce-platform-dashboard.jpg",
    },
    {
      title: "Dashboard Analytics",
      description:
        "Sistema de analytics en tiempo real con gráficos interactivos, exportación de datos y visualizaciones customizables.",
      technologies: ["Next.js", "TypeScript", "Recharts", "PostgreSQL"],
      link: "#",
      github: "#",
      image: "/analytics-dashboard-charts.jpg",
    },
    {
      title: "Frontend - App de Recordatorios",
      description:
        "Aplicación móvil para la gestión de eventos y recordatorios con notificaciones push y comandos de voz",
      technologies: ["Dart", "Flutter"],
      link: "https://youtu.be/VWpSSsT29i8",
      github: "https://github.com/OscarGAV/eventrely-frontend",
      image: "/event-reminder-frontend.png",
    },
    {
      title: "API REST - App de Recordatorios",
      description: "Backend monolítico con DDD y CQRS para una aplicación de recordatorios con autenticación JWT",
      technologies: ["Python", "FastAPI", "PostgreSQL"],
      link: "https://eventrely-api-platform.azurewebsites.net/docs",
      github: "https://github.com/OscarGAV/eventrely-backend",
      image: "/event-reminder-backend.png",
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Mis{" "}
          <span className="text-transparent bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text">
            Proyectos
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group glass rounded-xl border border-border/50 overflow-hidden hover:border-neon-cyan/50 transition-all duration-300 hover-lift hover-glow"
            >
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/30 opacity-0 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Project Header with Neon Accent */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-1 h-8 bg-gradient-to-b from-neon-cyan to-neon-violet rounded-full ml-4 group-hover:h-10 transition-all duration-300"></div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30 group-hover:border-neon-cyan/60 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-neon-cyan hover:bg-primary/40 border border-primary/50 hover:border-neon-cyan transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-neon-violet hover:bg-primary/40 border border-primary/50 hover:border-neon-violet transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
