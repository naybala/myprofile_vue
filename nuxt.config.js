export default defineNuxtConfig({
  app: {
    head: {
      title: 'Nay Ba La – Web Developer',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Portfolio website of Nay Ba La, a passionate web developer from Myanmar.' },
        { name: 'keywords', content: 'Nay Ba La, naybala, web developer, portfolio, GitHub' },
        { name: 'author', content: 'Nay Ba La' },
        { name: 'robots', content: 'index, follow' },
        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://naybala.netlify.app/' },
        { property: 'og:title', content: 'Nay Ba La – Web Developer from Myanmar' },
        { property: 'og:description', content: "Hi! I'm Nay Ba La, a passionate web developer building modern and efficient websites." },
        { property: 'og:image', content: 'https://naybala.netlify.app/assets/myFullProfile.c362dc2b.jpg' },
        { property: 'og:site_name', content: 'Nay Ba La Portfolio' },
        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:url', content: 'https://naybala.netlify.app/' },
        { name: 'twitter:title', content: 'Nay Ba La – Web Developer from Myanmar' },
        { name: 'twitter:description', content: "Hi! I'm Nay Ba La, a passionate web developer building modern and efficient websites." },
        { name: 'twitter:image', content: 'https://naybala.netlify.app/assets/myFullProfile.c362dc2b.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css',
          integrity: 'sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3',
          crossorigin: 'anonymous'
        },
        { rel: 'stylesheet', href: '/fontawesome/css/all.css' }
      ],
      script: [
        { src: '/fontawesome/js/all.js', body: true }
      ]
    }
  }
})
