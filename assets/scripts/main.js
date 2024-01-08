const items = document.getElementsByClassName("accordion-item");

for (let a = 0; a < items.length; a++) {
  items[a]
    .querySelector(".accordion-button")
    .addEventListener("click", function () {
      if (this.classList.contains("active")) {
        this.querySelector(".accordion-icon").src =
          "/assets/images/icon-plus.svg";
      } else {
        this.querySelector(".accordion-icon").src =
          "/assets/images/icon-minus.svg";
      }
      this.classList.toggle("active");
      this.parentElement.children[1].classList.toggle("active");
    });
}
