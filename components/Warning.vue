<template>
  <div
    class="h-10 bg-gray-800 text-sm shadow-md md:h-12 md:text-xs hidden sm:block overflow-hidden mt-10"
  >
    <div class="container mx-auto relative top-2.5 md:top-5">
      <p
        class="text-white animate-run ml-18 relative inline-block whitespace-nowrap"
      >
        <i class="fa-solid fa-person-running"></i>
        <span class="font-bold text-indigo-600">Warning : </span> Don't forget
        to operate
        <span class="font-bold text-indigo-600"> Theme </span> button! This
        button includes dark mode and changing accent color options. If you have
        any questions, contact me.
        <i class="fa-solid fa-person-running"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes run {
  0% {
    transform: translateX(-140%);
  }
  50% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(140%);
  }
}

.animate-run {
  font-size: 1rem;
  position: relative;
  animation: run 25s linear infinite;
}
</style>
