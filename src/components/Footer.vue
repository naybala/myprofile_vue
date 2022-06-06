<template>
  <footer class="footer footer__text" id="footer">
    <p class="footer__title text-center">HELLO World!</p>
    <div class="row">
      <div class="col-md text-center">
        <img
          src="./../assets/svg/undraw_creation_process_re_kqa9.svg"
          alt=""
          class="img-fluid w-25"
        />
      </div>
      <div class="footer__social col-md text-center">
        <a
          href="https://www.facebook.com/profile.php?id=100076412994170"
          target="_blink"
          class="footer__icon"
          ><i class="fa-brands fa-facebook"></i
        ></a>
        <a
          href="https://www.instagram.com/naybala190510"
          target="_blink"
          class="footer__icon"
          ><i class="fa-brands fa-instagram-square"></i
        ></a>
        <a href="https://github.com/naybala" target="_blink" class="footer__icon"
          ><i class="fa-brands fa-github-square"></i
        ></a>
        <p class="footer__copy text-center mt-3">
          <a href="tel:+959763684400" class="nav__logo text-decoration-none"
            ><i class="fa-solid fa-phone"></i>+95 9763684400</a
          >
        </p>
        <p class="footer__copy text-center mt-3">
          <a
            href="mailto: naybala.153808@gmail.com"
            class="nav__logo text-decoration-none"
          >
            <i class="fa-solid fa-paper-plane"></i>
            naybala.153808@gmail.com</a
          >
        </p>
      </div>
      <div class="col-md text-center">
        <img
          src="./../assets/svg/undraw_creative_thinking_re_9k71.svg"
          alt=""
          class="img-fluid w-25"
        />
      </div>
    </div>
    <p class="footer__copy text-center mt-3">&#169; All rigths reserved</p>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
/* ===== FOOTER =====*/
.footer {
  background-color: #fff;
  font-weight: var(--font-semi);
  padding: 2rem 0;
  box-shadow: 3px 0px 5px rgba(14, 14, 14, 0.15);
}
.acti {
  background-color: #242f3f;
  color: #fff;
}

.footer__title {
  font-size: 2rem;
  margin-bottom: var(--mb-4);
}

.footer__social {
  margin-top: 1.1rem;
}

.footer__social :hover {
  transform: translateY(-6px);
  transition: 0.3s;
  box-shadow: 2px 2px 10px rgb(223, 219, 219);
  border-radius: 2.5rem;
}

.footer__icon {
  font-size: 1.5rem;
  color: var(--first-color);
  margin: 0 var(--mb-2);
  transition: all 0.3s;
  transform: translateY(0px);
}

.footer__copy {
  font-size: var(--smaller-font-size);
}
</style>
