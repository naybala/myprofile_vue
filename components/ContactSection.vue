<template>
  <section id="contact" class="section">
    <div class="container">
      <div class="text-center mb-16">
        <span class="section-label"><span class="glow-line" />Get In Touch</span>
        <h2 class="section-title">Let's Build Something<span class="gradient-text"> Amazing</span></h2>
        <p class="section-subtitle mx-auto">Have a project in mind? I'd love to hear about it. Send me a message and let's talk.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
        <!-- Contact Info -->
        <div class="space-y-6">
          <div class="glass-card p-8 space-y-6">
            <h3 class="text-xl font-bold" style="color: var(--color-text)">Contact Information</h3>
            <div class="space-y-4">
              <a
                v-for="link in contactLinks"
                :key="link.label"
                :href="link.href"
                :target="link.href.startsWith('http') ? '_blank' : undefined"
                :rel="link.href.startsWith('http') ? 'noopener noreferrer' : undefined"
                class="flex items-center gap-4 p-3 rounded-2xl transition-all duration-200 group cursor-pointer hover:bg-primary/5"
                :aria-label="link.label"
              >
                <div class="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:border-primary/30 group-hover:bg-primary/10" style="border: 1px solid var(--color-border)">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path :d="link.icon" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs font-medium" style="color: var(--color-text-muted)">{{ link.label }}</p>
                  <p class="text-sm font-semibold group-hover:text-primary transition-colors duration-200" style="color: var(--color-text)">{{ link.value }}</p>
                </div>
              </a>
            </div>

            <div class="flex items-center gap-3 pt-2" style="border-top: 1px solid var(--color-border)">
              <svg class="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" style="color: var(--color-text-muted)">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p class="text-sm" style="color: var(--color-text-muted)">Yangon, Myanmar 🇲🇲</p>
            </div>
          </div>

          <!-- Socials -->
          <div class="glass-card p-6">
            <h3 class="text-sm font-semibold mb-4" style="color: var(--color-text-muted)">Follow me</h3>
            <div class="flex gap-3">
              <a
                v-for="social in socials"
                :key="social.label"
                :href="social.href"
                target="_blank"
                rel="noopener noreferrer"
                :aria-label="social.label"
                class="w-10 h-10 flex items-center justify-center rounded-xl hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 cursor-pointer"
                :style="{ border: '1px solid var(--color-border)', color: 'var(--color-text-muted)' }"
              >
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path :d="social.icon" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="glass-card p-8">
          <h3 class="text-xl font-bold mb-6" style="color: var(--color-text)">Send a Message</h3>
          <form class="space-y-4" novalidate @submit.prevent="handleSubmit">
            <div class="grid sm:grid-cols-2 gap-4">
              <div>
                <label for="contact-name" class="block text-sm font-medium mb-1.5" style="color: var(--color-text-muted)">Name</label>
                <input id="contact-name" v-model="form.name" type="text" class="contact-input" placeholder="Your name" required autocomplete="name" />
              </div>
              <div>
                <label for="contact-email" class="block text-sm font-medium mb-1.5" style="color: var(--color-text-muted)">Email</label>
                <input id="contact-email" v-model="form.email" type="email" class="contact-input" placeholder="your@email.com" required autocomplete="email" />
              </div>
            </div>
            <div>
              <label for="contact-subject" class="block text-sm font-medium mb-1.5" style="color: var(--color-text-muted)">Subject</label>
              <input id="contact-subject" v-model="form.subject" type="text" class="contact-input" placeholder="What's this about?" />
            </div>
            <div>
              <label for="contact-message" class="block text-sm font-medium mb-1.5" style="color: var(--color-text-muted)">Message</label>
              <textarea id="contact-message" v-model="form.message" rows="5" class="contact-input resize-none" placeholder="Tell me about your project..." required />
            </div>

            <button type="submit" class="w-full btn-primary justify-center" :disabled="sending">
              <svg v-if="!sending" class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <svg v-else class="w-4 h-4 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              {{ sending ? 'Sending...' : 'Send Message' }}
            </button>

            <Transition name="fade-in">
              <div v-if="success" class="flex items-center gap-2 p-3 rounded-2xl bg-accent/10 border border-accent/20 text-accent text-sm" role="alert">
                <svg class="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Message sent! I'll get back to you shortly.
              </div>
            </Transition>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
const sending = ref(false)
const success = ref(false)
const form = reactive({ name: '', email: '', subject: '', message: '' })
const handleSubmit = async () => {
  sending.value = true
  await new Promise((resolve) => setTimeout(resolve, 1500))
  sending.value = false
  success.value = true
  Object.assign(form, { name: '', email: '', subject: '', message: '' })
  setTimeout(() => { success.value = false }, 5000)
}

const contactLinks = [
  { label: 'Email', value: 'naybala.dev@gmail.com', href: 'mailto:naybala.dev@gmail.com', icon: 'M0 4a2 2 0 0 1 2-2h20a2 2 0 0 1 2 2v.217l-12 7.857L0 4.217V4zm0 2.383v11.234l7.84-7.84L0 6.383zm22 11.234V6.383l-7.84 3.394 7.84 7.84zM8.617 10.794L.217 18h23.566l-8.4-7.206L12 13.143l-3.383-2.349z' },
  { label: 'GitHub', value: 'github.com/naybala', href: 'https://github.com/naybala', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { label: 'LinkedIn', value: 'linkedin.com/in/naybala', href: 'https://linkedin.com/in/naybala', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
  { label: 'Portfolio', value: 'naybala.netlify.app', href: 'https://naybala.netlify.app', icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
]
const socials = [
  { label: 'GitHub', href: 'https://github.com/naybala', icon: 'M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/naybala', icon: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' },
]
</script>

<style scoped>
.fade-in-enter-active, .fade-in-leave-active { transition: all 0.3s ease; }
.fade-in-enter-from, .fade-in-leave-to { opacity: 0; transform: translateY(8px); }
</style>
