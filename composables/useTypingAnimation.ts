import { ref, onMounted, onUnmounted } from 'vue'

export function useTypingAnimation(words: string[], options?: { speed?: number; deleteSpeed?: number; pauseTime?: number }) {
  const displayText = ref('')
  const currentWordIndex = ref(0)
  const isDeleting = ref(false)
  const speed = options?.speed ?? 100
  const deleteSpeed = options?.deleteSpeed ?? 60
  const pauseTime = options?.pauseTime ?? 2000

  let timer: ReturnType<typeof setTimeout>

  const type = () => {
    const currentWord = words[currentWordIndex.value]

    if (isDeleting.value) {
      displayText.value = currentWord.substring(0, displayText.value.length - 1)

      if (displayText.value.length === 0) {
        isDeleting.value = false
        currentWordIndex.value = (currentWordIndex.value + 1) % words.length
        timer = setTimeout(type, 400)
        return
      }
      timer = setTimeout(type, deleteSpeed)
    } else {
      displayText.value = currentWord.substring(0, displayText.value.length + 1)

      if (displayText.value.length === currentWord.length) {
        isDeleting.value = true
        timer = setTimeout(type, pauseTime)
        return
      }
      timer = setTimeout(type, speed)
    }
  }

  onMounted(() => {
    timer = setTimeout(type, 600)
  })

  onUnmounted(() => {
    clearTimeout(timer)
  })

  return { displayText }
}
