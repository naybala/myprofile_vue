<template>
  <!--===== FOOTER =====-->
        <footer class="footer">
            <p class="footer__title">HELLO World!</p>
            <div class="footer__social">
                <a href="#" class="footer__icon"><i class='bx
                        bxl-facebook'></i></a>
                <a href="#" class="footer__icon"><i class='bx
                        bxl-instagram'></i></a>
                <a href="#" class="footer__icon"><i class='bx
                        bxl-twitter'></i></a>
            </div>
            <p class="footer__copy">&#169; All rigths
                reserved</p>
        </footer>
         <!--===== FOOTER End =====-->
</template>

<script>
export default {

}
</script>

<style>
/* ===== FOOTER =====*/
.footer {
  background-color: var(--second-color);
  color: #fff;
  text-align: center;
  font-weight: var(--font-semi);
  padding: 2rem 0;
}

.footer__title {
  font-size: 2rem;
  margin-bottom: var(--mb-4);
}

.footer__social {
  margin-bottom: var(--mb-4);
}

.footer__icon {
  font-size: 1.5rem;
  color: #fff;
  margin: 0 var(--mb-2);
}

.footer__copy {
  font-size: var(--smaller-font-size);
}
</style>