<template>
  <Warning />

  <div class="leftShowCase-2">
    <div class="container-left"></div>
  </div>
  <div class="leftShowCase-3">
    <div class="container-left"></div>
  </div>

  <div class="leftShowCase-5">
    <div class="container-thin-left"></div>
  </div>
  <div class="rightShowCase-0">
    <div class="container-thin"></div>
  </div>

  <div class="rightShowCase-2">
    <div class="container-right"></div>
  </div>
  <div class="rightShowCase-3">
    <div class="container-right"></div>
  </div>

  <section class="home bd-grid" id="home">
    <div data-aos="fade-up">
      <div id="theme-open" @click="themeOpen" class="home__social-icon">
        <i class="fa-brands fa-themeco"></i>
      </div>
      <div class="themes-container">
        <i class=""></i>
        <div id="theme-close" @click="themeClose">
          <i class="fa-solid fa-circle-xmark"></i>
        </div>
        <h3>Switch Theme</h3>
        <div class="theme-toggler" @click="themeToggler">
          <span>light</span>
          <span class="toggler"></span>
          <span>dark</span>
        </div>

        <h3>pick an acent color</h3>

        <div class="theme-colors">
          <div class="color" style="background: #3e6ff4"></div>
          <div class="color" style="background: #0044fd"></div>
          <div class="color" style="background: #27ae60"></div>
          <div class="color" style="background: #00ee63"></div>
          <div class="color" style="background: #0fb9b1"></div>
          <div class="color" style="background: #00fff2"></div>
          <div class="color" style="background: #ceb244"></div>
          <div class="color" style="background: #ffcc00"></div>
          <div class="color" style="background: #ac354c"></div>
          <div class="color" style="background: #ff0033"></div>
          <div class="color" style="background: #e84393"></div>
          <div class="color" style="background: #baee00"></div>
          <div class="color" style="background: #914b6c"></div>
          <div class="color" style="background: #fc07ef"></div>
        </div>
        <h3>version 3.0</h3>
      </div>
      <div class="home__data">
        <h1 class="home__title">
          Hello
          <a
            href="https://earth.google.com/web/"
            target="_blink"
            class="home__title-color"
            ><i
              class="fa-solid fa-earth-americas fa-spin"
              style="--fa-animation-duration: 15s"
            ></i></a
          >, <br />I'am
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

        <p class="mb-3">Email : naybala.153808@gmail.com</p>
        <a
          href="https://drive.google.com/file/d/1dfIKCLs-ecwZm3RG0Zwrse5DI_bXolg_/view?usp=sharing"
          class="button text-decoration-none"
          target="_blink"
          >Download Cv Here</a
        >
      </div>

      <div class="home__social mt-2 ms-3">
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

    <div class="home__img">
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
            href="../assets/svg/programer.gif"
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

<script>
import typical from "vue-typical";
import Warning from "./Warning.vue";
export default {
  components: {
    Warning,
  },
  data: function () {
    return {
      msg: "vue typical",
      home: "< Home >",
      homeEnd: "< Home />",
    };
  },
  components: {
    typical,
    Warning,
  },
  methods: {
    themeOpen() {
      const themesContainer = document.querySelector(".themes-container");
      const themeOpen = document.querySelector("#theme-open");
      themesContainer.classList.add("activeMenu");
      themeOpen.style.opacity = "0";
      const themeColor = document.querySelectorAll(".theme-colors .color");
      themeColor.forEach((color) => {
        color.onclick = () => {
          let background = color.style.background;
          switch (background) {
            case "rgb(62, 111, 244)":
              localStorage.setItem("theme", "1");
              break;
            case "rgb(0, 68, 253)":
              localStorage.setItem("theme", "2");
              break;
            case "rgb(39, 174, 96)":
              localStorage.setItem("theme", "3");
              break;
            case "rgb(0, 238, 99)":
              localStorage.setItem("theme", "4");
              break;

            case "rgb(15, 185, 177)":
              localStorage.setItem("theme", "5");
              break;
            case "rgb(0, 255, 242)":
              localStorage.setItem("theme", "6");
              break;
            case "rgb(206, 178, 68)":
              localStorage.setItem("theme", "7");
              break;
            case "rgb(255, 204, 0)":
              localStorage.setItem("theme", "8");
              break;

            case "rgb(172, 53, 76)":
              localStorage.setItem("theme", "9");
              break;
            case "rgb(255, 0, 51)":
              localStorage.setItem("theme", "10");
              break;
            case "rgb(232, 67, 147)":
              localStorage.setItem("theme", "11");
              break;
            case "rgb(186, 238, 0)":
              localStorage.setItem("theme", "12");
              break;
            case "rgb(145, 75, 108)":
              localStorage.setItem("theme", "13");
              break;
            case "rgb(252, 7, 239)":
              localStorage.setItem("theme", "14");
              break;
            default:
              break;
          }
          document.querySelector(":root").style.setProperty("--first-color", background);
        };
      });
    },
    themeClose() {
      const themesContainer = document.querySelector(".themes-container");
      const themeOpen = document.querySelector("#theme-open");
      themesContainer.classList.remove("activeMenu");
      themeOpen.style.opacity = "1";
    },
    themeToggler() {
      let themeToggler = document.querySelector(".theme-toggler");
      let headDark = document.querySelector("#head");
      let footerDark = document.querySelector("#footer");
      let toastAlert = document.querySelector("#cookie");
      let imageUrl = document.querySelector("#imageUrl");
      let imageUrl1 = document.querySelector("#imageUrl1");

      themeToggler.classList.toggle("activeToggle");
      if (themeToggler.classList.contains("activeToggle")) {
        document.body.classList.add("activeDark");
        headDark.classList.add("ac");
        footerDark.classList.add("acti");
        localStorage.setItem("dark", "1");
        toastAlert.classList.add("dark");
        imageUrl.style.opacity = "0";
        imageUrl1.style.opacity = "1";
      } else {
        document.body.classList.remove("activeDark");
        headDark.classList.remove("ac");
        footerDark.classList.remove("acti");
        localStorage.setItem("dark", "0");
        toastAlert.classList.remove("dark");
        imageUrl.style.opacity = "1";
        imageUrl1.style.opacity = "0";
      }
    },
  },
};
</script>

<style scoped>
/*===== HOME =====*/
.bd-grid {
  max-width: 1024px;
  display: grid;
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

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
}

.home__social-icon {
  width: max-content;
  margin-bottom: var(--mb-2);
  font-size: 1.5rem;
  color: var(--first-color);
  z-index: auto;
}

.home__social-icon:hover {
  color: var(--first-color);
}

.home__img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 260px;
}

.home__blob {
  /* fill : rgb(44, 231, 19); */
  fill: #fffefe;
  background-color: #fffefe;
  box-shadow: 10px 10px 5px 5px rgb(214, 212, 212);
  border-top-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
  border-top-right-radius: 10rem;
  border-bottom-left-radius: 20rem;
}

.home__blob-img {
  width: 520px;
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
}
.container-thin {
  width: 75rem;
  height: 10px;
  box-shadow: 3px 3px 10px rgb(214, 212, 212);
}
.container-right {
  width: 350px;
  height: 80px;
  border-top-left-radius: 5rem;
  border-bottom-left-radius: 5rem;
  box-shadow: 3px 3px 10px rgb(214, 212, 212);
}
.container-left {
  width: 350px;
  height: 80px;
  border-top-right-radius: 5rem;
  border-bottom-right-radius: 5rem;
  box-shadow: 3px 3px 10px rgb(214, 212, 212);
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

/*BUTTONS*/
.button {
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: 0.75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: 0.5rem;
  transition: 0.3s;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}
/* ===== Theme Open =====*/
#theme-open {
  cursor: pointer;
  z-index: 1;
  font-size: 2rem;
  margin-bottom: 0;
}
.themes-container {
  margin-top: 1rem;
  margin-left: 1rem;
  position: fixed;
  top: 100;
  left: -100%;
  background: rgb(143, 143, 150);
  height: 75vh;
  width: 350px;
  z-index: 1000;
  text-align: right;
  padding: 20px;
  border-radius: 1rem;
  transition: all 0.7s ease;
}

.themes-container.activeMenu {
  left: 0;
}

.themes-container #theme-close {
  font-size: 40px;
  cursor: pointer;
  transition: all 0.7s ease;
}

.themes-container h3 {
  color: var(--first-color);
  text-align: center;
  padding: 2px 0;
  margin: 20px 0;
}

.themes-container .theme-toggler {
  display: flex;
  align-items: center;
  justify-content: center;
}

.themes-container .theme-toggler .toggler {
  height: 40px;
  width: 100px;
  border-radius: 50px;
  background: rgb(89, 89, 95);
  position: relative;
  cursor: pointer;
  margin: 0 10px;
}

.themes-container .theme-toggler .toggler::before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: rgb(233, 228, 228);
  transition: 0.2s linear;
}

.themes-container .theme-toggler.activeToggle .toggler::before {
  left: 65px;
}

.themes-container .theme-colors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.themes-container .theme-colors .color {
  border-radius: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.themes-container .theme-colors .color:hover {
  opacity: 0.5;
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
  .theme-colors {
    gap: 5px;
  }

  .theme-colors .color {
    border-radius: 15px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  #theme-open {
    position: absolute;
    top: 100px;
    right: 0px;
    cursor: pointer;
    z-index: 1;
    font-size: 2rem;
  }

  .themes-container {
    position: fixed;
    top: 100;
    left: -100%;
    background: rgb(143, 143, 150);
    height: 70vh;
    width: 250px;
    z-index: 1000;
    text-align: right;
    padding: 20px;
    border-radius: 1rem;
    transition: all 0.7s ease;
  }

  .themes-container.activeMenu {
    left: 0;
  }

  .themes-container #theme-close {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.7s ease;
  }

  .themes-container h3 {
    color: var(--first-color);
    text-align: center;
    padding: 2px 0;
    margin: 10px 0;
  }

  .themes-container .theme-toggler {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .themes-container .theme-toggler .toggler {
    height: 20px;
    width: 70px;
    border-radius: 50px;
    background: rgb(89, 89, 95);
    position: relative;
    cursor: pointer;
    margin: 0 10px;
  }

  .themes-container .theme-toggler .toggler::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: rgb(233, 228, 228);
    transition: 0.2s linear;
  }

  .themes-container .theme-toggler.activeToggle .toggler::before {
    left: 50px;
  }

  .themes-container .theme-colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .themes-container .theme-colors .color {
    border-radius: 5px;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  .themes-container .theme-colors .color:hover {
    opacity: 0.5;
  }
}
/* ===== MEDIA QUERIES=====*/
@media (max-width: 430px) and (min-width: 321px) {
  .home {
    row-gap: 0rem;
    padding: 0rem 0 6rem;
  }
  .theme-colors {
    gap: 5px;
  }

  .theme-colors .color {
    border-radius: 15px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  #theme-open {
    position: absolute;
    top: 100px;
    right: 0px;
    cursor: pointer;
    z-index: 1;
    font-size: 2rem;
  }

  .themes-container {
    position: fixed;
    top: 100;
    left: -100%;
    background: rgb(143, 143, 150);
    height: 70vh;
    width: 250px;
    z-index: 1000;
    text-align: right;
    padding: 20px;
    border-radius: 1rem;
    transition: all 0.7s ease;
  }

  .themes-container.activeMenu {
    left: 0;
  }

  .themes-container #theme-close {
    font-size: 20px;
    cursor: pointer;
    transition: all 0.7s ease;
  }

  .themes-container h3 {
    color: var(--first-color);
    text-align: center;
    padding: 2px 0;
    margin: 10px 0;
  }

  .themes-container .theme-toggler {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .themes-container .theme-toggler .toggler {
    height: 20px;
    width: 70px;
    border-radius: 50px;
    background: rgb(89, 89, 95);
    position: relative;
    cursor: pointer;
    margin: 0 10px;
  }

  .themes-container .theme-toggler .toggler::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    height: 18px;
    width: 18px;
    border-radius: 50%;
    background: rgb(233, 228, 228);
    transition: 0.2s linear;
  }

  .themes-container .theme-toggler.activeToggle .toggler::before {
    left: 50px;
  }

  .themes-container .theme-colors {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
  }

  .themes-container .theme-colors .color {
    border-radius: 5px;
    height: 20px;
    width: 20px;
    cursor: pointer;
  }

  .themes-container .theme-colors .color:hover {
    opacity: 0.5;
  }
}

@media screen and (min-width: 576px) {
  .home__social {
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
  }
  .home__social-icon {
    margin-bottom: 0;
    margin-right: var(--mb-4);
    transition: 0.3s;
  }
  .home__social-icon:hover {
    transform: translateY(-6px);
    box-shadow: 2px 2px 10px rgb(223, 219, 219);
    border-radius: 2.5rem;
  }
  .home__img {
    width: 300px;
    bottom: 25%;
  }
}

@media screen and (min-width: 992px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
  .home__img {
    width: 450px;
  }
}
</style>
