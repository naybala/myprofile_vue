<template>
  <div v-if="loading">
    <Loader />
  </div>
  <div v-if="!loading">
    <Header />
    <Home />
    <About />
    <Skill />
    <Project />
    <CurrentlyWork />
    <Contact />
    <Footer />
    <Cookie />
    <Track />
    <ScrollTop />
  </div>
</template>

<script>
import Loader from "./Loading.vue";
import Header from "./Header.vue";
import Home from "./Home.vue";
import About from "./About.vue";
import Skill from "./Skill.vue";
import Project from "./Project.vue";
import Contact from "./Contact.vue";
import Footer from "./Footer.vue";
import Cookie from "./Cookie.vue";
import Track from "./Track.vue";
import ScrollTop from "./ScrollTop.vue";
import CurrentlyWork from "./CurrentlyWork.vue";

export default {
  name: "Main",
  components: {
    Loader,
    Header,
    Home,
    About,
    Skill,
    Project,
    Contact,
    Footer,
    Cookie,
    Track,
    ScrollTop,
    CurrentlyWork,
  },
  data: () => ({
    loading: true,
  }),
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 3000);
  },
};
</script>

<style scoped>
/*===== GOOGLE FONTS =====*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap");

/*===== VARIABLES CSS =====*/
:root {
  --header-height: 3rem;
  --font-semi: 600;
  /*===== Colores =====*/
  /*Purple 260 - Red 355 - Blue 224 - Pink 340*/
  /* HSL color mode */
  --hue-color: 224;
  --first-color: hsl(var(--hue-color), 89%, 60%);
  --second-color: hsl(var(--hue-color), 56%, 12%);
  /*===== Fuente y tipografia =====*/
  --body-font: "Poppins", sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: 0.938rem;
  --smaller-font-size: 0.75rem;
  /*===== Margenes =====*/
  --mb-2: 1rem;
  --mb-4: 2rem;
  --mb-5: 2.5rem;
  --mb-6: 3rem;
  /*===== z index =====*/
  --z-back: -10;
  --z-fixed: 100;
}

@media screen and (min-width: 968px) {
  :root {
    --big-font-size: 3.5rem;
    --h2-font-size: 2rem;
    --normal-font-size: 1rem;
    --smaller-font-size: 0.875rem;
  }
}

/*===== BASE =====*/
*,
::before,
::after {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  margin: var(--header-height) 0 0 0;
  font-family: var(--body-font);
  font-size: var(--normal-font-size);
  color: var(--second-color);
  /* transition:background-color 1.5s; */
}
body:before,
body:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 100%;
  z-index: -2;
}
body:before {
  z-index: -1;
  background: #242f3f;
  transition: 500ms;
}

body.activeDark {
  overflow-x: hidden;
  background: #242f3f;
  color: #ffffff;
  z-index: 1;
  transition: 500ms;
  /* transition:background-color 1.5s; */
}
body.activeDark:before,
body.activeDark:after {
  width: 100%;
}

h1,
h2,
p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  height: auto;
}
/* .innerBody {
  opacity: 0.1;
} */

#loader {
  border: 12px solid #f3f3f3;
  border-radius: 50%;
  border-top: 12px solid #444444;
  width: 70px;
  height: 70px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}

.center {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>
