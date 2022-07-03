import mobileImg from "../assets/mobile/*.jpg";
import desktopImg from "../assets/desktop/*.jpg";

// Assets images urls
const rawImages = [
  "image-deep-earth",
  "image-night-arcade",
  "image-soccer-team",
  "image-grid",
  "image-from-above",
  "image-pocket-borealis",
  "image-curiosity",
  "image-fisheye",
];

// Get the UI Elements
const nav_menu = document.querySelector(".nav_menu");
const hamburger = document.querySelector(".hamburger");
const mobile_menu = document.querySelector(".menu");
const bodyP = document.body;

// Functions
const changeImages = function () {
  const galArray = [...galImages];
  if (window.innerWidth >= 800) {
    for (let i = 0; i < galArray.length; i++) {
      galArray[i].src = desktopImg[rawImages[i]];
      // galArray[i].src = require(`./../assets/desktop/${rawImages[i]}.jpg`);
      // galArray[i].src = new URL(
      //   `assets/desktop/${rawImages[i]}.jpg`,
      //   import.meta.url
      // );
    }
  } else {
    for (let i = 0; i < galArray.length; i++) {
      galArray[i].src = mobileImg[rawImages[i]];
      // galArray[i].src = require(`./../assets/mobile/${rawImages[i]}.jpg`);
      // galArray[i].src = new URL(
      //   `assets/mobile/${rawImages[i]}.jpg`,
      //   import.meta.url
      // );
    }
  }
};

// Event Listener
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  mobile_menu.classList.toggle("active");
  bodyP.classList.toggle("bactive");
});

window.onscroll = function (e) {
  nav_menu.classList.toggle("scrolling_menu", window.scrollY > 50);
};

window.addEventListener("resize", changeImages);

const galImages = document
  .querySelector(".galery_grid")
  .getElementsByTagName("img");

// init images
changeImages();
