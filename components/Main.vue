<template>
  <div v-if="loading">
    <Loading />
  </div>
  <div v-if="!loading">
    <Header />
    <Home />
    <About />
    <Skill />
    <Project />
    <!-- <CurrentlyWork /> -->
    <Contact />
    <Footer />
    <Cookie />
    <Track />
    <ScrollTop />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const loading = ref(true);

onMounted(() => {
  setTimeout(() => {
    loading.value = false;
  }, 3000);
});
</script>
