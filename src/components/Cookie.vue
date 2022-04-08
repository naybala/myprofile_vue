<template>
  <div class="accept-cokkiee" id="cookie" @load="load">

  </div>
</template>

<script>
export default {
    mounted() {
           this.load();
        },
    methods:{
         load(){

                const parentTag = document.querySelector(".accept-cokkiee");
                const openToastAlert = () => {
                        parentTag.innerHTML = "";
                        const toastAlertContainerTag = document.createElement("div");
                        toastAlertContainerTag.classList.add("toastAlertContainer");
                        toastAlertContainerTag.style.display="flex";
                        toastAlertContainerTag.style.marginTop="0.5rem"
                        toastAlertContainerTag.style.marginBottom="0.5rem"
                        const toastAlertTextTag = document.createElement("div");
                        toastAlertTextTag.append(
                            `My Wesbsite Using Cookiee...`
                        );
                        toastAlertTextTag.classList.add("toastAlertText");
                        toastAlertTextTag.style.marginTop=".3rem"
                        // create AcceptButtonTag
                        const closeButtonTag = document.createElement("div");
                        closeButtonTag.append("Accept");
                        closeButtonTag.style.backgroundColor = "var(--first-color)";
                        closeButtonTag.style.color = "#fff";
                        closeButtonTag.style.display = "inline-block";
                        closeButtonTag.style.padding = ".5rem";
                        closeButtonTag.style.borderRadius = ".5rem";
                        closeButtonTag.style.cursor = "pointer";
                        closeButtonTag.classList.add("button","ms-3");
                        // create AcceptButtonTag
                        const closeUnAcceptButtonTag = document.createElement("div");
                        closeUnAcceptButtonTag.append("Close");
                        closeUnAcceptButtonTag.style.backgroundColor = "var(--first-color)";
                        closeUnAcceptButtonTag.style.color = "#fff";
                        closeUnAcceptButtonTag.style.display = "inline-block";
                        closeUnAcceptButtonTag.style.padding = ".5rem";
                        closeUnAcceptButtonTag.style.borderRadius = ".5rem";
                        closeUnAcceptButtonTag.style.cursor = "pointer";
                        closeUnAcceptButtonTag.classList.add("button","ms-1");
                        // append toastAlertTextTag, closeButtonTag to toastAlertContainerTag
                        toastAlertContainerTag.append(toastAlertTextTag, closeButtonTag, closeUnAcceptButtonTag);

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
                     const accept = localStorage.getItem('accepted');
                            if (accept != "1") {
                                openToastAlert();
                            }
        }
    }
}
</script>

<style scoped>
/* Accept Cookiees */
.accept-cokkiee {
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: center;
  transition: bottom 0.4s ease-in-out;
  color: var(--first-color);
  background-color: rgb(247, 247, 247);
  z-index: var(--z-fixed);
  box-shadow: 5px 0 1px rgba(15, 15, 15, 0.15);
}

.dark {
  background: #242f3f;
}
/* @media screen and (max-width: 320px) {
  .button{

  }

} */

</style>