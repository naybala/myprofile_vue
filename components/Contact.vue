<template>
  <section id="contact" class="py-12 md:py-16">
    <!-- Title -->
    <h2
      class="relative text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-12"
    >
      Contact
      <span
        class="absolute left-1/2 -translate-x-1/2 block w-28 h-[3px] bg-indigo-600 mt-8"
      ></span>
    </h2>

    <div class="max-w-5xl mx-auto text-center">
      <!-- Buttons -->
      <div class="flex flex-wrap justify-center">
        <div class="w-full md:w-1/3 px-2 mb-4">
          <a href="tel:+959763684400">
            <button
              class="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Call
              <i class="fa-solid fa-square-phone"></i>
            </button>
          </a>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <a href="mailto: naybala.personal@gmail.com">
            <button
              class="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Email
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </a>
        </div>
        <div class="w-full md:w-1/3 px-2 mb-4">
          <a
            href="https://www.facebook.com/profile.php?id=100076412994170"
            target="_blank"
          >
            <button
              class="inline-flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Facebook
              <i class="fa-brands fa-facebook"></i>
            </button>
          </a>
        </div>
      </div>

      <!-- Laptop Spec -->
      <div class="mt-12" data-aos="fade-right">
        <img
          src="../assets/svg/undraw_online_stats_0g94.svg"
          alt=""
          id="galleryEight"
          @click="imageViewOne"
          class="mx-auto w-72 md:w-96 rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        />

        <h5 class="mt-8 text-lg font-semibold underline">
          Current Laptop Specification
        </h5>
        <h3 class="mt-2 text-2xl font-bold text-indigo-600">
          Xaomi Note-Book Pro 2020
        </h3>

        <ul
          class="mt-6 text-gray-700 leading-relaxed text-left inline-block space-y-2"
        >
          <li>
            <span class="text-indigo-600">15.6-inch</span> screen,
            <span class="text-indigo-600">1920x1080</span> pixel display.
          </li>
          <li>Full-size keyboard with backlit white light</li>
          <li>
            Intel Core <span class="text-indigo-600">i7-10510U</span> processor,
            Quad core up to <span class="text-indigo-600">4.2GHz-4.9GHz</span>.
          </li>
          <li>
            GPU:
            <span class="text-indigo-600">2G GDDR5 NVIDIA GeForce MX350</span>
            Discrete Graphics.
          </li>
          <li>
            <span class="text-indigo-600">16GB DDR4</span> dual channel RAM, and
            <span class="text-indigo-600">1TB PCIe SSD storage</span>.
          </li>
          <li>
            Windows <span class="text-indigo-600">11 Pro</span> operating system
          </li>
          <li class="pt-4">
            More details
            <a
              href="https://www.giztop.com/xiaomi-mi-notebook-pro-15-6-2020-version.html"
              target="_blank"
              class="ml-1 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg font-semibold shadow transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
              >Here</a
            >
          </li>
        </ul>
      </div>

      <!-- Popup -->
      <div
        id="popup"
        class="fixed inset-0 bg-black/90 hidden items-center justify-center p-8 z-[2000]"
      >
        <img
          id="selectedImage"
          src=""
          alt=""
          class="max-h-full max-w-full rounded-xl"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    imageViewOne() {
      const popup = document.querySelector("#popup");
      const gallery = document.querySelector("#galleryEight");
      const selectedImage = document.querySelector("#selectedImage");
      selectedImage.src = gallery.src;
      popup.classList.remove("hidden");
      popup.classList.add("flex");
      popup.addEventListener("click", () => {
        popup.classList.add("hidden");
        popup.classList.remove("flex");
        selectedImage.src = "";
      });
    },
  },
};
</script>
