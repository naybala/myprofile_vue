<template>
  <div class="code-bg" aria-hidden="true">
    <span
      v-for="(snippet, i) in snippets"
      :key="i"
      class="code-snippet"
      :style="snippet.style"
    >{{ snippet.text }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const codeLines = [
  'const fetchUser = async () => {}',
  'Route::resource(\'users\', UserController::class)',
  'SELECT * FROM users WHERE active = 1',
  'docker compose up -d',
  'git push origin main',
  'npm run build',
  'php artisan migrate:fresh --seed',
  'SELECT id, name FROM projects',
  'export default defineNuxtConfig({})',
  'const { data } = await useFetch(\'/api/users\')',
  '@Injectable() class AuthService {}',
  'nginx -t && nginx -s reload',
  'git commit -m "feat: add auth"',
  'pm2 restart all',
  'composer require laravel/sanctum',
]

interface Snippet {
  text: string
  style: Record<string, string>
}

const snippets = ref<Snippet[]>([])

onMounted(() => {
  snippets.value = codeLines.map((text, i) => ({
    text,
    style: {
      left: `${(i * 6.5) % 95}%`,
      animationDuration: `${20 + (i * 3.7) % 20}s`,
      animationDelay: `${(i * 2.3) % 15}s`,
      fontSize: `${0.6 + (i % 3) * 0.1}rem`,
    },
  }))
})
</script>
