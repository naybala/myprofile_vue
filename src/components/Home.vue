<template>
   <!--===== HOME =====-->
        <section class="home bd-grid" id="home">
            <div id="theme-open"><i class="fa-solid fa-angles-right"></i></div>

        
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
#theme-open{
  cursor: pointer;
  z-index: 1;
  font-size: 2rem;
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

/* ===== MEDIA QUERIES=====*/
@media screen and (max-width: 320px) {


  .home {
    row-gap: 2rem;
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