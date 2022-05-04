<template>
       
  <!--===== HEADER =====-->
        <div class="l-header" id="head" @scroll="scrollActive">
           <Warning/>
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo text-decoration-none">{{ myName }}
                    </a>
                    <br>
                    <a href="tel:+959763684400" class="nav__logo text-decoration-none"><i class="fa-solid fa-phone"></i>{{ phone }}</a>
                </div>

                <div class="nav__menu" id="nav-menu" ref="name">
                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home #home" @click="homeHeader"
                                class="nav__link text-decoration-none active">{{ home }}</a></li>
                        <li class="nav__item"><a href="#about"
                                class="nav__link text-decoration-none">{{ about }}</a></li>
                        <li class="nav__item"><a href="#skills"
                                class="nav__link text-decoration-none" >{{ skill }}</a></li>
                        <li class="nav__item"><a href="#project"
                                class="nav__link text-decoration-none">{{ project }}</a></li>
                        <li class="nav__item"><a href="#contact"
                                class="nav__link text-decoration-none">{{ contact }}</a></li>
                    </ul>
                </div>

                <div @click="navMenuShow" class="nav__toggle nav__logo" id="nav-toggle">
                    <i class="fa-brands fa-elementor"></i>
                </div>
            </nav>
        </div>
</template>

<script>
 import Warning from './Warning.vue'

export default {
   components:{
     Warning,
  },
  data(){
    return{
      myName : "Nay Ba La",
      phone : "+95 9 763684400",
      home : "Home",
      about: "About",
      skill : "Skills",
      project : "Projects",
      contact : "Contact Me"
    }
  },
  created () {
     window.addEventListener('scroll', this.scrollActive);
    },
  active(){
    window.addEventListener('scroll', this.scrollActive);
    },
  destroyed () {
    window.removeEventListener('scroll', this.scrollActive);
    },
  methods:{
    navMenuShow(){
      const showMenu = (toggleId, navId) => {
      const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

      if (toggle && nav) {
        nav.classList.toggle('show');
       }
      }
     showMenu('nav-toggle', 'nav-menu');

     const navLink = document.querySelectorAll('.nav__link');
     function linkAction() {
       const navMenu = document.getElementById('nav-menu');
         navMenu.classList.remove('show');
      }
     navLink.forEach(n => n.addEventListener('click', linkAction));
    },
    scrollActive(event){
      const sections = document.querySelectorAll('section[id]')
        const scrollY = window.pageYOffset;
        sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');
        console.log(sectionId);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active');
        } else {
             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active');
        }
  
        
      })
    
    },
    homeHeader(){
      window.scroll ({
        top: 0,
        left:0,
        behavior: 'smooth'
      })
    },
  }
}
</script>

<style scoped>
/*===== LAYOUT =====*/
.bd-grid {
  max-width: 1024px;
  display: grid;
  margin-left: var(--mb-2);
  margin-right: var(--mb-2);
}

.l-header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: var(--z-fixed);
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(109, 112, 114, 0.15);
}
.l-header.ac{
  background-color:#242f3f;
  color: #Fff;
}

/*===== NAV =====*/
.nav {
  height: var(--header-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-semi);
}
.nav__toggle{
  cursor: pointer;
}
.nav__list .nav__item .nav__link{
  color: var(--first-color);
}
@media screen and (max-width: 767px) {
  .nav__menu {
    position: fixed;
    top: var(--header-height);
    right: -100%;
    width: 50%;
    height: 100%;
    padding: 2rem;
    background-color: var(--second-color);
    transition: .5s;
  }
 
}

.nav__item {
  margin-bottom: var(--mb-4);
}

.nav__link {
  position: relative;
  color: var(--first-color);
}

.nav__link:hover {
  position: relative;
 
}

.nav__link:hover::after {
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
  position: absolute;
  content: '';
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 1.6rem;
  background-color: var(--first-color);
  transition: .3s;
}

.nav__logo {
  color: var(--first-color);
}

.nav__toggle {
  /* color: var(--second-color); */
  font-size: 1.5rem;
  cursor: pointer;
}

/*Active menu*/
.active::after {
  position: absolute;
  content: '';
  width: 100%;
  height: 0.18rem;
  left: 0;
  top: 1.6rem;
  background-color: var(--first-color);
  transform: translateY(0px);
  transition: .3s;
}
.show {
  right: 0;
}


@media screen and (min-width: 767px) {
  body {
    margin: 0;
  }
  .nav {
    height: calc(var(--header-height) + 1.5rem);
  }
  .nav__list {
    display: flex;
    padding-top: 0;
  }
  .nav__item {
    margin-left: var(--mb-6);
    margin-bottom: 0;
  }
  .nav__toggle {
    display: none;
  }
  .nav__link {
    color: var(--second-color);
  }
}

@media screen and (min-width: 992px) {
  .bd-grid {
    margin-left: auto;
    margin-right: auto;
  }
}

</style>