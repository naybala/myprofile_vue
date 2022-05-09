<template>
  <div class="container-fluid nav-top-bg">
    <div class="container nav-top-bg-text">
      <p class="text-white" id="text-animation">
        <i class="fa-solid fa-person-running"></i>
        <span class="fw-bold">Warning : </span> Don't forget to operate
        <span class="fw-bold">PRO</span> button!This button was included dark mode and
        changing ascent color options. If you have any question contact me.
        <i class="fa-solid fa-person-running"></i>
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#text-animation {
  animation: reverse infinite;
  animation-name: run;
  animation-duration: 25s;
}
p {
  margin-left: 4.5rem;
}

@keyframes run {
  0% {
    left: -100%;
    transform: translateX(-140%);
  }
  40% {
    left: 0%;
    transform: none;
  }
  60% {
    left: 0%;
    transform: none;
  }
  100% {
    left: 100%;
    transform: translateX(140%);
  }
}

.nav-top-bg {
  height: 40px;
  background-color: #242f3f;
  font-size: 15px;
  box-shadow: 0 3px 5px rgba(109, 112, 114, 0.15);
}

.nav-top-bg span {
  color: var(--first-color);
}
.nav-top-bg-text {
  position: relative;
  top: 10px;
}

/* Tablet View */
@media (min-width: 768px) and (max-width: 950px) {
  .nav-top-bg {
    height: 50px;
    font-size: 10px;
  }
  p {
    margin-left: 0rem;
  }
  .nav-top-bg-text {
    top: 15px;
  }
}

/* Moblie View */
@media (min-width: 290px) and (max-width: 500px) {
  .nav-top-bg {
    display: none;
  }
}
</style>
