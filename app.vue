<template>
  <div class="min-h-screen">
    <!-- Preloader -->
    <AppLoader />
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
// useDark from useTheme sets the `dark` class on <html> automatically
useTheme()
</script>
