<template>
  <div>
    <div ref="cursorEl" class="cursor" aria-hidden="true" />
    <div ref="followerEl" class="cursor-follower" aria-hidden="true" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const cursorEl = ref<HTMLElement | null>(null)
const followerEl = ref<HTMLElement | null>(null)

let mouseX = 0
let mouseY = 0
let followerX = 0
let followerY = 0
let rafId: number

const onMouseMove = (e: MouseEvent) => {
  mouseX = e.clientX
  mouseY = e.clientY

  if (cursorEl.value) {
    cursorEl.value.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`
  }
}

const animate = () => {
  followerX += (mouseX - followerX - 18) * 0.12
  followerY += (mouseY - followerY - 18) * 0.12

  if (followerEl.value) {
    followerEl.value.style.transform = `translate(${followerX}px, ${followerY}px)`
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
