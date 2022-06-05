<template>
  <section class="contact section" id="contact">
    <h2 class="section-title">Contact</h2>
    <div class="container text-center">
      <div class="row">
        <div class="col-md-4 mb-3">
          <a href="tel:+959763684400">
            <button class="button text-decoration-none">
              Call
              <i class="fa-solid fa-square-phone"></i>
            </button>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a href="mailto: naybala.153808@gmail.com">
            <button class="button text-decoration-none">
              Email
              <i class="fa-solid fa-paper-plane"></i>
            </button>
          </a>
        </div>
        <div class="col-md-4 mb-3">
          <a
            href="https://www.facebook.com/profile.php?id=100076412994170"
            target="_blink"
          >
            <button class="button text-decoration-none">
              facebook
              <i class="fa-brands fa-facebook"></i>
            </button>
          </a>
        </div>
      </div>
      <div class="img__center">
        <img
          src="../assets/images/Footer-Up.png"
          class="img-fluid rounded-1"
          alt=""
          id="galleryEight"
          @click="imageViewOne"
        />
        <br />
        <br />
        <h5 class="fw-bold text-decoration-underline">Current Laptop Specification</h5>
        <h3>Xaomi Note-Book Pro 2020</h3>
        <ul class="text-capitalize">
          <li><span>15.6-inch</span> screen,<span> 1920x1080</span> pixel display.</li>
          <li>Full-size keyboard built in back lid white light</li>
          <li>
            Intel Core <span>i7-10510U</span> processor, Quad core up to
            <span> 4.2GHz-4.9GHz</span>.
          </li>
          <li>GPU: <span>2G GDDR5 NVIDIA GeForce MX350</span> Discrete Graphics.</li>
          <li>
            <span>16GB DDR4</span> dual channel RAM, and
            <span>1TB PCIe SSD storage</span>.
          </li>
          <li>Windows <span>11 pro</span> Home operating system</li>
          <br />
          <li>
            more details
            <a
              href="https://www.giztop.com/xiaomi-mi-notebook-pro-15-6-2020-version.html"
              target="_blink"
              class="button"
              >here</a
            >
          </li>
        </ul>
      </div>
      <div class="div" id="popup">
        <img src="" alt="" id="selectedImage" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    imageViewOne() {
      const popup = document.querySelector("#popup");
      const gallery = document.querySelector("#galleryEight");
      const selectedImage = document.querySelector("#selectedImage");
      selectedImage.src = gallery.src;
      popup.style.transform = `translateY(0%)`;
      popup.addEventListener("click", () => {
        popup.style.transform = `translateY(-100%)`;
        popup.src = "";
      });
    },
  },
};
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
  content: "";
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
  padding: 0.75rem 2.5rem;
  font-weight: var(--font-semi);
  border-radius: 0.5rem;
  transition: 0.3s;
}

.button:hover {
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
}
#galleryEight {
  cursor: pointer;
  transform: translateY(0px);
  transition: 0.3s;
}
#galleryEight:hover {
  transform: translateY(-3px);
  box-shadow: 3px 3px 10px black;
  transition: 0.3s;
}
#popup {
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
  overflow-x: hidden;
}
#selectedImage {
  max-height: 100%;
  border-radius: 1rem;
  max-width: 100%;
}

h3 {
  color: var(--first-color);
}
span {
  color: var(--first-color);
}
</style>
