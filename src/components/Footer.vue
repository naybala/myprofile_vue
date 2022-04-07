<template>
        <footer class="footer footer__text" id="footer">
            <p class="footer__title">HELLO World!</p>
            <div class="footer__social">
                <a href="https://www.facebook.com/profile.php?id=100076412994170" target="_blink" class="footer__icon"><i class="fa-brands fa-facebook"></i></a>
                <a href="https://www.instagram.com/naybala190510" target="_blink" class="footer__icon" ><i class="fa-brands fa-instagram-square"></i></a>
                <a href="https://github.com/naybala" target="_blink" class="footer__icon"><i class="fa-brands fa-github-square"></i></a>
            </div>
            <p class="footer__copy">&#169; All rigths
                reserved</p>
        </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
/* ===== FOOTER =====*/
.footer {
  background-color: #fff;
  text-align: center;
  font-weight: var(--font-semi);
  padding: 2rem 0;
  box-shadow: 3px 0px 5px rgba(14, 14, 14, 0.15);
}
.acti{
  background-color:#242f3f;
  color: #Fff;
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
  color: var(--first-color);
  margin: 0 var(--mb-2);
}
.footer__icon:hover {
    transform: translateY(-6px);
    box-shadow: 2px 2px 10px rgb(223, 219, 219);
    border-radius: 2.5rem;
}
.footer__copy {
  font-size: var(--smaller-font-size);
}
</style>