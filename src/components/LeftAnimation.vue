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
  background-color: aquamarine;
  position: absolute;
  top: 7rem;
  left: 10rem;
  border-radius: 2rem;
}
#container-animation {
  animation: run 3s infinite;
}

@keyframes run {
  0% {
    top: 7rem;
  }
  25% {
    top: 16.5rem;
  }
  50% {
    left: 10rem;
    transform: rotate(45deg);
  }
  75% {
    left: 0rem;
    top: 10rem;
    transform: rotate(45deg);
  }
  100% {
    top: 7rem;
    transform: rotate(45deg);
  }
}
</style>
