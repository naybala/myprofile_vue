<template>
  <div @click="top">
    <a href="#home #home" id="scroll-top" class="fixed top-[-120%] right-2 p-2 text-4xl bg-indigo-600 text-white rounded-lg transition-all duration-1000 linear z-[1000]">
      <i class="fas fa-chevron-circle-up"></i>
    </a>
  </div>
</template>

<script>
if (process.client) {
  window.onscroll = () => {
    // console.log(window.scrollY);
    if (window.scrollY > 380) {
      document.querySelector("#scroll-top").classList.add("active");
    } else {
      document.querySelector("#scroll-top").classList.remove("active");
    }
  };
}
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
