export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/30 glass py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm text-muted-foreground">
          © {currentYear} DevFolio. Todos los derechos reservados.
        </p>
        <p className="text-sm text-muted-foreground">
          Diseñado por <span className="text-neon-cyan">{"Oscar Gabriel Aranda Vallejos"}</span>
        </p>
      </div>
    </footer>
  )
}
