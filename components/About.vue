<template>
  <section class="about section" id="about">
    <h2 class="section-title">About</h2>

    <div class="about__container bd-grid" data-aos="fade-right">
      <div class="about__img">
        <img
          @click="imageView('galleryOne')"
          src="../assets/images/myFullProfile.jpg"
          alt=""
          id="galleryOne"
        />
      </div>
      <div>
        <h2 class="about__subtitle">
          <typical
            class="typicalWrapper"
            :steps="[`I`, 100, `I'm Nay Ba La`, 2500]"
            :loop="Infinity"
          ></typical>
        </h2>
        <p class="about__text">
          I was born in Zalun,Ayeyarwady Division,Myanmar. But now I live in Ingapu
          Street,SanChaung Township,Yangon Division. And then I was learning Web
          Development.Since About 2019 December I started learn Java Programming.And still
          learning html , css , java-script , bootstrap , php , mysql and laravel too.You can view my
          learning project in<a href="#project"> Project</a> section.
        </p>
      </div>
    </div>
    <br />

    <div class="about__container bd-grid" data-aos="fade-left">
      <div class="about__img">
        <img
          @click="imageView('galleryTwo')"
          src="../assets/images/myInfo.jpg"
          alt=""
          id="galleryTwo"
        />
      </div>
      <div>
        <h2 class="about__subtitle">
          <typical
            class="typicalWrapper"
            :steps="[`I`, 100, `I was graduated from`, 2500]"
            :loop="Infinity"
          ></typical>
        </h2>
        <p class="about__text">
          <span class="text-primary">Hinthada Technological University</span> got
          <span class="text-primary">Bachelor Of Technology(2018)</span> and
          <span class="text-primary">Bachelor Of Engineering (2020)</span> 
          major of <span class="text-primary">Electronic Communication</span>.I also got the
          chance of Master Of Engineering and I could not attend for some many
          reason!You can check graduated certifications in <a href="#skills">skills</a> section.
        </p>
      </div>
    </div>
    <br />

    <div class="about__container bd-grid" data-aos="fade-right">
      <div class="about__img">
        <img
          @click="imageView('galleryThree')"
          src="../assets/images/myInfo-2.jpg"
          alt=""
          id="galleryThree"
        />
      </div>
      <div>
        <h2 class="about__subtitle">
          <typical
            class="typicalWrapper"
            :steps="[`I`, 100, `I'also have`, 2500]"
            :loop="Infinity"
          ></typical>
        </h2>
        <p class="about__text">
          - A website design perspective. <br />
          - I can work in accordance with Deadline. <br />
          - I can work in a team and have a strong desire to learn. <br />
          - I can complete tasks within the specified time. <br />
          - I have good teamwork and communication skills.
        </p>
      </div>
    </div>
    <br />

    <div class="about__container bd-grid" data-aos="fade-left">
      <div class="about__img">
        <img
          @click="imageView('galleryFour')"
          src="../assets/images/myInfo-3.jpg"
          alt=""
          id="galleryFour"
        />
      </div>
      <div>
        <h2 class="about__subtitle">
          <typical
            class="typicalWrapper"
            :steps="[`I`, 100, `I'm Nay Ba La`, 2500]"
            :loop="Infinity"
          ></typical>
        </h2>
        <p class="about__text">
          - Good in English (4) skills.
          <br />
          - Good in Japanese Basic N5 <br />
          - Self-directed and able to work without supervision. <br />
          - Highly motivated and learn about new technology. <br />
          - You can download my Cv-From and other information from
          <a
            href="https://drive.google.com/file/d/1xeFPr_vRYCg6ycjo8SrMvk7b6nf-YnLH/view?usp=sharing"
            target="_blink"
            >Here</a
          >.
        </p>
      </div>
    </div>
    <br />

    <div class="about__container bd-grid" data-aos="fade-left">
      <div class="about__img">
        <img
          @click="imageView('galleryFive')"
          src="../assets/images/myInfoFour.jpg"
          alt=""
          id="galleryFive"
        />
      </div>
      <div>
        <h2 class="about__subtitle">
          <typical
            class="typicalWrapper"
            :steps="[`My`, 100, `My working experience`, 2500]"
            :loop="Infinity"
          ></typical>
        </h2>
        <p class="about__text">
          Hand on professional experience in handling diverse projects and extensive expertise in managing large datasets while ensuring clean code practices.One of the significant aspects of my experience lies in my proficiency in handling large datasets. I have adeptly managed substantial volumes of data, implementing efficient storage solutions, and developing algorithms to extract valuable insights. My experience has taught me the importance of data cleanliness and accuracy, which I prioritize diligently in all my projects.I understand the significance of writing code that is not only functional but also easily understandable by fellow team members, enabling smoother collaboration and troubleshooting.
        </p>
      </div>
    </div>
    <br />

    <div class="div" id="popup">
      <img src="" alt="" id="selectedImage" />
    </div>
  </section>
</template>

<script setup>
import typical from "vue-typical";

const msg = "vue typical";

const imageView = (el) => {
  const popup = document.querySelector("#popup");
  const gallery = document.querySelector("#" + el);
  const selectedImage = document.querySelector("#selectedImage");
  if (popup && gallery && selectedImage) {
    selectedImage.src = gallery.src;
    popup.style.transform = `translateY(0%)`;
    popup.addEventListener("click", () => {
      popup.style.transform = `translateY(-100%)`;
      popup.src = "";
    });
  }
};
</script>

<style scoped>
/* ===== ABOUT =====*/
.about__container {
  row-gap: 2rem;
  text-align: center;
}

.about__subtitle {
  margin-bottom: var(--mb-2);
}

.about__img {
  justify-self: center;
}

.about__img img {
  width: 200px;
  border-radius: 0.5rem;
  cursor: pointer;
  transform: translateY(0px);
  transition: 0.3s;
}
.about__img img:hover {
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
  transition: 0.3s;
}

/* ===== MEDIA QUERIES=====*/
@media screen and (min-width: 576px) {
  .about__container {
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    text-align: initial;
  }
}

@media screen and (min-width: 768px) {
  body {
    margin: 0;
  }
  .about__container {
    padding-top: 2rem;
  }
  .about__img img {
    width: 300px;
  }
}
</style>
