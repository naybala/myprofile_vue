import { ref, onMounted } from 'vue'

export function useCounterAnimation(target: number, duration = 2000, delay = 0) {
  const count = ref(0)
  let started = false

  const animate = () => {
    if (started) return
    started = true

    setTimeout(() => {
      const startTime = performance.now()

      const update = (currentTime: number) => {
        const elapsed = currentTime - startTime
        const progress = Math.min(elapsed / duration, 1)
        // Ease out quart
        const eased = 1 - Math.pow(1 - progress, 4)
        count.value = Math.round(eased * target)

        if (progress < 1) {
          requestAnimationFrame(update)
        } else {
          count.value = target
        }
      }

      requestAnimationFrame(update)
    }, delay)
  }

  return { count, animate }
}
