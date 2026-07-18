<template>
  <section id="skills" class="section">
    <div class="container">
      <div class="text-center mb-12">
        <span class="section-label"
          ><span class="glow-line" />Technical Skills</span
        >
        <h2 class="section-title">
          My Tech<span class="gradient-text"> Arsenal</span>
        </h2>
        <p class="section-subtitle mx-auto">
          A curated set of technologies I use to build robust, scalable
          applications.
        </p>
      </div>

      <!-- Category Tabs -->
      <div
        class="flex flex-wrap justify-center gap-2 mb-10"
        role="tablist"
        aria-label="Skill categories"
      >
        <button
          v-for="cat in categories"
          :key="cat.id"
          :class="['skill-tab', activeCategory === cat.id ? 'active' : '']"
          role="tab"
          :aria-selected="activeCategory === cat.id"
          @click="activeCategory = cat.id"
        >
          {{ cat.label }}
        </button>
      </div>

      <!-- Skills Grid -->
      <div class="relative min-h-[320px]">
        <div
          :key="activeCategory"
          class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          <div
            v-for="skill in currentCategory?.skills"
            :key="skill.name"
            class="glass-card p-4 text-center group hover:-translate-y-2 transition-transform duration-300 cursor-default"
          >
            <div
              class="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3 font-bold text-lg transition-transform duration-300 group-hover:scale-110"
              :style="{
                background: `linear-gradient(135deg, ${skill.color}30, ${skill.color}10)`,
                border: `1px solid ${skill.color}30`,
              }"
            >
              <span :style="{ color: skill.color }">{{ skill.abbr }}</span>
            </div>
            <p
              class="text-sm font-semibold transition-colors duration-200"
              style="color: var(--color-text)"
            >
              {{ skill.name }}
            </p>
            <div
              class="mt-3 h-1 rounded-full overflow-hidden"
              style="background: var(--color-border)"
            >
              <div
                class="h-full rounded-full"
                :style="{
                  width: `${skill.level}%`,
                  background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const activeCategory = ref("frontend");

const categories = [
  {
    id: "frontend",
    label: "Frontend",
    skills: [
      { name: "HTML5", abbr: "H", color: "#E34F26", level: 95 },
      { name: "CSS3", abbr: "C", color: "#1572B6", level: 90 },
      { name: "Tailwind", abbr: "TW", color: "#38BDF8", level: 92 },
      { name: "JavaScript", abbr: "JS", color: "#F7DF1E", level: 88 },
      { name: "TypeScript", abbr: "TS", color: "#3178C6", level: 85 },
      { name: "Vue.js", abbr: "V", color: "#42B883", level: 90 },
      { name: "Nuxt.js", abbr: "N", color: "#00DC82", level: 88 },
      { name: "React", abbr: "R", color: "#61DAFB", level: 78 },
      { name: "Next.js", abbr: "NX", color: "#6366F1", level: 72 },
      { name: "Svelte.js", abbr: "SV", color: "#FF3E00", level: 72 },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    skills: [
      { name: "PHP", abbr: "PHP", color: "#777BB4", level: 92 },
      { name: "Laravel", abbr: "Laravel", color: "#FF2D20", level: 95 },
      { name: "Node.js", abbr: "Node", color: "#339933", level: 85 },
      { name: "NestJS", abbr: "Nest", color: "#E0234E", level: 80 },
      { name: "ExpressJs", abbr: "Express", color: "#339933", level: 90 },
    ],
  },
  {
    id: "database",
    label: "Database",
    skills: [
      { name: "MySQL", abbr: "MySQL", color: "#4479A1", level: 92 },
      { name: "PostgreSQL", abbr: "Postgres", color: "#336791", level: 88 },
      { name: "MongoDB", abbr: "Mongoose", color: "#4479A1", level: 92 },
    ],
  },
  {
    id: "devops",
    label: "Cloud & DevOps",
    skills: [
      { name: "Docker", abbr: "Docker", color: "#2496ED", level: 88 },
      { name: "Nginx", abbr: "Nginx", color: "#009639", level: 85 },
      { name: "Linux", abbr: "Linux", color: "#FCC624", level: 82 },
      { name: "GitHub Actions", abbr: "GA", color: "#2088FF", level: 78 },
      { name: "PM2", abbr: "PM2", color: "#2B037A", level: 85 },
      { name: "Supervisor", abbr: "Supervisor", color: "#00B0FF", level: 80 },
    ],
  },
];

const currentCategory = computed(() =>
  categories.find((c) => c.id === activeCategory.value),
);
</script>
