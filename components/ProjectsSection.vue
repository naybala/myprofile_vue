<template>
  <section id="projects" class="section">
    <div class="container">
      <div class="text-center mb-16">
        <span class="section-label"><span class="glow-line" />Projects</span>
        <h2 class="section-title">
          Featured<span class="gradient-text"> Work</span>
        </h2>
        <p class="section-subtitle mx-auto">
          A selection of production-grade systems I've built and shipped.
        </p>
      </div>

      <div ref="projectsGrid" class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        <article
          v-for="(project, i) in projects"
          :key="project.id"
          class="project-card group"
          :style="{ animationDelay: `${i * 0.1}s` }"
          :aria-label="`Project: ${project.title}`"
        >
          <!-- Image -->
          <div
            class="relative h-48 overflow-hidden"
            style="background: var(--color-surface-2)"
          >
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div class="absolute top-4 left-4">
              <span
                class="tech-badge shadow-lg"
                style="
                  background: rgba(15, 23, 42, 0.7);
                  backdrop-filter: blur(4px);
                "
                >{{ project.category }}</span
              >
            </div>
            <div
              class="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            />
          </div>

          <!-- Content -->
          <div class="p-6 space-y-4">
            <div>
              <span
                class="text-primary font-mono text-xs tracking-widest uppercase"
                >{{ project.category }}</span
              >
              <h3
                class="text-xl font-bold mt-1 transition-colors duration-200 group-hover:text-primary"
                style="color: var(--color-text)"
              >
                {{ project.title }}
              </h3>
            </div>
            <p
              class="text-sm leading-relaxed line-clamp-3"
              style="color: var(--color-text-muted)"
            >
              {{ project.description }}
            </p>

            <div class="flex flex-wrap gap-1.5">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="tech-badge text-xs"
                >{{ tech }}</span
              >
            </div>

            <div class="flex items-center gap-3 pt-2">
              <a
                v-if="project.github"
                :href="project.github"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-outline text-xs py-2 px-4"
                :aria-label="`${project.title} on GitHub`"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                  />
                </svg>
                Code
              </a>
              <a
                v-if="project.demo"
                :href="project.demo"
                target="_blank"
                rel="noopener noreferrer"
                class="btn-primary text-xs py-2 px-4"
                :aria-label="`Live demo of ${project.title}`"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
                Live Demo
              </a>
              <div
                v-if="!project.github && !project.demo"
                class="flex items-center gap-1.5 text-xs"
                style="color: var(--color-text-muted)"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                Private Repository
              </div>

              <button
                @click="openModal(project)"
                class="btn-outline text-xs py-2 px-4 ml-auto"
                :aria-label="`View details of ${project.title}`"
              >
                <svg
                  class="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
                View Details
              </button>
            </div>
          </div>
        </article>
      </div>
    </div>

    <!-- Modal -->
    <Teleport to="body">
      <Transition name="modal-fade">
        <div
          v-if="selectedProject"
          class="fixed inset-0 z-[9990] flex items-center justify-center p-4 sm:p-6"
          aria-modal="true"
          role="dialog"
        >
          <!-- Backdrop -->
          <div
            class="absolute inset-0 bg-black/80 backdrop-blur-sm"
            @click="closeModal"
          />

          <!-- Modal Content -->
          <div
            class="relative w-full max-w-4xl bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
          >
            <!-- Close Button -->
            <button
              @click="closeModal"
              class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/80 transition-colors backdrop-blur-md"
              aria-label="Close modal"
            >
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div class="overflow-y-auto custom-scrollbar">
              <!-- Large Image -->
              <div class="relative w-full h-64 sm:h-80 md:h-[470px]">
                <img
                  :src="selectedProject.image"
                  :alt="selectedProject.title"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)] via-[var(--color-surface)]/40 to-transparent opacity-100"
                />

                <div class="absolute bottom-6 left-6 right-6">
                  <span
                    class="inline-block tech-badge shadow-lg mb-3"
                    style="
                      background: rgba(15, 23, 42, 0.7);
                      backdrop-filter: blur(4px);
                    "
                    >{{ selectedProject.category }}</span
                  >
                  <h2 class="text-3xl md:text-4xl font-black gradient-text">
                    {{ selectedProject.title }}
                  </h2>
                </div>
              </div>

              <!-- Content Body -->
              <div class="p-6 md:p-8 space-y-8">
                <div>
                  <h3
                    class="text-lg font-bold mb-3"
                    style="color: var(--color-text)"
                  >
                    Project Overview
                  </h3>
                  <p
                    class="text-base leading-relaxed"
                    style="color: var(--color-text-muted)"
                  >
                    {{ selectedProject.description }}
                  </p>
                </div>

                <!-- <div>
                  <h3 class="text-lg font-bold mb-3" style="color: var(--color-text)">Technologies & Architecture</h3>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in selectedProject.tech" :key="tech" class="tech-badge">{{ tech }}</span>
                  </div>
                </div> -->

                <div
                  v-if="selectedProject.github || selectedProject.demo"
                  class="pt-4 flex flex-wrap items-center gap-4"
                >
                  <a
                    v-if="selectedProject.github"
                    :href="selectedProject.github"
                    target="_blank"
                    class="btn-outline"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                      />
                    </svg>
                    View Source Code
                  </a>
                  <a
                    v-if="selectedProject.demo"
                    :href="selectedProject.demo"
                    target="_blank"
                    class="btn-primary"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Preview
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import imgAccounting from "~/assets/images/Accounting_system.jpg";
import imgFinTech from "~/assets/images/Fin_tech_system.jpg";
import imgPos from "~/assets/images/POS_system.jpg";
import imgGarment from "~/assets/images/Garment_factory.jpg";
import imgLoyalty from "~/assets/images/Loyalty_point_system.jpg";
import imgMedia from "~/assets/images/Media_web_system.jpg";
import imgRealEstate from "~/assets/images/Real_estate_system.jpg";

interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  tech?: string[];
  github?: string;
  demo?: string;
}

const projectsGrid = ref<HTMLElement | null>(null);
const selectedProject = ref<Project | null>(null);

const openModal = (project: Project) => {
  selectedProject.value = project;
  document.body.style.overflow = "hidden";
};

const closeModal = () => {
  selectedProject.value = null;
  document.body.style.overflow = "";
};

const projects: Project[] = [
  {
    id: "accounting",
    title: "Accounting System",
    category: "Finance / ERP",
    image: imgAccounting,
    description:
      "A comprehensive accounting system designed to streamline financial workflows, manage ledger transactions, generate balance sheets, and automate tax compliance processing.",
  },
  {
    id: "fintech",
    title: "Fin Tech System",
    category: "FinTech",
    image: imgFinTech,
    description:
      "An advanced fintech platform featuring real-time wallet tracking, secure peer-to-peer transfers, interactive balance charts, and multi-currency payment processing.",
  },
  {
    id: "pos",
    title: "POS System",
    category: "Retail",
    image: imgPos,
    description:
      "A high-performance retail POS system supporting automated barcode scanning, dynamic product search, real-time inventory alerts, and instant invoice billing receipt creation.",
  },
  {
    id: "garment",
    title: "Garment System",
    category: "Manufacturing",
    image: imgGarment,
    description:
      "A specialized system for managing garment manufacturing processes, handling raw material inventory, production line scheduling, and order tracking.",
  },
  {
    id: "loyalty",
    title: "Loyalty Point System",
    category: "Marketing",
    image: imgLoyalty,
    description:
      "A customized customer loyalty program designed to track member reward points, process reward redemptions, and manage discount voucher lifecycle.",
  },
  {
    id: "media",
    title: "Media Web System",
    category: "Media",
    image: imgMedia,
    description:
      "A media publishing and resource management platform featuring structured layout directories, rapid upload tools, and multi-user subscription profiles.",
  },
  {
    id: "realestate",
    title: "Real Estate System",
    category: "Platform",
    image: imgRealEstate,
    description:
      "A comprehensive listing portal matching home buyers with properties, supporting advanced keyword filters, agent profiles, and property maps.",
  },
];
onMounted(async () => {
  if (!import.meta.client) return;
  const { gsap } = await import("gsap");
  const { ScrollTrigger } = await import("gsap/ScrollTrigger");
  gsap.registerPlugin(ScrollTrigger);
  const cards = projectsGrid.value?.querySelectorAll("article");
  if (cards) {
    gsap.fromTo(
      cards,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: projectsGrid.value, start: "top 80%" },
      },
    );
  }
});
</script>

<style scoped>
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s ease;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
.modal-fade-enter-active .relative {
  transition:
    transform 0.4s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.4s ease;
}
.modal-fade-leave-active .relative {
  transition:
    transform 0.3s cubic-bezier(0.16, 1, 0.3, 1),
    opacity 0.3s ease;
}
.modal-fade-enter-from .relative,
.modal-fade-leave-to .relative {
  transform: scale(0.95) translateY(20px);
  opacity: 0;
}

.custom-scrollbar::-webkit-scrollbar {
  width: 8px;
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 4px;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-muted);
}
</style>
