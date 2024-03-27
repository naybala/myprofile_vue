const imageView = (el) => {
  const popup = document.querySelector("#popup");
  const gallery = document.querySelector("#" + el);
  const selectedImage = document.querySelector("#selectedImage");
  selectedImage.src = gallery.src;
  popup.style.transform = `translateY(0%)`;
  popup.addEventListener("click", () => {
    popup.style.transform = `translateY(-100%)`;
    popup.src = "";
  });
};
export default imageView;
