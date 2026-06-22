<template>
  <LeftAnimation />
  <div class="leftShowCase-2 animate-slide-left delay-100">
    <div class="container-left"></div>
  </div>
  <div class="leftShowCase-3 animate-slide-left delay-200">
    <div class="container-left"></div>
  </div>

  <div class="leftShowCase-5 animate-slide-left delay-300">
    <div class="container-thin-left"></div>
  </div>
  <div class="rightShowCase-0 animate-slide-right delay-100">
    <div class="container-thin"></div>
  </div>

  <div class="rightShowCase-2 animate-slide-right delay-200">
    <div class="container-right"></div>
  </div>
  <div class="rightShowCase-3 animate-slide-right delay-300">
    <div class="container-right"></div>
  </div>
  <br /><br />
  <section class="home bd-grid" id="home">
    <div data-aos="fade-up">
      <div
        id="theme-open"
        @click="isThemeActive = true"
        class="home__social-icon"
        :style="{ opacity: isThemeActive ? '0' : '1' }"
      >
        <i class="fa-solid fa-palette"></i>
      </div>
      <div class="themes-container" :class="{ activeMenu: isThemeActive }">
        <div id="theme-close" @click="isThemeActive = false">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <h3>Switch Theme</h3>
        <div
          class="theme-toggler"
          :class="{ activeToggle: isDark }"
          @click="themeToggler"
        >
          <span>Light</span>
          <span class="toggler"></span>
          <span>Dark</span>
        </div>

        <h3>Pick an accent color</h3>

        <div class="theme-colors">
          <div
            v-for="c in colors"
            :key="c.id"
            class="color"
            :style="{ background: c.value }"
            @click="setAccentColor(c)"
          ></div>
        </div>
        <span class="version-text">Version 3.0</span>
      </div>
      <div class="home__data">
        <h1 class="home__title animate-fade-up">
          Hello
          <a
            href="https://earth.google.com/web/"
            target="_blink"
            class="home__title-color"
            ><i
              class="fa-solid fa-earth-americas fa-spin"
              style="--fa-animation-duration: 15s"
            ></i></a
          >, <br />I'm
          <span class="home__title-color"
            ><typical
              class="typicalWrapper d-inline"
              :steps="[``, 500, `Nay Ba La`, 5000]"
              :loop="Infinity"
            ></typical>
          </span>
          <br />
          Web Developer
        </h1>

        <p class="mb-3 animate-fade-up delay-100">
          Email : naybala.personal@gmail.com
        </p>
        <a
          href="https://drive.google.com/file/d/1WliobQmUhoYBZr7Qij5dD1oSQe6vIPQi/view?usp=sharing"
          class="button text-decoration-none mb-2 animate-fade-up delay-200"
          target="_blink"
          >Download My Resume</a
        >
        <br />
      </div>

      <div class="home__social mt-2 ms-3 animate-fade-up delay-300">
        <a
          href="https://www.facebook.com/profile.php?id=100076412994170"
          class="home__social-icon"
          target="_blink"
          ><i class="fa-brands fa-facebook"></i
        ></a>
        <a
          href="https://www.instagram.com/naybala190510"
          class="home__social-icon icon"
          target="_blink"
          ><i class="fa-brands fa-instagram-square"></i
        ></a>
        <a href="https://github.com/naybala" class="home__social-icon"
          ><i class="fa-brands fa-github" target="_blink"></i
        ></a>

        <a href="tel:+959763684400" class="home__social-icon"
          ><i class="fa-solid fa-phone"></i
        ></a>
      </div>
    </div>

    <div class="home__img animate-scale-in delay-200">
      <svg
        class="home__blob"
        viewBox="0 0 479 467"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <mask id="mask0" mask-type="alpha">
          <path
            d="M9.19024 145.964C34.0253 76.5814 114.865
                                54.7299 184.111 29.4823C245.804 6.98884 311.86
                                -14.9503 370.735 14.143C431.207 44.026 467.948
                                107.508 477.191 174.311C485.897 237.229 454.931
                                294.377 416.506 344.954C373.74 401.245 326.068
                                462.801 255.442 466.189C179.416 469.835 111.552
                                422.137 65.1576 361.805C17.4835 299.81 -17.1617
                                219.583 9.19024 145.964Z"
          />
        </mask>
        <g mask="url(#mask0)">
          <path
            d="M9.19024 145.964C34.0253 76.5814
                                    114.865 54.7299 184.111 29.4823C245.804
                                    6.98884 311.86 -14.9503 370.735
                                    14.143C431.207 44.026 467.948 107.508
                                    477.191 174.311C485.897 237.229 454.931
                                    294.377 416.506 344.954C373.74 401.245
                                    326.068 462.801 255.442 466.189C179.416
                                    469.835 111.552 422.137 65.1576
                                    361.805C17.4835 299.81 -17.1617 219.583
                                    9.19024 145.964Z"
          />

          <image
            class="home__blob-img"
            id="imageUrl"
            x="-23"
            y="-10"
            href="../assets/svg/myRealPic.jpg"
          />
          <image
            class="home__blob-img"
            id="imageUrl1"
            x="-23"
            y="-10"
            href="../assets/svg/sleepy.gif"
          />
        </g>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import typical from "vue-typical";

const isThemeActive = ref(false);
const isDark = ref(false);

const colors = [
  { id: "1", value: "rgb(62, 111, 244)" },
  { id: "2", value: "rgb(0, 68, 253)" },
  { id: "3", value: "rgb(39, 174, 96)" },
  { id: "4", value: "rgb(0, 238, 99)" },
  { id: "5", value: "rgb(15, 185, 177)" },
  { id: "6", value: "rgb(0, 255, 242)" },
  { id: "7", value: "rgb(206, 178, 68)" },
  { id: "8", value: "rgb(255, 204, 0)" },
  { id: "9", value: "rgb(172, 53, 76)" },
  { id: "10", value: "rgb(255, 0, 51)" },
  { id: "11", value: "rgb(232, 67, 147)" },
  { id: "12", value: "rgb(186, 238, 0)" },
  { id: "13", value: "rgb(145, 75, 108)" },
  { id: "14", value: "rgb(252, 7, 239)" },
];

const setAccentColor = (c) => {
  localStorage.setItem("theme", c.id);
  document.documentElement.style.setProperty("--first-color", c.value);
};

const themeToggler = () => {
  let headDark = document.querySelector("#head");
  let footerDark = document.querySelector("#footer");
  let toastAlert = document.querySelector("#cookie");
  let imageUrl = document.querySelector("#imageUrl");
  let imageUrl1 = document.querySelector("#imageUrl1");

  isDark.value = !isDark.value;
  if (isDark.value) {
    document.body.classList.add("activeDark");
    if (headDark) headDark.classList.add("ac");
    if (footerDark) footerDark.classList.add("acti");
    localStorage.setItem("dark", "1");
    if (toastAlert) toastAlert.classList.add("dark");
    if (imageUrl) imageUrl.style.opacity = "0";
    if (imageUrl1) imageUrl1.style.opacity = "1";
  } else {
    document.body.classList.remove("activeDark");
    if (headDark) headDark.classList.remove("ac");
    if (footerDark) footerDark.classList.remove("acti");
    localStorage.setItem("dark", "0");
    if (toastAlert) toastAlert.classList.remove("dark");
    if (imageUrl) imageUrl.style.opacity = "1";
    if (imageUrl1) imageUrl1.style.opacity = "0";
  }
};

onMounted(() => {
  isDark.value =
    document.body.classList.contains("activeDark") ||
    localStorage.getItem("dark") === "1";
});
</script>

<style scoped>
/*===== HOME =====*/
.home {
  position: relative;
  row-gap: 3rem;
  padding: 6rem 0 5rem;
}

.home__data {
  align-self: center;
}

.home__title {
  font-size: var(--big-font-size);
  margin-bottom: var(--mb-5);
}

.home__title-color {
  color: var(--first-color);
}

.home__social {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.home__social-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  font-size: 1.5rem;
  color: var(--first-color);
  z-index: auto;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  cursor: pointer;
}

.home__social-icon:hover {
  color: #fff;
  background-color: var(--first-color);
  transform: translateY(-4px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.home__img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 260px;
}

.home__blob {
  fill: #fffefe;
  background-color: #fffefe;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  border-top-right-radius: 10rem;
  border-bottom-left-radius: 20rem;
  transition:
    background-color 0.3s ease,
    fill 0.3s ease,
    box-shadow 0.3s ease;
}

.activeDark .home__blob {
  fill: #1b2330;
  background-color: #1b2330;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
}

.home__blob-img {
  width: 560px;
}

/*Left And Right Decoration */
.leftShowCase-2 {
  position: absolute;
  left: -5rem;
  top: 22.5rem;
  transform: rotate(-40deg);
}
.leftShowCase-3 {
  position: absolute;
  left: -5rem;
  top: 32.5rem;
  transform: rotate(-40deg);
}

.leftShowCase-5 {
  position: absolute;
  left: -13rem;
  bottom: 0rem;
  transform: rotate(-40deg);
}

.rightShowCase-0 {
  position: absolute;
  right: -28rem;
  top: 0rem;
  transform: rotate(-40deg);
  z-index: -1;
}

.rightShowCase-2 {
  position: absolute;
  right: -5rem;
  top: 23.5rem;
  transform: rotate(-40deg);
}
.rightShowCase-3 {
  position: absolute;
  right: -5rem;
  top: 33.5rem;
  transform: rotate(-40deg);
}

.container-thin-left {
  width: 95rem;
  height: 10px;
  box-shadow: 3px 3px 10px rgb(214, 212, 212);
  transition: box-shadow 0.3s ease;
}
.container-thin {
  width: 75rem;
  height: 10px;
  box-shadow: 3px 3px 10px rgb(214, 212, 212);
  transition: box-shadow 0.3s ease;
}
.container-right {
  width: 350px;
  height: 80px;
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
  box-shadow: 3px 3px 10px rgb(214, 212, 212);
  transition: box-shadow 0.3s ease;
}
.container-left {
  width: 350px;
  height: 80px;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  box-shadow: 3px 3px 10px rgb(214, 212, 212);
  transition: box-shadow 0.3s ease;
}

.activeDark .container-thin-left,
.activeDark .container-thin,
.activeDark .container-right,
.activeDark .container-left {
  box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.4);
}

#imageUrl1 {
  transition: 0.3s;
  opacity: 0;
}
@media (max-width: 1500px) {
  .container-thin,
  .container-thin-left,
  .container-left,
  .container-right {
    display: none;
  }
}

/* ===== Theme Open ===== */
#theme-open {
  position: fixed;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  background-color: var(--first-color);
  color: #fff;
  width: 45px;
  height: 45px;
  border-radius: 0 8px 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  z-index: 1001;
  transition: all 0.3s ease;
  font-size: 1.5rem;
}

#theme-open:hover {
  width: 55px;
}

.themes-container {
  position: fixed;
  top: 0;
  left: -320px;
  width: 300px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  box-shadow: 5px 0 25px rgba(0, 0, 0, 0.15);
  z-index: 1002;
  padding: 3rem 1.5rem 1.5rem 1.5rem;
  transition: all 0.5s cubic-bezier(0.77, 0, 0.175, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.activeDark .themes-container {
  background: rgba(30, 41, 59, 0.95);
  box-shadow: 5px 0 25px rgba(0, 0, 0, 0.35);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.themes-container.activeMenu {
  left: 0;
}

.themes-container #theme-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: var(--first-color);
  transition: transform 0.3s ease;
}

.themes-container #theme-close:hover {
  transform: rotate(90deg);
}

.themes-container h3 {
  font-size: 1.1rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: var(--first-color);
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
  width: 100%;
}

.themes-container .theme-toggler {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-weight: 500;
  color: #333;
  cursor: pointer;
  user-select: none;
}

.activeDark .themes-container .theme-toggler {
  color: #fff;
}

.themes-container .theme-toggler .toggler {
  height: 26px;
  width: 55px;
  border-radius: 50px;
  background: #cbd5e1;
  position: relative;
  transition: background 0.3s ease;
}

.activeDark .themes-container .theme-toggler .toggler {
  background: #475569;
}

.themes-container .theme-toggler .toggler::before {
  content: "";
  position: absolute;
  top: 3px;
  left: 3px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.themes-container .theme-toggler.activeToggle .toggler::before {
  left: 32px;
}

.themes-container .theme-colors {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  justify-items: center;
  width: 100%;
  padding: 0.5rem 0;
}

.themes-container .theme-colors .color {
  border-radius: 50%;
  height: 36px;
  width: 36px;
  cursor: pointer;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.2s ease;
}

.themes-container .theme-colors .color:hover {
  transform: scale(1.15);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
}

.themes-container .version-text {
  margin-top: auto;
  font-size: 0.8rem;
  color: #64748b;
  letter-spacing: 0.5px;
}

@media (max-width: 320px) and (min-width: 300px) {
  .home {
    row-gap: 0rem;
    padding: 0rem 0 6rem;
  }
  [data-aos] {
    pointer-events: auto !important;
  }
  html:not(.no-js) [data-aos^="fade"][data-aos^="fade"] {
    opacity: 1 !important;
  }

  html:not(.no-js) [data-aos="fade-up"] {
    transform: none !important;
  }

  .home__img {
    width: 200px;
  }
}

@media (max-width: 430px) and (min-width: 321px) {
  .home {
    row-gap: 0rem;
    padding: 0rem 0 6rem;
  }
}

@media screen and (min-width: 576px) {
  .home__social {
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
    gap: 0;
  }
  .home__social-icon {
    margin-bottom: 0;
    margin-right: var(--mb-4);
  }
  .home__img {
    width: 300px;
    bottom: 25%;
  }
}

@media screen and (min-width: 992px) {
  .home__img {
    width: 450px;
  }
}

/* Entrance Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInScale {
  from {
    opacity: 0;
    transform: scale(0.92);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-50px) rotate(-40deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(-40deg);
  }
}

@keyframes slideInRight {
  from {
    opacity: 0;
    transform: translateX(50px) rotate(-40deg);
  }
  to {
    opacity: 1;
    transform: translateX(0) rotate(-40deg);
  }
}

.animate-fade-up {
  opacity: 0;
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-scale-in {
  opacity: 0;
  animation: fadeInScale 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-left {
  opacity: 0;
  animation: slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.animate-slide-right {
  opacity: 0;
  animation: slideInRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

.delay-100 {
  animation-delay: 100ms;
}

.delay-200 {
  animation-delay: 200ms;
}

.delay-300 {
  animation-delay: 300ms;
}

.delay-400 {
  animation-delay: 400ms;
}
</style>
