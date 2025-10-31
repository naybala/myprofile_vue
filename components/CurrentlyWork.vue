<template>
  <section class="py-12 md:py-16" id="currentlyWork">
    <h2
      class="relative text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-10"
    >
      CurrentlyWork
      <span
        class="absolute left-1/2 -translate-x-1/2 block w-32 h-[3px] bg-indigo-600 mt-8"
      ></span>
    </h2>

    <div class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center text-center md:text-left" data-aos="fade-right">
      <div class="flex justify-center">
        <img
          @click="openPopup('../assets/images/image.png')"
          src="../assets/images/image.png"
          alt="Current Work"
          class="w-full rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        />
      </div>

      <div>
        <h2 class="mb-4 text-xl font-semibold text-gray-800">
          <typical
            class="inline-block"
            :steps="[`BIG`, 100, `BIGSOFT Technology PLC..`, 2500]"
            :loop="Infinity"
          />
        </h2>
        <p class="text-gray-700 leading-relaxed">
          BIGSOFT established since 2019 in Cambodia and Myanmar, We serve
          clients all over the world who needs transform their business to
          digitalize and any software development.
        </p>
        <p class="text-gray-700 leading-relaxed">
          BIGSOFT TECHNOLOGY PLC located No 1036, Road5 Sangkat Mittapheap, Khan
          Russey Keo, Phnom Penh Cambodia.
        </p>
        <a target="__blank" href="https://bigsoft.tech/" class="text-indigo-600 font-medium">
          Company profile link
        </a>
      </div>
    </div>

    <!-- Popup Modal -->
    <div v-if="showPopup" id="popup" @click="closePopup" class="fixed inset-0 bg-black/90 flex justify-center items-center p-12 z-[2000] overflow-x-hidden">
      <img :src="selectedImage" alt="Popup Image" id="selectedImage" class="max-h-full rounded-xl max-w-full" />
    </div>
  </section>
</template>

<script>
import typical from "vue-typical";

export default {
  components: { typical },
  data() {
    return {
      showPopup: false,
      selectedImage: "",
    };
  },
  methods: {
    openPopup(image) {
      this.selectedImage = image;
      this.showPopup = true;
    },
    closePopup() {
      this.showPopup = false;
      this.selectedImage = "";
    },
  },
};
</script>
