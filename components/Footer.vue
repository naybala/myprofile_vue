<template>
  <footer class="bg-white font-semibold py-8 shadow-inner" id="footer">
    <p class="text-4xl mb-8 text-center">HELLO World!</p>

    <div class="flex flex-wrap">
      <!-- Left Image -->
      <div class="w-full md:w-1/3 text-center">
        <img
          src="@/assets/svg/undraw_creation_process_re_kqa9.svg"
          alt="Creative process illustration"
          class="w-1/4 mx-auto"
        />
      </div>

      <!-- Social + Contact -->
      <div class="w-full md:w-1/3 text-center mt-4">
        <!-- Social icons -->
        <div>
          <a
            v-for="(social, index) in socials"
            :key="index"
            :href="social.link"
            target="_blank"
            class="text-2xl text-indigo-600 mx-4 transition-all duration-300 transform hover:-translate-y-1.5 hover:shadow-lg hover:rounded-full"
            :aria-label="social.label"
          >
            <i :class="social.icon"></i>
          </a>
        </div>

        <!-- Contact Info -->
        <p
          v-for="(contact, index) in contacts"
          :key="index"
          class="text-sm text-center mt-3"
        >
          <a
            :href="contact.href"
            class="text-indigo-600 no-underline"
            :aria-label="contact.label"
          >
            <i :class="contact.icon"></i>
            {{ contact.text }}
          </a>
        </p>
      </div>

      <!-- Right Image -->
      <div class="w-full md:w-1/3 text-center">
        <img
          src="@/assets/svg/undraw_creative_thinking_re_9k71.svg"
          alt="Creative thinking illustration"
          class="w-1/4 mx-auto"
        />
      </div>
    </div>

    <!-- Copyright -->
    <p class="text-sm text-center mt-3">
      © {{ new Date().getFullYear() }} All rights reserved
    </p>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      socials: [
        {
          link: "https://www.facebook.com/profile.php?id=100076412994170",
          icon: "fa-brands fa-facebook",
          label: "Facebook",
        },
        {
          link: "https://www.instagram.com/naybala190510",
          icon: "fa-brands fa-instagram-square",
          label: "Instagram",
        },
        {
          link: "https://github.com/naybala",
          icon: "fa-brands fa-github-square",
          label: "GitHub",
        },
      ],
      contacts: [
        {
          href: "tel:+959763684400",
          icon: "fa-solid fa-phone",
          text: "+95 9763684400",
          label: "Phone number",
        },
        {
          href: "mailto:naybala.personal@gmail.com",
          icon: "fa-solid fa-paper-plane",
          text: "naybala.personal@gmail.com",
          label: "Email",
        },
      ],
    };
  },
};
</script>
