<template>
        <section class="about section"  id="about">
                    <h2 class="section-title">About</h2>

                    <div class="about__container bd-grid" data-aos="zoom-in-up">
                        <div class="about__img" >
                            <img  @click="imageViewOne"  src="../assets/images/myFullProfile.jpg" alt="" id="galleryOne">
                        </div>
                        <div>
                            <h2 class="about__subtitle">I'am Nay Ba La</h2>
                            <p class="about__text">I was born in
                                Zalun,Ayeyarwady Division,Myanmar.
                                But now i live in Ingapu Street,SanChaung
                                Township,Yangon Division.
                                And then i was learning Web Development.Since
                                About 2019 December i started learn Java
                                Programming.And still learning
                                html,css,java-script,boostrap,php,mysql,laravel
                                too.You can view my learning project in<a
                                    href="#project"> Project</a> section.
                            </p>
                        </div>
                       
                    </div>
                    <div class="div" id="popup">
                        <img src="" alt="" id="selectedImage">
                    </div>
                    <br>
                    <div class="about__container bd-grid" data-aos="fade-left">
                        <div class="about__img">
                            <img  @click="imageViewTwo"  src="../assets/images/myInfo.jpg" alt=""  id="galleryTwo">
                        </div>
                        <div class="div" id="popup">
                        <img src="" alt="" id="selectedImage">
                        </div>
                        <div>
                            <h2 class="about__subtitle">I was graduated from</h2>
                            <p class="about__text"><span class="text-primary">Hinthada
                                    Technological University</span> got <span
                                    class="text-primary">Bachelor Of
                                    Technology(2018)</span> and <span
                                    class="text-primary">Bachelor Of Engineering
                                    (2020)</span> with studying major of
                                <span class="text-primary">Electronic
                                    Communication</span>.I also got a chance of
                                Master Of Engineering and i could not attend
                                this cause of many reason!You can check
                                gratuated certifie in <a href="#skills">skills</a>
                                section.</p>
                        </div>
                    </div>
                    <br>
                    <div class="about__container bd-grid" data-aos="zoom-in-up">
                        <div class="about__img">
                            <img  @click="imageViewThree" src="../assets/images/myInfo-2.jpg" alt=""  id="galleryThree">
                           
                        </div>
                         <div class="div" id="popup">
                        <img src="" alt="" id="selectedImage">
                        </div>
                        <div>
                            <h2 class="about__subtitle">I'also have</h2>
                            <p class="about__text"> - A website wesign
                                perspective. <br>
                                - I can work in accordance with Dealine. <br>
                                - I can work in a team and have a strong desire
                                to learn. <br>
                                - I can complete tasks within the specified
                                time. <br>
                                - I have good teamwork and communication skills.</p>
                        </div>
                    </div>
                    <br>
                    <div class="about__container bd-grid" data-aos="fade-up">
                        <div class="about__img">
                            <img  @click="imageViewFour" src="../assets/images/myInfo-3.jpg" alt=""  id="galleryFour">
                        </div>
                         <div class="div" id="popup">
                        <img src="" alt="" id="selectedImage">
                        </div>
                        <div>
                            <h2 class="about__subtitle">I'am Nay Ba La</h2>
                            <p class="about__text">- Good in English (4) skills.
                                <br>
                                - Good in Japanese Basic N5 <br>
                                - Self-directed and able to work without
                                supervision. <br>
                                - Highly motivated and learn about new
                                technology. <br>
                                - You can download my Cv-From and other
                                information from <a
                                    href="https://drive.google.com/file/d/1utIqnx-nhQuvvc6YjFW7fsB63xOUI28t/view?usp=sharing" target="_blink">Here</a>.
                            </p>
                        </div>
                    </div>
        </section>
       
</template>

<script>


export default {
  methods:{
  imageViewOne(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryOne');
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
      const gallery = document.querySelector('#galleryTwo');
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
      const gallery = document.querySelector('#galleryThree');
      const selectedImage = document.querySelector('#selectedImage');
      selectedImage.src = gallery.src;
     popup.style.transform = `translateY(0%)`;
      popup.addEventListener('click', () => {
            popup.style.transform = `translateY(-100%)`;
            popup.src = '';
        })
   },
  imageViewFour(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryFour');
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
  border-radius: .5rem;
  cursor: pointer;
}
.about__img img:hover {
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