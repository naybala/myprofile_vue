<template>
  <section id="about" class="section">
    <div class="container">
      <!-- Header -->
      <div class="text-center mb-16">
        <span class="section-label"><span class="glow-line" />About Me</span>
        <h2 class="section-title">
          The Engineer Behind<span class="gradient-text"> the Code</span>
        </h2>
        <p class="section-subtitle mx-auto">
          Building scalable systems and elegant user experiences with 4+ years
          of hands-on engineering.
        </p>
      </div>

      <!-- Split Layout -->
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
        <!-- Left: Profile Visual -->
        <div ref="leftCol" class="relative reveal-left">
          <div class="relative mx-auto max-w-sm">
            <div
              class="absolute -inset-4 rounded-full border border-primary/10 animate-spin-slow"
              aria-hidden="true"
            />
            <div
              class="absolute -inset-8 rounded-full border border-secondary/5"
              aria-hidden="true"
            />

            <div
              class="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-card group"
              style="border: 1px solid var(--color-border)"
            >
              <img
                src="~/assets/images/myView.jpg"
                alt="Nay Ba La"
                class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <!-- Subtle overlay for depth -->
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-80"
              />
            </div>

            <div class="absolute -right-4 top-8 glass-card px-3 py-2">
              <p class="text-xs font-mono text-primary">4+ Years</p>
              <p class="text-xs" style="color: var(--color-text-muted)">
                Experience
              </p>
            </div>
            <div class="absolute -left-4 bottom-12 glass-card px-3 py-2">
              <p class="text-xs font-mono text-secondary">20+</p>
              <p class="text-xs" style="color: var(--color-text-muted)">
                Projects Done
              </p>
            </div>
          </div>
        </div>

        <!-- Right: Bio -->
        <div ref="rightCol" class="reveal-right space-y-6">
          <div class="space-y-4">
            <p
              class="leading-relaxed text-base lg:text-lg"
              style="color: var(--color-text)"
            >
              I'm a
              <span class="text-primary font-semibold"
                >Full Stack Web Developer</span
              >
              with 4+ years of experience crafting scalable backend
              architectures and modern frontend experiences. Based in Myanmar, I
              specialize in building production-grade systems that power real
              businesses.
            </p>
            <p class="leading-relaxed" style="color: var(--color-text-muted)">
              My expertise spans
              <strong style="color: var(--color-text)">REST API design</strong>,
              <strong style="color: var(--color-text)"
                >authentication & RBAC systems</strong
              >,
              <strong style="color: var(--color-text)">database design</strong>,
              and
              <strong style="color: var(--color-text)"
                >server deployment</strong
              >
              using modern DevOps practices. I bring technical leadership to
              teams and love mentoring junior developers.
            </p>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div
              v-for="skill in keySkills"
              :key="skill"
              class="flex items-center gap-2 text-sm"
              style="color: var(--color-text-muted)"
            >
              <svg
                class="w-4 h-4 text-primary flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {{ skill }}
            </div>
          </div>

          <div class="flex gap-3 pt-2">
            <button class="btn-primary" @click="scrollToSkills">
              View My Skills
            </button>
            <a
              href="mailto:naybala.personal@gmail.com"
              target="_blank"
              class="btn-outline"
              >Get In Touch</a
            >
          </div>
        </div>
      </div>

      <!-- Stats -->
      <div ref="statsRef" class="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="glass-card p-6 text-center hover:-translate-y-1 transition-transform duration-300 cursor-default"
        >
          <p
            class="text-3xl lg:text-4xl font-black font-mono gradient-text mb-1"
          >
            {{ stat.count }}{{ stat.suffix }}
          </p>
          <p class="text-sm font-medium" style="color: var(--color-text-muted)">
            {{ stat.label }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useIntersectionObserver } from "@vueuse/core";
import { useCounterAnimation } from "~/composables/useCounterAnimation";

const leftCol = ref<HTMLElement | null>(null);
const rightCol = ref<HTMLElement | null>(null);
const statsRef = ref<HTMLElement | null>(null);

const keySkills = [
  "Backend Architecture",
  "REST API Design",
  "Authentication & RBAC",
  "Database Design",
  "Server Deployment",
  "DevOps & CI/CD",
  "Team Leadership",
  "Code Reviews",
];

const scrollToSkills = () => {
  document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" });
};

const { count: yearsCount, animate: animateYears } = useCounterAnimation(4);
const { count: projectsCount, animate: animateProjects } = useCounterAnimation(
  20,
  1800,
  200,
);
const { count: techCount, animate: animateTech } = useCounterAnimation(
  30,
  1600,
  400,
);
const { count: clientCount, animate: animateClients } = useCounterAnimation(
  15,
  2000,
  600,
);

const stats = [
  { label: "Years Experience", count: yearsCount, suffix: "+" },
  { label: "Projects Completed", count: projectsCount, suffix: "+" },
  { label: "Technologies", count: techCount, suffix: "+" },
  { label: "Happy Clients", count: clientCount, suffix: "+" },
];

onMounted(async () => {
  if (!import.meta.client) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);

  gsap.fromTo(
    leftCol.value,
    { opacity: 0, x: -60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: leftCol.value, start: "top 80%" },
    },
  );
  gsap.fromTo(
    rightCol.value,
    { opacity: 0, x: 60 },
    {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: rightCol.value, start: "top 80%" },
    },
  );
  gsap.fromTo(
    statsRef.value?.querySelectorAll(".glass-card"),
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.7,
      stagger: 0.1,
      ease: "power3.out",
      scrollTrigger: { trigger: statsRef.value, start: "top 85%" },
    },
  );
});

useIntersectionObserver(
  statsRef,
  ([{ isIntersecting }]) => {
    if (isIntersecting) {
      animateYears();
      animateProjects();
      animateTech();
      animateClients();
    }
  },
  { threshold: 0.3 },
);
</script>
