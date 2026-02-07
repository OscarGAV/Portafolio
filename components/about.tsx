"use client"

export default function About() {
  const skills = [
    { category: "Frontend", items: ["Flutter", "Vue.js", "Next.js", "Angular"] },
    { category: "Backend", items: ["FastApi", "SpringBoot", ".NET"] },
    { category: "Lenguajes", items: ["Python", "Java", "C#"] },
  ]

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          Sobre <span className="text-transparent bg-gradient-to-r from-neon-cyan to-neon-violet bg-clip-text">Mí</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Profile Image */}
          <div className="flex justify-center">
            <div className="relative w-80 h-80 group">
              <div className="absolute inset-0 bg-gradient-to-br from-neon-cyan/20 to-neon-violet/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
              <div className="absolute inset-0 glass rounded-2xl border border-neon-cyan/50 overflow-hidden group-hover:border-neon-violet/50 transition-colors duration-300">
                <img
                    src="/perfil.png"
                    alt="Profile"
                    className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Soy un estudiante de Ingeniería de Software enfocado en crear aplicaciones modernas y sistemas escalables que estén
              orientados a las necesidades del usuario.
            </p>
            <div className="pt-4">
              <p className="text-sm uppercase tracking-widest text-neon-cyan font-semibold mb-4">
                Habilidades Técnicas
              </p>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill.category} className="space-y-2">
                    <p className="text-sm font-semibold text-foreground">{skill.category}</p>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full text-xs bg-primary/20 text-neon-cyan border border-primary/50 hover:border-neon-cyan hover:bg-primary/30 transition-all duration-300"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
