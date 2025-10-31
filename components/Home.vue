<template>
  <div id="home">
    <Warning />
    <LeftAnimation />
    <div class="absolute left-[-5rem] top-[22.5rem] rotate-[-40deg]">
      <div
        class="w-[350px] h-20 rounded-tr-[5rem] rounded-br-[5rem] shadow-lg"
      ></div>
    </div>
    <div class="absolute left-[-5rem] top-[32.5rem] rotate-[-40deg]">
      <div
        class="w-[350px] h-20 rounded-tr-[5rem] rounded-br-[5rem] shadow-lg"
      ></div>
    </div>

    <div class="absolute left-[-13rem] bottom-0 rotate-[-40deg]">
      <div class="w-[95rem] h-2.5 shadow-lg"></div>
    </div>
    <div class="absolute right-[-28rem] top-0 rotate-[-40deg] -z-10">
      <div class="w-[75rem] h-2.5 shadow-lg"></div>
    </div>

    <div class="absolute right-[-5rem] top-[23.5rem] rotate-[-40deg]">
      <div
        class="w-[350px] h-20 rounded-tl-[5rem] rounded-bl-[5rem] shadow-lg"
      ></div>
    </div>
    <div class="absolute right-[-5rem] top-[33.5rem] rotate-[-40deg]">
      <div
        class="w-[350px] h-20 rounded-tl-[5rem] rounded-bl-[5rem] shadow-lg"
      ></div>
    </div>

    <section
      class="relative grid gap-12 px-4 py-20 md:py-24 max-w-5xl mx-auto"
      id="home"
    >
      <div data-aos="fade-up">
        <div
          id="theme-open"
          @click="themeOpen"
          class="w-max mb-4 text-2xl text-blue-600 cursor-pointer z-auto"
        >
          <i class="fa-solid fa-palette"></i>
        </div>
        <div
          class="mt-4 ml-4 fixed top-24 left-[-100%] bg-gray-400 h-3/4 w-[350px] z-50 text-right p-5 rounded-lg transition-all duration-700 ease-in-out"
        >
          <i class=""></i>
          <div
            id="theme-close"
            @click="themeClose"
            class="text-4xl cursor-pointer transition-all duration-700 ease-in-out"
          >
            <i class="fa-solid fa-circle-xmark"></i>
          </div>
          <h3 class="text-blue-600 text-center py-0.5 my-5">Switch Theme</h3>
          <div class="flex items-center justify-center" @click="themeToggler">
            <span>light</span>
            <span
              class="h-10 w-24 rounded-full bg-gray-600 relative cursor-pointer mx-2.5"
            ></span>
            <span>dark</span>
          </div>

          <h3 class="text-blue-600 text-center py-0.5 my-5">
            pick an acent color
          </h3>

          <div class="flex flex-wrap justify-center gap-4">
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #3e6ff4"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #0044fd"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #27ae60"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #00ee63"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #0fb9b1"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #00fff2"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #ceb244"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #ffcc00"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #ac354c"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #ff0033"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #e84393"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #baee00"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #914b6c"
            ></div>
            <div
              class="rounded-md h-12 w-12 cursor-pointer"
              style="background: #fc07ef"
            ></div>
          </div>
          <h3 class="text-blue-600 text-center py-0.5 my-5">version 3.0</h3>
        </div>
        <div class="self-center">
          <h1 class="text-4xl md:text-6xl mb-10">
            Hello
            <a
              href="https://earth.google.com/web/"
              target="_blink"
              class="text-blue-600"
              ><i
                class="fa-solid fa-earth-americas fa-spin"
                style="--fa-animation-duration: 15s"
              ></i></a
            >, <br />I'm
            <span class="text-blue-600"
              ><typical
                class="inline"
                :steps="[``, 500, `Nay Ba La`, 5000]"
                :loop="Infinity"
              ></typical>
            </span>
            <br />
            Web Developer
          </h1>

          <p class="mb-3">Email : naybala.personal@gmail.com</p>
          <a
            href="https://drive.google.com/file/d/1fmzAnanAbQiwhQyDPx8NT9GtUKCdUwOv/view?usp=sharing"
            class="inline-block bg-blue-600 text-white py-3 px-10 font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg no-underline mb-2"
            target="_blink"
            >Download My Resume</a
          >
          <br />
          <a
            href="https://myresumenaybala.netlify.app/"
            class="inline-block bg-blue-600 text-white py-3 px-10 font-semibold rounded-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg no-underline mb-2"
            target="_blink"
            >Check My Resume</a
          >
        </div>

        <div class="flex flex-col mt-2 ml-3 sm:flex-row sm:self-end sm:pb-10">
          <a
            href="https://www.facebook.com/profile.php?id=100076412994170"
            class="w-max mb-4 text-2xl text-blue-600 z-auto sm:mr-8 sm:mb-0 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:rounded-full"
            target="_blink"
            ><i class="fa-brands fa-facebook"></i
          ></a>
          <a
            href="https://www.instagram.com/naybala190510"
            class="w-max mb-4 text-2xl text-blue-600 z-auto sm:mr-8 sm:mb-0 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:rounded-full icon"
            target="_blink"
            ><i class="fa-brands fa-instagram-square"></i
          ></a>
          <a
            href="https://github.com/naybala"
            class="w-max mb-4 text-2xl text-blue-600 z-auto sm:mr-8 sm:mb-0 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:rounded-full"
            ><i class="fa-brands fa-github" target="_blink"></i
          ></a>

          <a
            href="tel:+959763684400"
            class="w-max mb-4 text-2xl text-blue-600 z-auto sm:mr-8 sm:mb-0 transition-transform duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:rounded-full"
            ><i class="fa-solid fa-phone"></i
          ></a>
        </div>
      </div>

      <div
        class="absolute right-0 bottom-0 w-[260px] sm:w-[300px] sm:bottom-1/4 lg:w-[450px]"
      >
        <svg
          class="fill-white bg-white shadow-lg rounded-tl-[5rem] rounded-br-[5rem] rounded-tr-[10rem] rounded-bl-[20rem]"
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
              class="w-[560px]"
              id="imageUrl"
              x="-23"
              y="-10"
              href="../assets/svg/myRealPic.jpg"
            />
            <image
              class="w-[560px] transition-opacity duration-300 opacity-0"
              id="imageUrl1"
              x="-23"
              y="-10"
              href="../assets/svg/sleepy.gif"
            />
          </g>
        </svg>
      </div>
    </section>
  </div>
</template>

<script>
import typical from "vue-typical";
import Warning from "./Warning.vue";
import LeftAnimation from "./LeftAnimation.vue";
export default {
  components: {
    typical,
    Warning,
    LeftAnimation,
  },
  data: function () {
    return {
      msg: "vue typical",
      home: "< Home >",
      homeEnd: "< Home />",
    };
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
          document
            .querySelector(":root")
            .style.setProperty("--first-color", background);
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
