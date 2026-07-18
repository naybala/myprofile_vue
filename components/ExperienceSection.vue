<template>
  <section id="experience" class="section">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label">
          <span class="glow-line" />
          Experience
        </span>
        <h2 class="section-title">
          My Professional
          <span class="gradient-text"> Journey</span>
        </h2>
        <p class="section-subtitle mx-auto">
          A track record of building robust systems and leading engineering teams.
        </p>
      </div>

      <!-- Timeline -->
      <div ref="timelineRef" class="relative max-w-3xl mx-auto">
        <!-- Vertical line -->
        <div class="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" aria-hidden="true" />

        <div
          v-for="(exp, i) in experiences"
          :key="exp.id"
          class="relative pl-16 pb-12 last:pb-0"
        >
          <!-- Node -->
          <div
            class="absolute left-0 top-1 w-12 h-12 rounded-xl flex items-center justify-center border-2 transition-all duration-300"
            :class="exp.type === 'current'
              ? 'bg-primary/20 border-primary text-primary'
              : 'bg-card border-white/20 text-muted'"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>

          <!-- Card -->
          <div
            class="glass-card p-6 hover:border-primary/20 transition-all duration-400 cursor-default"
            :class="{ 'border-primary/10': exp.type === 'current' }"
          >
            <!-- Header -->
            <div class="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div class="flex items-center gap-2 mb-1">
                  <h3 class="text-xl font-bold text-white">{{ exp.title }}</h3>
                  <span
                    v-if="exp.type === 'current'"
                    class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold"
                  >
                    <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                    Current
                  </span>
                </div>
                <p class="text-primary font-semibold">{{ exp.company }}</p>
              </div>
              <div class="text-right">
                <span class="font-mono text-sm text-muted border border-white/10 px-3 py-1 rounded-lg">
                  {{ exp.period }}
                </span>
              </div>
            </div>

            <!-- Responsibilities -->
            <ul class="space-y-2 mb-5">
              <li
                v-for="desc in exp.description"
                :key="desc"
                class="flex items-start gap-2 text-sm text-muted leading-relaxed"
              >
                <svg class="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
                {{ desc }}
              </li>
            </ul>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in exp.tech"
                :key="tech"
                class="tech-badge"
              >{{ tech }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const timelineRef = ref<HTMLElement | null>(null)

const experiences = [
  {
    id: 'senior-backend',
    title: 'Senior Backend Developer',
    company: 'Tech Company — Myanmar',
    period: '2023 – Present',
    type: 'current',
    description: [
      'Architect and develop scalable REST APIs using Laravel serving 10,000+ daily active users',
      'Design complex database schemas with PostgreSQL optimized for high-performance queries',
      'Implement OAuth2 authentication, role-based access control (RBAC), and security hardening',
      'Containerize applications with Docker and orchestrate deployments using GitHub Actions CI/CD',
      'Mentor junior developers and conduct thorough code reviews maintaining quality standards',
    ],
    tech: ['Laravel', 'PostgreSQL', 'Docker', 'Redis', 'GitHub Actions', 'Nginx', 'Linux'],
  },
  {
    id: 'tech-lead',
    title: 'Technical Lead',
    company: 'Software Agency — Myanmar',
    period: '2022 – 2023',
    type: 'past',
    description: [
      'Led a cross-functional team of 5 engineers delivering enterprise-level SaaS products',
      'Established coding standards, architectural patterns, and development workflows',
      'Designed microservice-ready monolithic architectures with clean separation of concerns',
      'Collaborated with product managers and stakeholders to define technical requirements',
      'Reduced API response times by 60% through query optimization and caching strategies',
    ],
    tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker', 'PM2', 'Supervisor'],
  },
  {
    id: 'fullstack',
    title: 'Full Stack Developer',
    company: 'Digital Studio — Myanmar',
    period: '2020 – 2022',
    type: 'past',
    description: [
      'Built end-to-end web applications from database design to frontend implementation',
      'Developed responsive user interfaces using Vue.js and Nuxt.js with Tailwind CSS',
      'Integrated third-party APIs including payment gateways and SMS services',
      'Set up VPS servers with Nginx, SSL certificates, and automated backup solutions',
      'Delivered 10+ successful projects across e-commerce, HR, and POS domains',
    ],
    tech: ['Nuxt.js', 'Laravel', 'MySQL', 'Tailwind CSS', 'Nginx', 'Node.js'],
  },
]

onMounted(async () => {
  if (!import.meta.client) return
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)

  const cards = timelineRef.value?.querySelectorAll('.glass-card')
  if (cards) {
    gsap.fromTo(
      cards,
      { opacity: 0, x: -40 },
      {
        opacity: 1, x: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: timelineRef.value, start: 'top 80%' },
      },
    )
  }
})
</script>
