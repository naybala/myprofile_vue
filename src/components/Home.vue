<template>
   <!--===== HOME =====-->
        <section class="home bd-grid" id="home">
            <div id="theme-open" @click="themeOpen"><i class="fa-solid fa-angles-right"></i></div>
            <div class="themes-container">
              <div id="theme-close" @click="themeClose"><i class="fa-solid fa-xmark"></i></div>
              <h3>switch theme</h3>
              <div class="theme-toggler" @click="themeToggler">
                  <span>light</span>
                  <span class="toggler"></span>
                  <span>dark</span>
              </div>

              <h3>pick an acent color</h3>
              <div class="theme-colors">
                  <div class="color" style="background:#3e6ff4"></div>
                  <div class="color" style="background:#0044fd"></div>
                  <div class="color" style="background:#27ae60"></div>
                  <div class="color" style="background:#00ee63"></div>
                  <div class="color" style="background:#0fb9b1"></div>
                  <div class="color" style="background:#00fff2"></div>
                  <div class="color" style="background:#ceb244"></div>
                  <div class="color" style="background:#ffcc00"></div>
                  <div class="color" style="background:#ac354c"></div>
                  <div class="color" style="background:#ff0033"></div>
                  <div class="color" style="background:#e84393"></div>
                  <div class="color" style="background:#baee00"></div>
                  <div class="color" style="background:#914b6c"></div>
                  <div class="color" style="background:#fc07ef"></div>
              </div>
            </div>
                <div class="home__data">
                    <h1 class="home__title">Hi,<br>I'am <span
                            class="home__title-color">Nay Ba La</span><br> Web
                        Developer
                    </h1>

                    <p class="mb-2">Email : naybala.153808@gmail.com</p>

                    <a href="#about" class="button text-decoration-none">Discover</a>
                </div>

                <div class="home__social">
                    <a
                        href="https://www.facebook.com/profile.php?id=100076412994170"
                        class="home__social-icon"><i class="fab
                            fa-facebook"></i></a>
                    <a href="#" class="home__social-icon"><i class="fab
                            fa-instagram"></i></a>
                    <a href="https://github.com/naybala"
                        class="home__social-icon"><i class='bx
                            bxl-github'></i></a>
                </div>

                <div class="home__img">
                    <svg class="home__blob" viewBox="0 0 479 467"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink">
                        <mask id="mask0" mask-type="alpha">
                            <path d="M9.19024 145.964C34.0253 76.5814 114.865
                                54.7299 184.111 29.4823C245.804 6.98884 311.86
                                -14.9503 370.735 14.143C431.207 44.026 467.948
                                107.508 477.191 174.311C485.897 237.229 454.931
                                294.377 416.506 344.954C373.74 401.245 326.068
                                462.801 255.442 466.189C179.416 469.835 111.552
                                422.137 65.1576 361.805C17.4835 299.81 -17.1617
                                219.583 9.19024 145.964Z" />
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M9.19024 145.964C34.0253 76.5814
                                    114.865 54.7299 184.111 29.4823C245.804
                                    6.98884 311.86 -14.9503 370.735
                                    14.143C431.207 44.026 467.948 107.508
                                    477.191 174.311C485.897 237.229 454.931
                                    294.377 416.506 344.954C373.74 401.245
                                    326.068 462.801 255.442 466.189C179.416
                                    469.835 111.552 422.137 65.1576
                                    361.805C17.4835 299.81 -17.1617 219.583
                                    9.19024 145.964Z" />
                                    <image class="home__blob-img" x="-80" y="60"
                                        href="../assets/images/myProfile.png" />
                                    </g>
                                </svg>
                            </div>
                      
        </section>
</template>

<script>

export default {
  methods:{
    themeOpen(){
      const themesContainer = document.querySelector('.themes-container');
      const themeOpen = document.querySelector('#theme-open');
        themesContainer.classList.add('activeMenu');
        themeOpen.style.opacity="0";
         const themeColor = document.querySelectorAll('.theme-colors .color');
        themeColor.forEach(color => {
            color.onclick = () => {
                let background = color.style.background;
                document.querySelector(':root').style.setProperty('--first-color', background);
            }
        });
    },
    themeClose(){
      const themesContainer = document.querySelector('.themes-container');
      const themeOpen = document.querySelector('#theme-open');
      themesContainer.classList.remove('activeMenu');
      themeOpen.style.opacity="1";
    },
    themeToggler(){
      let themeToggler = document.querySelector('.theme-toggler');
      let headDark = document.querySelector('#head');
        themeToggler.classList.toggle('activeToggle');
          if (themeToggler.classList.contains('activeToggle')) {
              document.body.classList.add('activeDark');
              headDark.classList.add('ac');
             
          } else {
              document.body.classList.remove('activeDark');
              headDark.classList.remove('ac');
             
          }
    },
  }
}
</script>

<style scoped>
/*===== HOME =====*/
.bd-grid {
  max-width: 1024px;
  display: grid;
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.home {
  position: relative;
  row-gap: 5rem;
  padding: 4rem 0 5rem;
}

.home__data {
  align-self: center;
}

.home__title {
  font-size: var(--big-font-size);
  margin-bottom: var(--mb-5);
}

.home__title-color {
  color: var(--first-color);
}

.home__social {
  display: flex;
  flex-direction: column;
}

.home__social-icon {
  width: max-content;
  margin-bottom: var(--mb-2);
  font-size: 1.5rem;
  color: var(--first-color);
}

.home__social-icon:hover {
  color: var(--first-color);
}

.home__img {
  position: absolute;
  right: 0;
  bottom: 0;
  width: 260px;
}

.home__blob {
  /* fill : rgb(44, 231, 19); */
  fill: var(--first-color);
}

.home__blob-img {
  width: 600px;
}


/*BUTTONS*/
.button {
  display: inline-block;
  background-color: var(--first-color);
  color: #fff;
  padding: .75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: .5rem;
  transition: .3s;
}

.button:hover {
  box-shadow: 0px 10px 36px rgba(0, 0, 0, 0.15);
}
/* ===== Theme Open =====*/
#theme-open{
  cursor: pointer;
  z-index: 1;
  font-size: 2rem;
  margin-bottom: 0;
}
.themes-container {
  margin-top: 1rem;
  margin-left: 1rem;
  position: fixed;
  top: 100;
  left: -100%;
  background: rgb(143, 143, 150);
  height: 75vh;
  width: 350px;
  z-index: 1000;
  text-align: right;
  padding: 20px;
  border-radius: 1rem;
  transition: all 0.7s ease;
}

.themes-container.activeMenu {
  left: 0;
}

.themes-container #theme-close {
  font-size: 40px;
  cursor: pointer;
  transition: all 0.7s ease;
}

.themes-container h3 {
  color: var(--first-color);
  text-align: center;
  padding: 2px 0;
  margin: 20px 0;
}

.themes-container .theme-toggler {
  display: flex;
  align-items: center;
  justify-content: center;
}

.themes-container .theme-toggler .toggler {
  height: 40px;
  width: 100px;
  border-radius: 50px;
  background: rgb(89, 89, 95);
  position: relative;
  cursor: pointer;
  margin: 0 10px;
}

.themes-container .theme-toggler .toggler::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background: rgb(233, 228, 228);
  transition: .2s linear;
}

.themes-container .theme-toggler.activeToggle .toggler::before {
  left: 65px;
}

.themes-container .theme-colors {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.themes-container .theme-colors .color {
  border-radius: 5px;
  height: 50px;
  width: 50px;
  cursor: pointer;
}

.themes-container .theme-colors .color:hover {
  opacity: .5;
}

/* ===== MEDIA QUERIES=====*/
@media (max-width:400px) and (min-width: 300px){
   .home {
    row-gap: 0rem;
  }
}
@media screen and (max-width: 320px) {
  .home {
    row-gap: 0rem;
  }
  .home__img {
    width: 200px;
  }

}

@media screen and (min-width: 576px) {

  .home {
    padding: 4rem 0 2rem;
  }
  .home__social {
    padding-top: 0;
    padding-bottom: 2.5rem;
    flex-direction: row;
    align-self: flex-end;
  }
  .home__social-icon {
    margin-bottom: 0;
    margin-right: var(--mb-4);
  }
  .home__img {
    width: 300px;
    bottom: 25%;
  }
  
}

@media screen and (min-width: 992px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
  .home__img {
    width: 450px;
  }
}

</style>