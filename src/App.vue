<template >
          <div v-if="loading">
              <Loader/>
          </div>
          <div v-if="!loading">
              <Header/>
              <Home/>
              <About/>
              <Skill/>
              <Project/>
              <Contact/>
              <Footer/>
              <Cookie/>
              <Track/>
          </div>
</template>

<script>
import Loader from './components/Loading.vue'
import Header from './components/Header.vue'
import Home from './components/Home.vue'
import About from './components/About.vue'
import Skill from './components/Skill.vue'
import Project from './components/Project.vue'
import Contact from './components/Contact.vue'
import Footer from './components/Footer.vue'
import Cookie from './components/Cookie.vue'
import Track from './components/Track.vue'



export default{
    name:"App",
    components:{
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
},
    data: () => ({
            loading: true,
        }),
    mounted() {
            setTimeout(() => {
                this.loading = false
            }, 3000);

        },
    
  }
</script>

<style>
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
  --body-font: 'Poppins', sans-serif;
  --big-font-size: 2rem;
  --h2-font-size: 1.25rem;
  --normal-font-size: .938rem;
  --smaller-font-size: .75rem;
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
    --smaller-font-size: .875rem;
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
body:before, body:after{
  content:''; 
  position:absolute; 
  width:0; 
  min-height:100%;
  z-index:-2; 
}
body:before{
  z-index:-1; 
  background:#242f3f;                
  transition:2.6s;                                 
}

body.activeDark {
  overflow-x: hidden;
  background: #242f3f;
  color: #ffffff;
  z-index:1; 
  transition:2.6s;  
  /* transition:background-color 1.5s; */
}
body.activeDark:before, body.activeDark:after{ 
  width:100%; 
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
  display: block;
}


</style>
