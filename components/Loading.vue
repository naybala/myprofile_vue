<template>
  <div
    class="w-full h-full absolute top-0 left-0 bg-gray-800 flex justify-center items-center"
  >
    <span class="inline-block w-20 h-20 relative border-none">
      <img
        class="w-[130%] h-[88%] absolute left-[-4px]"
        src="../assets/images/myProfile.png"
        alt=""
      />
      <span
        class="inline-block w-full h-full relative border-4 border-white rounded-md animate-loader"
      >
        <span
          class="rounded-sm align-top inline-block w-full bg-white animate-loader-inner"
        ></span>
      </span>
    </span>
    <span class="text-white ml-4">
      <typical
        class="inline"
        :steps="[``, 700, `Loading Please Wait ........`]"
      ></typical>
    </span>
  </div>
</template>

<script>
import typical from "vue-typical";
export default {
  data: function () {
    return {
      msg: "vue typical",
    };
  },
  components: {
    typical,
  },
};
</script>

<style scoped>
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

.animate-loader {
  animation: loader 2s infinite ease;
}

.animate-loader-inner {
  animation: loader-inner 2s infinite ease-in-out;
}
</style>
