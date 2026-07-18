<template>
  <Transition name="loader-slide">
    <div
      v-if="isLoading"
      class="fixed inset-0 z-[999999] flex flex-col items-center justify-center"
      style="background-color: var(--color-bg)"
    >
      <div
        class="relative flex flex-col items-center gap-8 w-full max-w-[280px] px-6"
      >
        <!-- Logo -->
        <div
          class="text-xl md:text-2xl font-black font-mono tracking-wider gradient-text opacity-0 animate-fade-in"
        >
          &lt; Nay Ba La /&gt;
        </div>

        <!-- Progress Line -->
        <div
          class="w-full h-1 rounded-full overflow-hidden"
          style="background: var(--color-surface-2)"
        >
          <div
            class="h-full bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_auto] animate-progress-fill"
          />
        </div>

        <!-- Text -->
        <p
          class="text-[10px] font-mono tracking-[0.2em] uppercase opacity-0 animate-fade-in-delayed"
          style="color: var(--color-text-muted)"
        >
          Preparing Experience
        </p>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const isLoading = ref(true);

onMounted(() => {
  // Add a slight delay to allow the browser to paint and GSAP to prepare layouts
  setTimeout(() => {
    isLoading.value = false;
    document.body.classList.remove("overflow-hidden");
  }, 1800);
});

// Prevent scrolling while loading
if (import.meta.client) {
  document.body.classList.add("overflow-hidden");
}
</script>

<style scoped>
.animate-fade-in {
  animation: fadeIn 0.5s ease forwards 0.2s;
}
.animate-fade-in-delayed {
  animation: fadeIn 0.5s ease forwards 0.6s;
}
.animate-progress-fill {
  width: 0%;
  animation: progressFill 1.6s cubic-bezier(0.76, 0, 0.24, 1) forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes progressFill {
  0% {
    width: 0%;
  }
  50% {
    width: 70%;
  }
  100% {
    width: 100%;
  }
}

.loader-slide-enter-active,
.loader-slide-leave-active {
  transition:
    opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1),
    transform 0.8s cubic-bezier(0.65, 0, 0.35, 1);
}
.loader-slide-leave-to {
  opacity: 0;
  transform: translateY(-100%);
  pointer-events: none;
}
</style>
