<template>
  <section id="home" class="relative min-h-screen flex flex-col justify-center overflow-hidden">
    <!-- Grid bg -->
    <div class="absolute inset-0 grid-bg opacity-40" aria-hidden="true" />

    <!-- Radial glow left -->
    <div
      class="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
      style="background: radial-gradient(ellipse at center, rgba(0,229,255,0.07) 0%, transparent 70%)"
      aria-hidden="true"
    />

    <!-- Floating Tech Icons -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        v-for="(tech, i) in floatingTechs"
        :key="i"
        class="absolute flex items-center gap-1.5 px-3 py-1.5 rounded-full font-mono text-xs font-semibold text-white/20 border border-white/5"
        :style="tech.style"
      >
        <span :style="{ color: tech.color + '40' }">{{ tech.icon }}</span>
        {{ tech.name }}
      </div>
    </div>

    <!-- Hero Content — split layout -->
    <div ref="heroRef" class="container relative z-10 py-24 lg:py-32">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- ── Left: Text ── -->
        <div class="flex flex-col items-start text-left">
          <!-- Badge -->
          <div class="reveal-up inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-mono mb-8">
            <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for opportunities
          </div>

          <!-- Headline -->
          <h1 class="reveal-up font-black tracking-tight leading-[1.05] mb-5">
            <span class="block text-muted text-xl sm:text-2xl font-semibold font-mono mb-3 tracking-widest">
              Hello, I'm
            </span>
            <span class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl gradient-text">
              Nay Ba La
            </span>
          </h1>

          <!-- Role -->
          <p class="reveal-up text-xl sm:text-2xl font-semibold text-white/80 mb-4">
            Senior Full Stack Web Developer
          </p>

          <!-- Typing -->
          <div class="reveal-up flex items-center gap-2 text-base sm:text-lg text-muted mb-10 h-8">
            <span class="text-primary font-mono">&gt;</span>
            <span class="font-mono text-white">{{ displayText }}</span>
            <span class="typing-cursor" aria-hidden="true" />
          </div>

          <!-- CTA -->
          <div class="reveal-up flex flex-wrap items-center gap-4 mb-10">
            <button
              class="btn-primary magnetic"
              @click="scrollTo('projects')"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
              View Projects
            </button>
            <a
              href="/resume.pdf"
              download
              class="btn-outline magnetic"
              aria-label="Download Resume PDF"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </a>
          </div>

          <!-- Socials -->
          <div class="reveal-up flex items-center gap-3">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.label"
              class="w-10 h-10 flex items-center justify-center rounded-xl border border-white/10 text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path :d="social.icon" />
              </svg>
            </a>

            <!-- Separator -->
            <span class="w-px h-6 bg-white/10" aria-hidden="true" />

            <!-- Quick stats -->
            <div class="flex items-center gap-4 text-xs font-mono text-muted">
              <span><span class="text-primary font-bold">4+</span> yrs</span>
              <span><span class="text-primary font-bold">20+</span> projects</span>
            </div>
          </div>
        </div>

        <!-- ── Right: Profile Photo ── -->
        <div class="reveal-right flex items-center justify-center lg:justify-end">
          <div class="relative">
            <!-- Outer decorative ring — slow spin -->
            <div
              class="absolute -inset-6 rounded-full border border-primary/10"
              style="animation: spin-slow 30s linear infinite"
              aria-hidden="true"
            />
            <!-- Dashed ring -->
            <div
              class="absolute -inset-3 rounded-full border border-dashed border-primary/20"
              style="animation: spin-slow 20s linear infinite reverse"
              aria-hidden="true"
            />

            <!-- Photo wrapper -->
            <div class="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden">
              <!-- Glow backdrop -->
              <div
                class="absolute inset-0 rounded-full"
                style="background: radial-gradient(ellipse at center, rgba(0,229,255,0.15) 0%, transparent 70%)"
                aria-hidden="true"
              />

              <!-- Gradient border ring -->
              <div
                class="absolute inset-0 rounded-full p-[3px]"
                style="background: linear-gradient(135deg, #00E5FF, #6366F1, #22C55E)"
                aria-hidden="true"
              >
                <div class="w-full h-full rounded-full bg-background" />
              </div>

              <!-- Actual image -->
              <img
                src="/myProfile.png"
                alt="Nay Ba La — Senior Full Stack Web Developer"
                class="absolute inset-[3px] w-[calc(100%-6px)] h-[calc(100%-6px)] rounded-full object-cover object-top"
                loading="eager"
                fetchpriority="high"
              />
            </div>

            <!-- Status badge — bottom right -->
            <div
              class="absolute bottom-4 -right-4 flex items-center gap-2 px-3 py-2 rounded-xl glass-card border-primary/20 shadow-glow-primary"
            >
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
              <span class="text-xs font-semibold text-white whitespace-nowrap">Open to work</span>
            </div>

            <!-- Tech badge — top left -->
            <div
              class="absolute -top-2 -left-6 flex items-center gap-1.5 px-3 py-2 rounded-xl glass-card"
            >
              <span class="text-primary text-xs font-mono font-bold">4+</span>
              <span class="text-xs text-muted">Years Exp.</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted text-xs font-mono">
      <span>scroll</span>
      <div class="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent animate-pulse" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useTypingAnimation } from '~/composables/useTypingAnimation'

const heroRef = ref<HTMLElement | null>(null)

const typingWords = [
  'Laravel Developer',
  'Nuxt Developer',
  'Backend Engineer',
  'Full Stack Engineer',
  'Technical Lead',
]

const { displayText } = useTypingAnimation(typingWords, {
  speed: 90,
  deleteSpeed: 55,
  pauseTime: 2200,
})

const scrollTo = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

// Floating tech items
const floatingTechs = [
  { name: 'HTML', icon: '⬡', color: '#E34F26', style: { top: '15%', left: '8%', animation: 'float 7s ease-in-out infinite' } },
  { name: 'CSS', icon: '⬡', color: '#1572B6', style: { top: '25%', left: '4%', animation: 'float 8s ease-in-out 1s infinite' } },
  { name: 'JavaScript', icon: '⬡', color: '#F7DF1E', style: { top: '60%', left: '6%', animation: 'float 6.5s ease-in-out 0.5s infinite' } },
  { name: 'TypeScript', icon: '⬡', color: '#3178C6', style: { top: '75%', left: '10%', animation: 'float 9s ease-in-out 2s infinite' } },
  { name: 'PHP', icon: '⬡', color: '#777BB4', style: { top: '40%', left: '2%', animation: 'float 7.5s ease-in-out 1.5s infinite' } },
  { name: 'Laravel', icon: '⬡', color: '#FF2D20', style: { top: '88%', left: '15%', animation: 'float 8s ease-in-out 3s infinite' } },
  { name: 'Node.js', icon: '⬡', color: '#339933', style: { top: '10%', right: '8%', animation: 'float 7s ease-in-out 0.8s infinite' } },
  { name: 'Nuxt.js', icon: '⬡', color: '#00DC82', style: { top: '22%', right: '4%', animation: 'float 8.5s ease-in-out 1.8s infinite' } },
  { name: 'Vue.js', icon: '⬡', color: '#42B883', style: { top: '55%', right: '5%', animation: 'float 6s ease-in-out 2.5s infinite' } },
  { name: 'MySQL', icon: '⬡', color: '#4479A1', style: { top: '70%', right: '8%', animation: 'float 9.5s ease-in-out 0.3s infinite' } },
  { name: 'PostgreSQL', icon: '⬡', color: '#336791', style: { top: '38%', right: '2%', animation: 'float 7.2s ease-in-out 2.2s infinite' } },
  { name: 'Docker', icon: '⬡', color: '#2496ED', style: { top: '85%', right: '12%', animation: 'float 8s ease-in-out 1s infinite' } },
  { name: 'Redis', icon: '⬡', color: '#DC382D', style: { top: '50%', left: '1%', animation: 'float 6.8s ease-in-out 3.5s infinite' } },
  { name: 'Git', icon: '⬡', color: '#F05032', style: { top: '5%', left: '30%', animation: 'float 7.3s ease-in-out 0.6s infinite' } },
  { name: 'Linux', icon: '⬡', color: '#FCC624', style: { top: '92%', right: '35%', animation: 'float 8.8s ease-in-out 2.8s infinite' } },
]

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/naybala',
    icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/naybala',
    icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
  },
  {
    label: 'Email',
    href: 'mailto:naybala.dev@gmail.com',
    icon: 'M0 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v.217l-12 7.857L0 4.217V4zm0 2.383v11.234l7.84-7.84L0 6.383zm22 11.234V6.383l-7.84 3.394 7.84 7.84zM8.617 10.794L.217 18h23.566l-8.4-7.206L12 13.143l-3.383-2.349z',
  },
]

onMounted(async () => {
  if (import.meta.client) {
    const { gsap } = await import('gsap')

    // Stagger in the left column text elements
    const elements = heroRef.value?.querySelectorAll('.reveal-up')
    if (elements?.length) {
      gsap.fromTo(
        elements,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.2,
        },
      )
    }

    // Slide in the photo from the right
    const photoEl = heroRef.value?.querySelector('.reveal-right')
    if (photoEl) {
      gsap.fromTo(
        photoEl,
        { opacity: 0, x: 80 },
        { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out', delay: 0.4 },
      )
    }
  }
})
</script>

<style scoped>
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  33% { transform: translateY(-12px) rotate(1deg); }
  66% { transform: translateY(-6px) rotate(-1deg); }
}

@keyframes spin-slow {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
</style>
