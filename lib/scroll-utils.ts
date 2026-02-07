export const smoothScrollTo = (targetId: string, callback?: () => void) => {
    const element = document.querySelector(targetId)
    if (element) {
        const targetPosition = element.getBoundingClientRect().top + window.pageYOffset
        const startPosition = window.pageYOffset
        const distance = targetPosition - startPosition
        const duration = 1500 // 1.5 segundos para hacer la animación más notoria
        let start: number | null = null

        const animation = (currentTime: number) => {
            if (start === null) start = currentTime
            const timeElapsed = currentTime - start
            const run = ease(timeElapsed, startPosition, distance, duration)
            window.scrollTo(0, run)
            if (timeElapsed < duration) {
                requestAnimationFrame(animation)
            } else if (callback) {
                callback()
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
    } else if (callback) {
        callback()
    }
}