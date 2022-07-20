const header = document.querySelector(".header");
const popup = document.querySelector(".cookie-popup__wrapper");
const popupBtn = document.querySelector(".accept-btn");
const popupLink = document.querySelector(".popup-link");

document.addEventListener("scroll", () => {
  let height = window.scrollY;

  if (height >= 60) {
    header.style.background = "rgba(27, 4, 54, 0.8)";
  }

  if (height < 60) {
    header.style.background = "rgba(27, 4, 54, 0.2)";
  }
});

popupBtn.addEventListener("click", () => (popup.style.display = "none"));
popupLink.addEventListener("click", () => (popup.style.display = "none"));
