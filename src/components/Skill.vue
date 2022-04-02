<template>
  
</template>

<script>
export default {

}
</script>

<style>
/* ===== SKILLS =====*/
.skills__container {
  row-gap: 2rem;
  text-align: center;
}

.skills__subtitle {
  margin-bottom: var(--mb-2);
}

.skills__text {
  margin-bottom: var(--mb-4);
}

.skills__data {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  font-weight: var(--font-semi);
  padding: .5rem 1rem;
  margin-bottom: var(--mb-4);
  border-radius: .5rem;
  box-shadow: 0px 4px 25px rgba(14, 36, 49, 0.15);
}

.skills__icon {
  font-size: 2rem;
  margin-right: var(--mb-2);
  color: var(--first-color);
}

.skills__names {
  display: flex;
  align-items: center;
}

.skills__bar {
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: var(--first-color);
  height: .25rem;
  border-radius: .5rem;
  z-index: var(--z-back);
}

.skills__html {
  width: 95%;
}

.skills__css {
  width: 85%;
}

.skills__js {
  width: 65%;
}

.skills__ux {
  width: 85%;
}

.skills__img {
  border-radius: .5rem;
}

</style>