<template>
       <section class="contact section" id="contact">
            <h2 class="section-title">Contact</h2>
            <div class="container text-center">
                <div class="row">
                    <div class="col-md-4 mb-3">
                        <a href="tel:+959763684400">
                            <button class="button text-decoration-none">Call
                                <i class="ms-2 fa-solid fa-phone"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="mailto: naybala.153808@gmail.com">
                            <button class="button text-decoration-none">Email
                                <i class="ms-2 fa-solid fa-paper-plane"></i>
                            </button>
                        </a>
                    </div>
                    <div class="col-md-4 mb-3">
                        <a href="https://www.facebook.com/profile.php?id=100076412994170" target="_blink">
                            <button class="button text-decoration-none">facebook
                                <i class="ms-2 fa-brands fa-facebook"></i>
                            </button>
                        </a>
                    </div>
                </div>
                <img src="../assets/images/Footer-Up.jpg" class="img-fluid rounded-1" alt="" id="gallery">
                <div class="div" id="popup">
                    <img src="" alt="" id="selectedImage">
                </div>
            </div>
        </section>
</template>

<script>
export default {

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

</style>