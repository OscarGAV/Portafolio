export const smoothScrollTo = (targetId: string, callback?: () => void) => {
    const element = document.querySelector(targetId)
    if (element) {
        // Ejecutar el callback inmediatamente (cerrar menú) antes de calcular posiciones
        if (callback) {
            callback()
        }

        // Pequeño timeout para permitir que el menú se cierre y la página se reajuste
        setTimeout(() => {
            const targetPosition = element.getBoundingClientRect().top + window.pageYOffset
            const startPosition = window.pageYOffset
            const distance = targetPosition - startPosition
            const duration = 1000 // Reducido a 1 segundo para mayor fluidez
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
        }, 50) // 50ms de delay para permitir que el DOM se actualice
    } else if (callback) {
        callback()
    }
}