<template>
  <section class="currentlyWork section" id="currentlyWork">
    <h2 class="section-title">CurrentlyWork</h2>

    <div class="about__container bd-grid" data-aos="fade-right">
      <div class="about__img">
        <img
          @click="imageViewOne"
          src="../assets/images/image.png"
          alt=""
          id="galleryCurrentWorkOne"
        />
      </div>
      <div>
        <h2 class="about__subtitle">
          <typical
            class="typicalWrapper"
            :steps="[`BIG`, 100, `BIGSOFT Technology PLC..`, 2500]"
            :loop="Infinity"
          ></typical>
        </h2>
        <p class="about__text">
          BIGSOFT established since 2019 in Cambodia and Myanmar, We serve
          clients all over the world who needs transform their business to
          digitalize and any software development.
        </p>
        <p>
          BIGSOFT TECHNOLOGY PLC located No 1036, Road5 Sangkat Mittapheap, Khan
          Russey Keo, Phnom Penh Cambodia.
        </p>
        <a target="__blank" href="https://bigsoft.tech/"
          >Company profile link</a
        >
      </div>
    </div>
    <div class="div" id="popup">
      <img src="" alt="" id="selectedImage" />
    </div>
    <br />
  </section>
</template>

<script setup>
import typical from "vue-typical";

const msg = "vue typical";

const imageViewOne = () => {
  const popup = document.querySelector("#popup");
  const gallery = document.querySelector("#galleryCurrentWorkOne");
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
