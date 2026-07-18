<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      scrolled ? 'backdrop-blur-xl border-b shadow-sm' : 'bg-transparent',
    ]"
    :style="
      scrolled
        ? {
            background: 'var(--color-surface)',
            borderColor: 'var(--color-border)',
          }
        : {}
    "
  >
    <nav
      class="container flex items-center justify-between h-16 lg:h-20"
      role="navigation"
      aria-label="Main navigation"
    >
      <!-- Logo -->
      <a
        href="#home"
        class="text-xl font-bold font-mono gradient-text animated-underline cursor-pointer"
        aria-label="Nay Ba La — Home"
        @click.prevent="scrollTo('home')"
      >
        &lt; Nay Ba La /&gt;
      </a>

      <!-- Desktop Nav -->
      <ul class="hidden md:flex items-center gap-1" role="list">
        <li v-for="item in navItems" :key="item.id">
          <button
            class="px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
            :class="
              activeSection === item.id
                ? 'text-primary bg-primary/10'
                : 'hover:bg-primary/5'
            "
            :style="
              activeSection !== item.id
                ? { color: 'var(--color-text-muted)' }
                : {}
            "
            :aria-current="activeSection === item.id ? 'page' : undefined"
            @click="scrollTo(item.id)"
          >
            {{ item.label }}
          </button>
        </li>
      </ul>

      <!-- Right actions -->
      <div class="flex items-center gap-2">
        <!-- ── Theme Toggle ── -->
        <button
          ref="toggleBtn"
          class="theme-toggle relative overflow-visible"
          :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          @click="handleThemeToggle"
        >
          <Transition name="icon-swap" mode="out-in">
            <!-- Sun — shown in dark mode -->
            <svg
              v-if="isDark"
              key="sun"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z"
              />
            </svg>
            <!-- Moon — shown in light mode -->
            <svg
              v-else
              key="moon"
              class="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          </Transition>
        </button>

        <!-- GitHub CTA -->
        <a
          href="https://github.com/naybala"
          target="_blank"
          rel="noopener noreferrer"
          class="hidden md:inline-flex items-center gap-1.5 btn-outline text-sm py-2 px-4"
          aria-label="GitHub Profile"
        >
          <svg
            class="w-4 h-4"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
            />
          </svg>
          GitHub
        </a>

        <!-- Mobile hamburger -->
        <button
          class="md:hidden theme-toggle"
          :aria-expanded="mobileOpen"
          aria-label="Toggle mobile menu"
          @click="mobileOpen = !mobileOpen"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              v-if="!mobileOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div
        v-if="mobileOpen"
        class="md:hidden border-b backdrop-blur-xl"
        :style="{
          background: 'var(--color-surface)',
          borderColor: 'var(--color-border)',
        }"
      >
        <ul class="container py-4 flex flex-col gap-1" role="list">
          <li v-for="item in navItems" :key="item.id">
            <button
              class="w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer"
              :class="
                activeSection === item.id
                  ? 'text-primary bg-primary/10'
                  : 'hover:bg-primary/5'
              "
              :style="
                activeSection !== item.id
                  ? { color: 'var(--color-text-muted)' }
                  : {}
              "
              @click="
                scrollTo(item.id);
                mobileOpen = false;
              "
            >
              {{ item.label }}
            </button>
          </li>
        </ul>
      </div>
    </Transition>
  </header>

  <!-- ── Circular Ripple Overlay ── -->
  <Teleport to="body">
    <div
      ref="rippleEl"
      class="theme-ripple"
      :class="{ 'theme-ripple--active': rippleActive }"
      :style="rippleStyle"
      aria-hidden="true"
    />
  </Teleport>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useActiveSection } from "~/composables/useActiveSection";
import { useTheme } from "~/composables/useTheme";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const sectionIds = navItems.map((i) => i.id);
const { activeSection } = useActiveSection(sectionIds);
const { isDark, toggleTheme } = useTheme();

const scrolled = ref(false);
const mobileOpen = ref(false);
const toggleBtn = ref<HTMLElement | null>(null);
const rippleEl = ref<HTMLElement | null>(null);

// Ripple state
const rippleActive = ref(false);
const rippleStyle = ref<Record<string, string>>({
  "--x": "50%",
  "--y": "50px",
  "--ripple-color": "#050816",
});

let rippleTimeout: ReturnType<typeof setTimeout>;

const handleThemeToggle = () => {
  const btn = toggleBtn.value;
  if (!btn) {
    toggleTheme();
    return;
  }

  const rect = btn.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;

  // The ripple color is the DESTINATION theme background
  const nextIsDark = !isDark.value;
  const color = nextIsDark ? "#050816" : "#f0f4f8";

  rippleStyle.value = {
    "--x": `${x}px`,
    "--y": `${y}px`,
    "--ripple-color": color,
  };

  // Phase 1: expand — circle grows from button to cover the entire viewport
  rippleActive.value = true;

  // Phase 2: switch theme once the circle fully covers the page (~450ms)
  rippleTimeout = setTimeout(() => {
    toggleTheme();
    // Phase 3: collapse — shrink the circle away (now the new theme is visible beneath)
    rippleActive.value = false;
  }, 480);
};

const scrollTo = (id: string) => {
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
};

const onScroll = () => {
  scrolled.value = window.scrollY > 50;
};

onMounted(() => {
  window.addEventListener("scroll", onScroll, { passive: true });
});
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  clearTimeout(rippleTimeout);
});
</script>

<style scoped>
/* ── Circular Ripple Wipe ── */
.theme-ripple {
  position: fixed;
  /* Positioned at toggle button center via CSS vars */
  top: var(--y);
  left: var(--x);
  /* Start as a tiny point */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: var(--ripple-color);
  transform: translate(-50%, -50%) scale(0);
  pointer-events: none;
  z-index: 9990;
  /* No transition on default — collapse is instant */
  transition: none;
}

.theme-ripple--active {
  /* Grow to cover entire viewport diagonally */
  transform: translate(-50%, -50%) scale(150);
  transition: transform 0.85s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Icon swap animation */
.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: all 0.22s ease;
}
.icon-swap-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.6);
}
.icon-swap-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.6);
}

/* Mobile menu */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
