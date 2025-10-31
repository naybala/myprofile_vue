<template>
  <div class="w-full fixed flex justify-center transition-all duration-400 ease-in-out text-indigo-600 bg-gray-100 z-50 shadow-lg" id="cookie" @load="load"></div>
</template>

<script>
export default {
  mounted() {
    this.load();
  },
  methods: {
    load() {
      const parentTag = document.querySelector("#cookie");
      const openToastAlert = () => {
        parentTag.innerHTML = "";
        const toastAlertContainerTag = document.createElement("div");
        toastAlertContainerTag.classList.add("flex", "my-2");
        const toastAlertTextTag = document.createElement("div");
        toastAlertTextTag.append(`My Website Using Cookies...`);
        toastAlertTextTag.classList.add("mt-1");
        // create AcceptButtonTag
        const closeButtonTag = document.createElement("div");
        closeButtonTag.append("Accept");
        closeButtonTag.classList.add("bg-indigo-600", "text-white", "inline-block", "p-2", "rounded-lg", "cursor-pointer", "ml-3");
        // create AcceptButtonTag
        const closeUnAcceptButtonTag = document.createElement("div");
        closeUnAcceptButtonTag.append("Close");
        closeUnAcceptButtonTag.classList.add("bg-indigo-600", "text-white", "inline-block", "p-2", "rounded-lg", "cursor-pointer", "ml-1");
        // append toastAlertTextTag, closeButtonTag to toastAlertContainerTag
        toastAlertContainerTag.append(
          toastAlertTextTag,
          closeButtonTag,
          closeUnAcceptButtonTag
        );

        // append toastAlertContainerTag to parentTag
        parentTag.append(toastAlertContainerTag);
        parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
        setTimeout(() => {
          parentTag.style.bottom = `0px`;
        }, 100);

        // Attach event listener on closeButtonTag
        closeButtonTag.addEventListener("click", () => {
          localStorage.setItem("accepted", "1");
          parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
        });

        // Attach event listener on closeButtonTag
        closeUnAcceptButtonTag.addEventListener("click", () => {
          parentTag.style.bottom = `-${parentTag.offsetHeight}px`;
        });
      };
      const accept = localStorage.getItem("accepted");
      if (accept != "1") {
        openToastAlert();
      }
    },
  },
};
</script>
