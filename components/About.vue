<template>
  <section id="about" class="py-12 md:py-16">
    <h2
      class="relative text-2xl md:text-3xl font-bold text-center text-indigo-600 mb-10"
    >
      About
      <span
        class="absolute left-1/2 -translate-x-1/2 block w-16 md:w-20 h-[3px] bg-indigo-600 mt-8"
      ></span>
    </h2>

    <!-- Block 1 -->
    <div
      class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center text-center md:text-left"
      data-aos="fade-right"
    >
      <div class="flex justify-center">
        <img
          @click="imageView('galleryOne')"
          src="../assets/images/myFullProfile.jpg"
          alt=""
          id="galleryOne"
          class="w-48 md:w-72 rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        />
      </div>
      <div>
        <h2 class="mb-4 text-xl font-semibold text-gray-800">
          <typical
            class="inline-block"
            :steps="[`I`, 100, `I'm Nay Ba La`, 2500]"
            :loop="Infinity"
          />
        </h2>
        <p class="text-gray-700 leading-relaxed">
          I was born in Zalun, Ayeyarwady Division, Myanmar. But now I live in
          Ingapu Street, SanChaung Township, Yangon Division. And then I was
          learning Web Development. Since About 2019 December I started learn
          Java Programming. And still learning HTML, CSS, JavaScript, Bootstrap,
          PHP, MySQL and Laravel too. You can view my learning project in
          <a href="#project" class="text-indigo-600 font-medium">Project</a>
          section.
        </p>
      </div>
    </div>

    <br />

    <!-- Block 2 -->
    <div
      class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center text-center md:text-left"
      data-aos="fade-left"
    >
      <div class="flex justify-center">
        <img
          @click="imageView('galleryTwo')"
          src="../assets/images/myInfo.jpg"
          alt=""
          id="galleryTwo"
          class="w-48 md:w-72 rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        />
      </div>
      <div>
        <h2 class="mb-4 text-xl font-semibold text-gray-800">
          <typical
            class="inline-block"
            :steps="[`I`, 100, `I was graduated from`, 2500]"
            :loop="Infinity"
          />
        </h2>
        <p class="text-gray-700 leading-relaxed">
          <span class="text-indigo-600">Hinthada Technological University</span>
          got
          <span class="text-indigo-600">Bachelor Of Technology (2018)</span> and
          <span class="text-indigo-600">Bachelor Of Engineering (2020)</span>
          major of
          <span class="text-indigo-600">Electronic Communication</span>. I also
          got the chance of Master Of Engineering but could not attend for many
          reasons! You can check certifications in
          <a href="#skills" class="text-indigo-600 font-medium">Skills</a>
          section.
        </p>
      </div>
    </div>

    <br />

    <!-- Block 3 -->
    <div
      class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center text-center md:text-left"
      data-aos="fade-right"
    >
      <div class="flex justify-center">
        <img
          @click="imageView('galleryThree')"
          src="../assets/images/myInfo-2.jpg"
          alt=""
          id="galleryThree"
          class="w-48 md:w-72 rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        />
      </div>
      <div>
        <h2 class="mb-4 text-xl font-semibold text-gray-800">
          <typical
            class="inline-block"
            :steps="[`I`, 100, `I also have`, 2500]"
            :loop="Infinity"
          />
        </h2>
        <p class="text-gray-700 leading-relaxed space-y-2">
          <span>- A website design perspective.</span><br />
          <span>- I can work in accordance with Deadline.</span><br />
          <span>- I can work in a team and have a strong desire to learn.</span
          ><br />
          <span>- I can complete tasks within the specified time.</span><br />
          <span>- I have good teamwork and communication skills.</span>
        </p>
      </div>
    </div>

    <br />

    <!-- Block 4 -->
    <div
      class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center text-center md:text-left"
      data-aos="fade-left"
    >
      <div class="flex justify-center">
        <img
          @click="imageView('galleryFour')"
          src="../assets/images/myInfo-3.jpg"
          alt=""
          id="galleryFour"
          class="w-48 md:w-72 rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        />
      </div>
      <div>
        <h2 class="mb-4 text-xl font-semibold text-gray-800">
          <typical
            class="inline-block"
            :steps="[`I`, 100, `I'm Nay Ba La`, 2500]"
            :loop="Infinity"
          />
        </h2>
        <p class="text-gray-700 leading-relaxed">
          - Good in English (4) skills.<br />
          - Good in Japanese Basic N5<br />
          - Self-directed and able to work without supervision.<br />
          - Highly motivated and learn about new technology.<br />
          - You can download my CV and other info from
          <a
            href="https://drive.google.com/file/d/1xeFPr_vRYCg6ycjo8SrMvk7b6nf-YnLH/view?usp=sharing"
            target="_blank"
            class="text-indigo-600 font-medium"
            >Here</a
          >.
        </p>
      </div>
    </div>

    <br />

    <!-- Block 5 -->
    <div
      class="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 items-center text-center md:text-left"
      data-aos="fade-left"
    >
      <div class="flex justify-center">
        <img
          @click="imageView('galleryFive')"
          src="../assets/images/myInfoFour.jpg"
          alt=""
          id="galleryFive"
          class="w-48 md:w-72 rounded-lg cursor-pointer transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
        />
      </div>
      <div>
        <h2 class="mb-4 text-xl font-semibold text-gray-800">
          <typical
            class="inline-block"
            :steps="[`My`, 100, `My working experience`, 2500]"
            :loop="Infinity"
          />
        </h2>
        <p class="text-gray-700 leading-relaxed">
          Hands-on professional experience in handling diverse projects and
          extensive expertise in managing large datasets while ensuring clean
          code practices. One of the significant aspects of my experience lies
          in my proficiency in handling large datasets. I have adeptly managed
          substantial volumes of data, implementing efficient storage solutions,
          and developing algorithms to extract valuable insights. My experience
          has taught me the importance of data cleanliness and accuracy, which I
          prioritize diligently in all my projects.
        </p>
      </div>
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
  </section>
</template>

<script>
import typical from "vue-typical";

export default {
  components: { typical },
  methods: {
    imageView(el) {
      const popup = document.querySelector("#popup");
      const gallery = document.querySelector("#" + el);
      const selectedImage = document.querySelector("#selectedImage");
      selectedImage.src = gallery.src;
      popup.classList.remove("hidden");
      popup.addEventListener("click", () => {
        popup.classList.add("hidden");
        selectedImage.src = "";
      });
    },
  },
};
</script>
