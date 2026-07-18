<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="text-center mb-16">
        <span class="section-label"><span class="glow-line" />Projects</span>
        <h2 class="section-title">Featured<span class="gradient-text"> Work</span></h2>
        <p class="section-subtitle mx-auto">A selection of production-grade systems I've built and shipped.</p>
      </div>

      <div ref="projectsGrid" class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          class="project-card group"
          :style="{ animationDelay: `${i * 0.1}s` }"
          :aria-label="`Project: ${project.title}`"
        >
          <!-- Image placeholder -->
          <div class="relative h-48 overflow-hidden" style="background: var(--color-surface-2)">
            <div class="w-full h-full flex items-center justify-center relative" :style="{ background: project.gradient }">
              <span class="text-8xl font-black font-mono text-white/10 select-none">
                {{ String(i + 1).padStart(2, '0') }}
              </span>
              <div class="absolute top-4 left-4">
                <span class="tech-badge">{{ project.category }}</span>
              </div>
            </div>
            <div class="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>

          <!-- Content -->
          <div class="p-6 space-y-4">
            <div>
              <span class="text-primary font-mono text-xs tracking-widest uppercase">{{ project.category }}</span>
              <h3 class="text-xl font-bold mt-1 transition-colors duration-200 group-hover:text-primary" style="color: var(--color-text)">
                {{ project.title }}
              </h3>
            </div>
            <p class="text-sm leading-relaxed line-clamp-3" style="color: var(--color-text-muted)">{{ project.description }}</p>

            <div class="flex flex-wrap gap-1.5">
              <span v-for="tech in project.tech" :key="tech" class="tech-badge text-xs">{{ tech }}</span>
            </div>

            <div class="flex items-center gap-3 pt-2">
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer" class="btn-outline text-xs py-2 px-4" :aria-label="`${project.title} on GitHub`">
                <svg class="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                Code
              </a>
              <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="btn-primary text-xs py-2 px-4" :aria-label="`Live demo of ${project.title}`">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
              <div v-if="!project.github && !project.demo" class="flex items-center gap-1.5 text-xs" style="color: var(--color-text-muted)">
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                Private Repository
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const projectsGrid = ref<HTMLElement | null>(null)
const projects = [
  { id: 'support-ticket', title: 'Support Ticket Portal', category: 'SaaS', description: 'A full-featured customer support system with ticket management, SLA tracking, agent assignment, automated email notifications, and a rich dashboard with analytics.', gradient: 'linear-gradient(135deg, #0F172A 0%, #1E1B4B 100%)', tech: ['Laravel', 'Nuxt.js', 'MySQL', 'Redis', 'Docker', 'REST API'], github: undefined, demo: undefined },
  { id: 'accounting', title: 'Accounting System', category: 'ERP', description: 'Enterprise-grade accounting platform with double-entry bookkeeping, financial reports, invoice management, payment tracking, and multi-currency support.', gradient: 'linear-gradient(135deg, #0F172A 0%, #042f2e 100%)', tech: ['Laravel', 'Vue.js', 'PostgreSQL', 'Docker', 'REST API'], github: undefined, demo: undefined },
  { id: 'hotel', title: 'Hotel Management System', category: 'Hospitality', description: 'Complete hotel operations platform covering room booking, housekeeping, front desk, billing, and OTA channel integration with real-time availability.', gradient: 'linear-gradient(135deg, #0F172A 0%, #1a1a2e 100%)', tech: ['Laravel', 'Nuxt.js', 'MySQL', 'Docker', 'REST API'], github: undefined, demo: undefined },
  { id: 'pos', title: 'POS System', category: 'Retail', description: 'Modern point-of-sale solution with inventory management, barcode scanning, multi-store support, shift management, and real-time sales analytics.', gradient: 'linear-gradient(135deg, #0F172A 0%, #1c0a00 100%)', tech: ['Laravel', 'Vue.js', 'MySQL', 'Redis', 'Docker'], github: undefined, demo: undefined },
  { id: 'reward', title: 'Reward & Loyalty Platform', category: 'FinTech', description: 'Customer loyalty management system with points earning/redemption, tier management, gamification, push notifications, and merchant dashboard.', gradient: 'linear-gradient(135deg, #0F172A 0%, #0c2340 100%)', tech: ['Laravel', 'Nuxt.js', 'PostgreSQL', 'Redis', 'REST API'], github: undefined, demo: undefined },
  { id: 'vpn-dashboard', title: 'VPN Dashboard', category: 'Network', description: 'VPN management portal with user provisioning, bandwidth monitoring, subscription management, payment integration, and real-time server status.', gradient: 'linear-gradient(135deg, #0F172A 0%, #001a12 100%)', tech: ['Laravel', 'Vue.js', 'MySQL', 'Docker', 'Node.js'], github: undefined, demo: undefined },
  { id: 'admin-dashboard', title: 'Multi-tenant Admin Dashboard', category: 'SaaS', description: 'Scalable multi-tenant SaaS admin panel with RBAC, audit logs, subscription billing, white-labeling, and comprehensive system monitoring.', gradient: 'linear-gradient(135deg, #0F172A 0%, #1a0020 100%)', tech: ['Laravel', 'Nuxt.js', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'], github: undefined, demo: undefined },
]
onMounted(async () => {
  if (!import.meta.client) return
  const { gsap } = await import('gsap')
  const { ScrollTrigger } = await import('gsap/ScrollTrigger')
  gsap.registerPlugin(ScrollTrigger)
  const cards = projectsGrid.value?.querySelectorAll('article')
  if (cards) {
    gsap.fromTo(cards, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out', scrollTrigger: { trigger: projectsGrid.value, start: 'top 80%' } })
  }
})
</script>
