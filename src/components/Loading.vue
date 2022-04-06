<template>
     <div class="loader-wrapper" v-if="!isloaded">
            <span class="loader">
                <img class="img-loader"
                    src="../assets/images/myProfile.png"
                    alt="">
                <span class="loader-inner">

                    <span class="loader-inner-up"></span>
                </span>
            </span>
            <span class="loader-text ms-4"> Loading Please Wait...</span>
        </div>
</template>

<script>
export default {}
</script>

<style scoped>
    /* Loading  Test*/
.loader-wrapper {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #242f3f;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  display: inline-block;
  width: 80px;
  height: 80px;
  position: relative;
  border: none;

}

.loader-inner {
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  border: 4px solid #Fff;
  border-radius: 0.6rem;
  /* border-radius: 4rem; */
  animation: loader 2s infinite ease;
}

.img-loader {
  width: 130%;
  height: 88%;
  position: absolute;
  left: -4px;

}

.loader-inner-up {
  border-radius: 0.2rem;

  vertical-align: top;
  display: inline-block;
  width: 101%;
  background-color: #fff;
  animation: loader-inner 2s infinite ease;
}

@keyframes loader {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(180deg);
  }

  50% {
    transform: rotate(180deg);
  }

  75% {
    transform: rotate(360deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes loader-inner {
  0% {
    height: 0%;
  }

  25% {
    height: 0%;
  }

  50% {
    height: 100%;
  }

  75% {
    height: 100%;
  }

  100% {
    height: 0%;
  }
}

.loader-text{
  color: #Fff;
}

</style>