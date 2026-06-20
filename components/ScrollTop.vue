<template>
  <div @click="top">
    <a href="#home #home" id="scroll-top">
      <i class="fas fa-chevron-circle-up"></i>
    </a>
  </div>
</template>

<script>
export default {
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const el = document.querySelector("#scroll-top");
      if (!el) return;
      if (window.scrollY > 380) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    },
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

@media (max-width: 319px) and (min-width: 300px) {
  #scroll-top {
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
  }
  #scroll-top.active {
    top: calc(100% - 7rem);
  }
}
@media (max-width: 550px) and (min-width: 320px) {
  #scroll-top {
    font-size: 1rem;
    padding: 0.5rem 0.5rem;
  }
  #scroll-top.active {
    top: calc(100% - 7rem);
  }
}
</style>
