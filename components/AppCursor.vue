<template>
  <div>
    <div ref="cursorEl" class="cursor" aria-hidden="true">&lt;/&gt;</div>
    <div ref="followerEl" class="cursor-follower" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorEl = ref<HTMLElement | null>(null)
const followerEl = ref<HTMLElement | null>(null)

let mouseX = -100
let mouseY = -100
let followerX = -100
let followerY = -100
let rafId: number

const onMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY

  if (cursorEl.value) {
    // 32x32 cursor size -> 16px offset
    cursorEl.value.style.setProperty('--x', `${mouseX - 16}px`)
    cursorEl.value.style.setProperty('--y', `${mouseY - 16}px`)
  }
}

const animate = () => {
  // 48x48 follower size -> 24px offset
  followerX += (mouseX - followerX - 24) * 0.12
  followerY += (mouseY - followerY - 24) * 0.12

  if (followerEl.value) {
    followerEl.value.style.setProperty('--x', `${followerX}px`)
    followerEl.value.style.setProperty('--y', `${followerY}px`)
  }
  rafId = requestAnimationFrame(animate)
}

const onMouseEnterLink = () => {
  cursorEl.value?.classList.add('is-hovering')
  followerEl.value?.classList.add('is-hovering')
}

const onMouseLeaveLink = () => {
  cursorEl.value?.classList.remove('is-hovering')
  followerEl.value?.classList.remove('is-hovering')
}

onMounted(() => {
  window.addEventListener('mousemove', onMouseMove, { passive: true })
  rafId = requestAnimationFrame(animate)

  // Add hover class on all interactive elements
  const addHoverListeners = () => {
    document.querySelectorAll('a, button, [role="button"], .cursor-pointer').forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterLink)
      el.addEventListener('mouseleave', onMouseLeaveLink)
    })
  }

  addHoverListeners()
  // Re-check after a small delay for dynamically added elements
  setTimeout(addHoverListeners, 1000)
})

onUnmounted(() => {
  window.removeEventListener('mousemove', onMouseMove)
  cancelAnimationFrame(rafId)
})
</script>
