import { ref, onMounted, onUnmounted } from 'vue'

export function useActiveSection(sections: string[]) {
  const activeSection = ref(sections[0] || '')

  const updateActiveSection = () => {
    const scrollY = window.scrollY + window.innerHeight / 3

    for (const id of sections) {
      const el = document.getElementById(id)
      if (!el) continue
      const top = el.offsetTop
      const bottom = top + el.offsetHeight
      if (scrollY >= top && scrollY < bottom) {
        activeSection.value = id
        break
      }
    }
  }

  onMounted(() => {
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    updateActiveSection()
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', updateActiveSection)
  })

  return { activeSection }
}
