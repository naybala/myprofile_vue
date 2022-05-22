<template>
  <div @click="top">
    <a href="#home #home" id="scroll-top">
      <i class="fas fa-chevron-circle-up"></i>
    </a>
  </div>
</template>

<script>
window.onscroll = () => {
  if (window.scrollY > 0) {
    document.querySelector("#scroll-top").classList.add("active");
  } else {
    document.querySelector("#scroll-top").classList.remove("active");
  }
};
export default {
  methods: {
    top() {
      window.scroll({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style>
#scroll-top {
  position: fixed;
  top: -120%;
  right: 0.5rem;
  padding: 0.5rem 1.5rem;
  font-size: 2rem;
  background: var(--first-color);
  color: #fff;
  border-radius: 0.5rem;
  transition: 1s linear;
  z-index: 1000;
}

#scroll-top.active {
  top: calc(100% - 4rem);
}
</style>
