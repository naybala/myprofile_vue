<template>
  <!--===== HEADER =====-->
  <div class="w-full fixed top-0 left-0 z-50 bg-white shadow-md" id="head">
    <nav
      class="h-12 flex justify-between items-center font-semibold max-w-5xl mx-auto px-4 overflow-x-hidden"
    >
      <!-- Left: Name & Phone -->
      <div class="flex flex-col text-sm">
        <a href="#" class="text-blue-600 no-underline">{{ myName }}</a>
        <a href="tel:+959763684400" class="text-blue-600 no-underline">
          <i class="fa-solid fa-phone"></i> {{ phone }}
        </a>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:block" id="nav-menu" ref="navMenuRef">
        <ul class="flex items-center gap-8">
          <li>
            <a
              href="#home"
              @click="homeHeader"
              class="nav__link text-blue-600 no-underline relative"
              >{{ home }}</a
            >
          </li>
          <li>
            <a
              href="#about"
              class="nav__link text-blue-600 no-underline relative"
              >{{ about }}</a
            >
          </li>
          <li>
            <a
              href="#skills"
              class="nav__link text-blue-600 no-underline relative"
              >{{ skill }}</a
            >
          </li>
          <li>
            <a
              href="#project"
              class="nav__link text-blue-600 no-underline relative"
              >{{ project }}</a
            >
          </li>
          <li>
            <a
              href="#currentlyWork"
              class="nav__link text-blue-600 no-underline relative"
              >{{ currentlyWork }}</a
            >
          </li>
          <li>
            <a
              href="#contact"
              class="nav__link text-blue-600 no-underline relative"
              >{{ contact }}</a
            >
          </li>
        </ul>
      </div>

      <!-- Mobile Nav Toggle -->
      <div
        @click="navMenuShow"
        class="cursor-pointer text-blue-600 text-2xl md:hidden"
        id="nav-toggle"
      >
        <i class="fa-brands fa-elementor"></i>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// ✅ Reactive data
const myName = ref("Nay Ba La");
const phone = ref("+95 9 763684400");
const home = ref("Home");
const about = ref("About");
const skill = ref("Skills");
const project = ref("Projects");
const currentlyWork = ref("Currently Work");
const contact = ref("Contact Me");

// ✅ Refs
const navMenuRef = ref(null);

// ✅ Smooth scroll to top
function homeHeader() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

// ✅ Toggle mobile menu
function navMenuShow() {
  const nav = navMenuRef.value;
  if (nav) {
    nav.classList.toggle("show");
  }

  const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (nav) nav.classList.remove("show");
    });
  });
}

// ✅ Scroll Active Section Highlight
function scrollActive() {
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.pageYOffset;

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 50;
    const sectionId = section.getAttribute("id");

    const navLink = document.querySelector(`.nav__link[href*="${sectionId}"]`);
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLink?.classList.add("active");
    } else {
      navLink?.classList.remove("active");
    }
  });
}

// ✅ Lifecycle Hooks
onMounted(() => {
  window.addEventListener("scroll", scrollActive);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollActive);
});
</script>

<style scoped>
/* Active underline for nav item */
.active::after {
  position: absolute;
  content: "";
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 1.6rem;
  background-color: var(--first-color);
  transform: translateY(0px);
  transition: 0.3s;
}

/* Mobile menu toggle */
.show {
  right: 0;
}

/* Prevent overflow */
nav,
ul {
  overflow-x: hidden;
}
</style>

<!-- GLOBAL STYLE: Add this to your main CSS (e.g., main.css or App.vue without 'scoped') -->
<style>
body {
  overflow-x: hidden;
}
</style>
