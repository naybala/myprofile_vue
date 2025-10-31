<template>
  <div class="w-5 h-5 bg-indigo-600 absolute top-[11.1rem] right-[24rem] rounded-full animate-run hidden md:block"></div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes run {
  0% {
    top: 11.1rem;
    right: 24rem;
  }
  25% {
    top: 28.6rem;
    right: 30.75rem;
  }
  50% {
    top: 32.6rem;
    right: 53.5rem;
  }
  75% {
    top: 17.6rem;
    right: 43.5rem;
  }
  100% {
    top: 11.1rem;
    right: 24rem;
  }
}

.animate-run {
  animation: run 3s infinite;
}
</style>
