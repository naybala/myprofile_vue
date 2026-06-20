<template>
  <section class="about section" id="about">
    <h2 class="section-title">About</h2>

    <div class="about-stacking-container">
      
      <!-- Card 1 -->
      <div class="about-card" style="--index: 1;" data-aos="fade-up">
        <div class="about__container bd-grid">
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
              learning project in <a href="#project">Project</a> section.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 2 -->
      <div class="about-card" style="--index: 2;" data-aos="fade-up">
        <div class="about__container bd-grid">
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
              major of <span class="text-primary">Electronic Communication</span>. I also got the
              chance of Master Of Engineering and I could not attend for some many
              reasons! You can check graduated certifications in <a href="#skills">skills</a> section.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 3 -->
      <div class="about-card" style="--index: 3;" data-aos="fade-up">
        <div class="about__container bd-grid">
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
                :steps="[`I`, 100, `I also have`, 2500]"
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
      </div>

      <!-- Card 4 -->
      <div class="about-card" style="--index: 4;" data-aos="fade-up">
        <div class="about__container bd-grid">
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
              - Good in English (4) skills. <br />
              - Good in Japanese Basic N5. <br />
              - Self-directed and able to work without supervision. <br />
              - Highly motivated and learn about new technology. <br />
              - You can download my CV Form and other information from <a
                href="https://drive.google.com/file/d/1xeFPr_vRYCg6ycjo8SrMvk7b6nf-YnLH/view?usp=sharing"
                target="_blink"
                >Here</a
              >.
            </p>
          </div>
        </div>
      </div>

      <!-- Card 5 -->
      <div class="about-card" style="--index: 5;" data-aos="fade-up">
        <div class="about__container bd-grid">
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
              Hand on professional experience in handling diverse projects and extensive expertise in managing large datasets while ensuring clean code practices. One of the significant aspects of my experience lies in my proficiency in handling large datasets. I have adeptly managed substantial volumes of data, implementing efficient storage solutions, and developing algorithms to extract valuable insights. My experience has taught me the importance of data cleanliness and accuracy, which I prioritize diligently in all my projects. I understand the significance of writing code that is not only functional but also easily understandable by fellow team members, enabling smoother collaboration and troubleshooting.
            </p>
          </div>
        </div>
      </div>

    </div>

    <div class="div" id="popup">
      <img src="" alt="" id="selectedImage" />
    </div>
  </section>
</template>

<script setup>
import typical from "vue-typical";

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
.about-stacking-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  padding: 5rem 1rem 2rem 1rem;
}

.about-card {
  position: sticky;
  top: calc(130px + var(--index) * 25px);
  z-index: var(--index);
  width: 100%;
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.02);
  margin-bottom: 25vh;
  padding: 3rem 2.5rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  min-height: 400px;
  display: flex;
  align-items: center;
}

.activeDark .about-card {
  background: rgba(30, 41, 59, 0.95);
  backdrop-filter: blur(12px);
  border-color: rgba(255, 255, 255, 0.08);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  color: #f1f5f9;
}

.about-card::before {
  content: "";
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 4px;
  border-radius: 2px;
  background: rgba(0, 0, 0, 0.1);
}

.activeDark .about-card::before {
  background: rgba(255, 255, 255, 0.15);
}

.about__container {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  align-items: center;
}

@media screen and (min-width: 768px) {
  .about__container {
    grid-template-columns: 1fr 2fr;
    text-align: left;
  }
  .about-card {
    padding: 3rem 4rem;
  }
}

.about__img {
  justify-self: center;
}

.about__img img {
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid var(--first-color);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.about__img img:hover {
  transform: scale(1.05) rotate(2deg);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.about__subtitle {
  font-size: 1.5rem;
  margin-bottom: var(--mb-2);
  color: var(--first-color);
}

.about__text {
  line-height: 1.6;
}

#popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateY(-100%);
  transition: transform 0.5s ease;
  cursor: zoom-out;
}

#selectedImage {
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
}
</style>
