export const smoothScrollTo = (targetId: string, callback?: () => void) => {
    const element = document.querySelector(targetId)
    if (element) {
        // Ejecutar el callback inmediatamente (cerrar menú) antes de calcular posiciones
        if (callback) {
            callback()
        }

        // Detectar si es dispositivo móvil (pantalla menor a 768px, breakpoint md de Tailwind)
        const isMobile = window.innerWidth < 768

        if (isMobile) {
            // En móvil: scroll instantáneo sin animación
            setTimeout(() => {
                element.scrollIntoView({ behavior: 'auto', block: 'start' })
            }, 100) // Pequeño delay para que el menú se cierre
        } else {
            // En desktop: scroll suave con animación
            setTimeout(() => {
                const targetPosition = element.getBoundingClientRect().top + window.pageYOffset
                const startPosition = window.pageYOffset
                const distance = targetPosition - startPosition
                const duration = 1000
                let start: number | null = null

                const animation = (currentTime: number) => {
                    if (start === null) start = currentTime
                    const timeElapsed = currentTime - start
                    const run = ease(timeElapsed, startPosition, distance, duration)
                    window.scrollTo(0, run)
                    if (timeElapsed < duration) {
                        requestAnimationFrame(animation)
                    }
                }

                // Función de easing para suavizar la animación
                const ease = (t: number, b: number, c: number, d: number) => {
                    t /= d / 2
                    if (t < 1) return (c / 2) * t * t + b
                    t--
                    return (-c / 2) * (t * (t - 2) - 1) + b
                }

                requestAnimationFrame(animation)
            }, 50)
        }
    } else if (callback) {
        callback()
    }
}