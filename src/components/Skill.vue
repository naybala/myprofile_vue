<template>
     <section class="skills section" id="skills">
            <h2 class="section-title">Skills</h2>
                <div class="skills__container bd-grid">
                            <div>
                                <h2 class="skills__subtitle">{{title}}</h2>
                                <p class="skills__text"></p>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class='bx bxl-html5
                                            skills__icon'></i>
                                        <span class="skills__name">{{html}}</span>
                                    </div>
                                    <div class="skills__bar skills__html">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class='bx bxl-css3
                                            skills__icon'></i>
                                        <span class="skills__name">{{css}}</span>
                                    </div>
                                    <div class="skills__bar skills__css">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class='bx bxl-javascript
                                            skills__icon'></i>
                                        <span class="skills__name">{{js}}</span>
                                    </div>
                                    <div class="skills__bar skills__js">
                                    </div>
                                </div>
                                <div class="skills__data">
                                    <div class="skills__names">
                                        <i class="fab fa-php skills__icon"></i>
                                    <span class="skills__name">{{bootstrap}}</span>
                                </div>
                                <div class="skills__bar skills__ux">
                                </div>
                            </div>
                            <div class="skills__data">
                                <div class="skills__names">
                                    <i class="fab fa-laravel skills__icon"></i>
                                <span class="skills__name">{{php}}</span>
                            </div>
                            <div class="skills__bar skills__ux">
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='fas fa-database
                                    skills__icon'></i>
                                <span class="skills__name">{{laravel}}</span>
                            </div>
                            <div class="skills__bar skills__ux">
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='fab fa-bootstrap
                                    skills__icon'></i>
                                <span class="skills__name">{{mysql}}</span>
                            </div>
                            <div class="skills__bar skills__ux">
                            </div>
                        </div>
                        <br>
                        <br>
                        <div class="mt-1">
                            <img src="../assets/images/myCerti.jpg" alt=""
                                class="skills__img img-fluid" id="galleryFive" @click="imageViewOne">
                        </div>
                        <div class="div" id="popup">
                            <img src="" alt="" id="selectedImage">
                        </div>
                    </div>

                    <div>
                        <img src="../assets/images/myView.jpg" alt=""
                            class="skills__img img-fluid mt-5 mb-5" id="gallerySix" @click="imageViewTwo">
                            <div class="div" id="popup">
                                <img src="" alt="" id="selectedImage">
                            </div>
                        <br><br><br>
                        <img src="../assets/images/myCerti-2.jpg" alt=""
                            class="skills__img img-fluid" id="gallerySeven" @click="imageViewThree">
                            <div class="div" id="popup">
                                <img src="" alt="" id="selectedImage">
                            </div>
                    </div>
                </div>
        </section>
</template>

<script>
export default {
    data(){
    return{
      title : "Professional Skills",
      html : "HTML",
      css : "CSS",
      js: "JavaScript",
      bootstrap:"Bootstrap",
      php : "Php",
      laravel:"Laravel",
      mysql:"MySQL"
    }
  },
   methods:{
  imageViewOne(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryFive');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
       popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
   },
  imageViewTwo(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#gallerySix');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
       popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
   },
  imageViewThree(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#gallerySeven');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
     popup.style.transform = `translateY(0%)`;
      popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
   },
  }
}
</script>

<style scoped>
/* ===== SKILLS =====*/

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
  content: '';
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
  padding: .5rem 1rem;
  margin-bottom: var(--mb-4);
  border-radius: .5rem;
  box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
  cursor: pointer;
  transition: .3s;
  transform: translateY(0px);
}

.skills__data:hover {
  transition: .3s;
  transform: translateY(-3px);
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
  height: .25rem;
  border-radius: .5rem;
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
  border-radius: .5rem;
  cursor: pointer;
   transition: .3s;
  transform: translateY(0px);
}

.skills__img:hover {
  transition: .3s;
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}
#popup{
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
  overflow-x:hidden;
}
#selectedImage{
  max-height: 100%;
  border-radius: 1rem;
  max-width: 100%;
}
@media screen and (min-width: 576px) {
  .skills__container {
    grid-template-columns: .7fr;
    justify-content: center;
    column-gap: 1rem;
  }

}

@media screen and (min-width: 767px) {
 
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

  .skills__container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
    align-items: center;
    text-align: initial;
  }
}

@media screen and (min-width: 992px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
}
</style>