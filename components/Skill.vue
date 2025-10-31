<template>
  <section class="py-12 md:py-16" id="skills">
    <h2
      class="relative text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-10"
    >
      Skills
      <span
        class="absolute left-1/2 -translate-x-1/2 block w-16 md:w-20 h-[3px] bg-indigo-600 mt-8"
      ></span>
    </h2>
    <div class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center text-center md:text-left">
      <div>
        <h2 class="mb-4 text-xl font-semibold text-gray-800">{{ title }}</h2>
        <p class="text-gray-700 leading-relaxed"></p>
        <div data-aos="fade-right">
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fa-brands fa-html5 text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ html }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fa-brands fa-css3 text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ css }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fab fa-bootstrap text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ bootstrap }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fa-brands fa-js-square text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ js }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fa-brands fa-vuejs text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ vue }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fab fa-php text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ php }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fab fa-laravel text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ laravel }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
          <div class="flex justify-between items-center relative font-semibold p-2 mb-4 rounded-lg shadow-lg cursor-pointer transition-transform duration-300 hover:-translate-y-3">
            <div class="flex items-center">
              <i class="fas fa-database text-3xl mr-4 text-indigo-600"></i>
              <span class="text-base">{{ mysql }}</span>
            </div>
            <div class="absolute left-0 bottom-0 bg-indigo-600 h-1 rounded-lg w-full"></div>
          </div>
        </div>
        <br />

        <div class="">
          <img
            data-aos="fade-right"
            src="../assets/images/myCerti.jpg"
            alt=""
            class="rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full"
            id="galleryCerti"
            @click="imageView('galleryCerti')"
          />
        </div>
        <br />
      </div>

      <div>
        <br /><br /><br />

        <img
          data-aos="fade-left"
          src="../assets/images/myView.jpg"
          alt=""
          class="rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full"
          id="gallerySix"
          @click="imageView('gallerySix')"
        />
        <br /><br /><br />
        <br /><br /><br />
       

        <div>
          <img
            data-aos="fade-left"
            src="../assets/images/myCerti-2.jpg"
            alt=""
            class="rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg w-full"
            id="gallerySeven"
            @click="imageView('gallerySeven')"
          />
          <div class="fixed inset-0 bg-black/90 flex justify-center items-center transform -translate-y-full transition-transform duration-250 p-12 z-[2000] overflow-x-hidden" id="popup">
            <img src="" alt="" id="selectedImage" class="max-h-full rounded-xl max-w-full" />
          </div>
        </div>
        <br /><br />
       
        <div class="fixed inset-0 bg-black/90 flex justify-center items-center transform -translate-y-full transition-transform duration-250 p-12 z-[2000] overflow-x-hidden" id="popup">
          <img src="" alt="" id="selectedImage" class="max-h-full rounded-xl max-w-full" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      title: "Professional Skills",
      html: "HTML",
      css: "CSS",
      js: "JavaScript",
      bootstrap: "Bootstrap",
      vue: "Vue Js",
      php: "Php",
      laravel: "Laravel",
      mysql: "MySQL",
    };
  },
  methods: {
    imageView(el) {
      const popup = document.querySelector("#popup");
      const gallery = document.querySelector("#"+el);
      const selectedImage = document.querySelector("#selectedImage");
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
      popup.addEventListener("click", () => {
        popup.style.transform = `translateY(-100%)`;
        popup.src = "";
      });
    },
  },
};
</script>
