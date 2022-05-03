<template>
     <div class="container-fluid nav-top-bg">
            <div class="container nav-top-bg-text">
                <p class="text-white" id="text-animation"><span class="fw-bold">Warning</span>
                    Don't forget to operate Pro button!This button was included dark mode and changing ascent color options.
                </p>
            </div>
        </div>
</template>

<script>

export default {

}
</script>

<style scoped>
#text-animation {
  animation: reverse infinite; 
  animation-name: run;
  animation-duration: 30s;
}

@keyframes run {
    0% {
      left: -100%;
      transform: translateX(-140%);
    }
    40%{
      left: 0%;
      transform: none;
    }
    60%{
      left: 0%;
      transform: none;
    }
    100% {
      left: 100%;
      transform: translateX(140%);
    }
}

.nav-top-bg{
	height: 100px;
	background-color: #000;
	font-size: 15px;
}
.nav-top-bg span{
	color: red;
}
.nav-top-bg-text{
	position: relative;
	top: 30px;
}
</style>