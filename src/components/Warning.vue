<template>
     <div class="container-fluid nav-top-bg">
            <div class="container nav-top-bg-text">
                <p class="text-white" id="text-animation"><span class="fw-bold">Warning</span>
                    Don't forget to operate Pro button!This button was included dark mode and changing ascent color options.
                    If you have any question contact me.
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
p{
    margin-left: 4rem;
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
	height: 40px;
	background-color: #000;
	font-size: 15px;
}
.nav-top-bg span{
	color: red;
}
.nav-top-bg-text{
	position: relative;
	top: 10px;
}

/* Tablet View */
@media (min-width : 768px) and (max-width :950px)  {
.nav-top-bg{
    height: 50px;
	font-size: 10px;
}
p{
    margin-left: 0rem;
}
.nav-top-bg-text{
	top: 15px;
}
 
}

/* Moblie View */
@media (min-width : 290px) and (max-width :500px)  {
.nav-top-bg{
    display: none;
}

}
</style>