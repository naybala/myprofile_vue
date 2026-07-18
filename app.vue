<template>
  <div class="bg-background min-h-screen text-white font-sans">
    <!-- Custom Cursor -->
    <AppCursor />
    <!-- Scroll Progress Bar -->
    <AppScrollProgress />
    <!-- Code Background -->
    <AppCodeBackground />
    <!-- Noise overlay -->
    <div class="noise-overlay" aria-hidden="true" />
    <!-- Navigation -->
    <TheNavbar />
    <!-- Main Content -->
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>
    <!-- Footer -->
    <TheFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: 'dark',
  },
})
</script>
