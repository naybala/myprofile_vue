<template>
  <section class="currentlyWork section" id="currentlyWork">
    <h2 class="section-title">CurrentlyWork</h2>

    <div class="about__container bd-grid" data-aos="fade-right">
      <div class="about__img">
        <img
          @click="imageViewOne"
          src="../assets/images/current_work.avif"
          alt=""
          id="galleryCurrentWorkOne"
        />
      </div>
      <div>
        <h2 class="about__subtitle">
          <typical
            class="typicalWrapper"
            :steps="[`Zo`, 100, `Zote By Foucs Innovation..`, 2500]"
            :loop="Infinity"
          ></typical>
        </h2>
        <p class="about__text">
          Zote By Focus Innovation co.,ltd.
        </p>
        <p>
          Room 804, 7th Floor, Building 19, MICT Park, Hlaing, Yangon.
        </p>
      </div>
    </div>


    <div class="about__container bd-grid p-5 px-5" data-aos="fade-right">
     
      <div class="text-center">
        <p>Precise Location of Current Work</p>
      </div>
      <div class="about__img rounded-2">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3382.3335474286414!2d96.12686013187466!3d16.849440303624753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c194eb70b00001%3A0xb2a1f5694971b1b6!2sMICT%20Park%20Main%20Building!5e0!3m2!1sen!2smm!4v1708621693584!5m2!1sen!2smm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
   
    <div class="div" id="popup">
      <img src="" alt="" id="selectedImage" />
    </div>
    <br />
  </section>
</template>

<script>
import typical from "vue-typical";

export default {
  data: function () {
    return {
      msg: "vue typical",
    };
  },
  components: {
    typical,
  },
  methods: {
    imageViewOne() {
      const popup = document.querySelector("#popup");
      const gallery = document.querySelector("#galleryCurrentWorkOne");
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

<style scoped>
/* ===== ABOUT =====*/
.bd-grid {
  max-width: 1024px;
  display: grid;
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}
.section-title {
  position: relative;
  font-size: var(--h2-font-size);
  color: var(--first-color);
  margin-top: var(--mb-2);
  margin-bottom: var(--mb-4);
  text-align: center;
}
.section-title::after {
  position: absolute;
  content: "";
  width: 64px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2rem;
  background-color: var(--first-color);
}

.section {
  padding-top: 3rem;
  padding-bottom: 2rem;
}
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

#popup {
  position: fixed;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background-color: rgba(23, 22, 22, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: 250ms transform;
  padding: 50px;
  z-index: 2000;
  overflow-x: hidden;
}
#selectedImage {
  max-height: 100%;
  border-radius: 1rem;
  max-width: 100%;
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
  .section {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
  .section-title {
    margin-bottom: var(--mb-6);
  }
  .section-title::after {
    width: 80px;
    top: 3rem;
  }
  .about__container {
    padding-top: 2rem;
  }
  .about__img img {
    width: 300px;
  }
}
@media screen and (min-width: 992px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
