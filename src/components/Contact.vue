<template>
       <section class="contact section" id="contact">
            <h2 class="section-title">Contact</h2>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <a href="tel:+959763684400">
                            <button class="button text-decoration-none">Call
                               <i class="fa-solid fa-square-phone"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="mailto: naybala.153808@gmail.com">
                            <button class="button text-decoration-none">Email
                                <i class="fa-solid fa-paper-plane"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="https://www.facebook.com/profile.php?id=100076412994170" target="_blink">
                            <button class="button text-decoration-none">facebook
                               <i class="fa-brands fa-facebook"></i>
                            </button>
                        </a>
                    </div>
                </div>
                <img src="../assets/images/Footer-Up.jpg" class="img-fluid rounded-1" alt="" id="galleryEight" @click="imageViewOne">
                <div class="div" id="popup">
                    <img src="" alt="" id="selectedImage">
                </div>
            </div>
        </section>
</template>

<script>
export default {
    methods:{
    imageViewOne(){
      const popup = document.querySelector('#popup');
      const gallery = document.querySelector('#galleryEight');
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
  width: 120px;
  height: 0.18rem;
  left: 0;
  right: 0;
  margin: auto;
  top: 2.5rem;
  background-color: var(--first-color);
}

.section {
  padding-top: 3rem;
  padding-bottom: 2rem;
}
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
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}
#galleryEight{
  cursor: pointer;
  transform: translateY(0px);
  transition: .3s;
}
#galleryEight:hover{
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
  transition: .3s;
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

</style>