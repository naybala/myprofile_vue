<template>
  <section class="skills section" id="skills">
    <h2 class="section-title">Skills</h2>
    <div class="skills__container bd-grid">
      <div>
        <h2 class="skills__subtitle">{{ title }}</h2>
        <p class="skills__text"></p>
        <div data-aos="fade-right">
          <div class="skills__data">
            <div class="skills__names">
              <i class="fa-brands fa-html5 skills__icon"></i>
              <span class="skills__name">{{ html }}</span>
            </div>
            <div class="skills__bar skills__html"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="fa-brands fa-css3 skills__icon"></i>
              <span class="skills__name">{{ css }}</span>
            </div>
            <div class="skills__bar skills__css"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="fab fa-bootstrap skills__icon"></i>
              <span class="skills__name">{{ bootstrap }}</span>
            </div>
            <div class="skills__bar skills__ux"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="fa-brands fa-js-square skills__icon"></i>
              <span class="skills__name">{{ js }}</span>
            </div>
            <div class="skills__bar skills__js"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="fa-brands fa-vuejs skills__icon"></i>
              <span class="skills__name">{{ vue }}</span>
            </div>
            <div class="skills__bar skills__js"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="fab fa-php skills__icon"></i>
              <span class="skills__name">{{ php }}</span>
            </div>
            <div class="skills__bar skills__ux"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="fab fa-laravel skills__icon"></i>
              <span class="skills__name">{{ laravel }}</span>
            </div>
            <div class="skills__bar skills__ux"></div>
          </div>
          <div class="skills__data">
            <div class="skills__names">
              <i class="fas fa-database skills__icon"></i>
              <span class="skills__name">{{ mysql }}</span>
            </div>
            <div class="skills__bar skills__ux"></div>
          </div>
        </div>
        <br />

        <div class="">
          <img
            data-aos="fade-right"
            src="../assets/images/myCerti.jpg"
            alt=""
            class="skills__img img-fluid"
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
          class="skills__img img-fluid"
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
            class="skills__img img-fluid"
            id="gallerySeven"
            @click="imageView('gallerySeven')"
          />
          <div class="div" id="popup">
            <img src="" alt="" id="selectedImage" />
          </div>
        </div>
        <br /><br />
       
        <div class="div" id="popup">
          <img src="" alt="" id="selectedImage" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const title = "Professional Skills";
const html = "HTML";
const css = "CSS";
const js = "JavaScript";
const bootstrap = "Bootstrap";
const vue = "Vue Js";
const php = "Php";
const laravel = "Laravel";
const mysql = "MySQL";

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
/* ===== SKILLS =====*/
.skills__container {
  row-gap: 2rem;
  text-align: center;
}

.skills__subtitle {
  margin-bottom: var(--mb-2);
}

.skills__text {
  margin-bottom: var(--mb-4);
}

.skills__data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: var(--font-semi);
  padding: 0.5rem 1rem;
  margin-bottom: var(--mb-4);
  border-radius: 0.5rem;
  box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
  cursor: pointer;
  transition: 0.3s;
  transform: translateY(0px);
}

.skills__data:hover {
  transition: 0.3s;
  transform: translateY(-13px);
  box-shadow: 3px 3px 10px black;
}

.skills__icon {
  font-size: 2rem;
  margin-right: var(--mb-2);
  color: var(--first-color);
}

.skills__names {
  display: flex;
  align-items: center;
}

.skills__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--first-color);
  height: 0.25rem;
  border-radius: 0.5rem;
  z-index: var(--z-back);
}

.skills__html {
  width: 100%;
}

.skills__css {
  width: 100%;
}

.skills__js {
  width: 100%;
}

.skills__ux {
  width: 100%;
}

.skills__img {
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;
  transform: translateY(0px);
}

.skills__img:hover {
  transition: 0.3s;
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}

@media screen and (min-width: 576px) {
  .skills__container {
    grid-template-columns: 0.7fr;
    justify-content: center;
    column-gap: 1rem;
  }
}

@media screen and (min-width: 767px) {
  .skills__container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    align-items: center;
    text-align: initial;
  }
}
</style>
