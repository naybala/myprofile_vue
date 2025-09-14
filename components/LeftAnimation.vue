<template>
  <div class="left-container" id="container-animation"></div>
</template>

<script>
export default {};
</script>

<style scoped>
.left-container {
  width: 20px;
  height: 20px;
  background-color: var(--first-color);
  position: absolute;
  top: 11.1rem;
  right: 24rem;
  border-radius: 2rem;
}

#container-animation {
  animation: run 3s infinite;
}

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

@media (max-width: 1500px) {
  .left-container {
    display: none;
  }
}
</style>
