// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
  ],

  typescript: {
    strict: false,
    shim: false,
  },

  css: [
    '~/assets/css/main.css',
  ],

  app: {
    head: {
      title: 'Nay Ba La – Senior Full Stack Web Developer',
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        {
          name: 'description',
          content:
            'Nay Ba La – Senior Full Stack Web Developer specializing in Laravel, Nuxt, Vue, Node.js, PostgreSQL, Docker and cloud infrastructure.',
        },
        {
          name: 'keywords',
          content:
            'Nay Ba La, naybala, Full Stack Developer, Laravel Developer, Nuxt Developer, Vue.js, Backend Engineer, Myanmar Developer',
        },
        { name: 'author', content: 'Nay Ba La' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://naybala.netlify.app/' },
        { property: 'og:title', content: 'Nay Ba La – Senior Full Stack Web Developer' },
        {
          property: 'og:description',
          content:
            'Senior Full Stack Developer with 4+ years building scalable backend systems, REST APIs, and modern web applications.',
        },
        { property: 'og:image', content: 'https://naybala.netlify.app/og-image.jpg' },
        { property: 'og:site_name', content: 'Nay Ba La Portfolio' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Nay Ba La – Senior Full Stack Web Developer' },
        {
          name: 'twitter:description',
          content: 'Senior Full Stack Developer | Laravel | Nuxt | Docker | DevOps',
        },
        { name: 'twitter:image', content: 'https://naybala.netlify.app/og-image.jpg' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/myProfile.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  vite: {
    optimizeDeps: {
      include: ['gsap', 'lenis'],
    },
  },
})
