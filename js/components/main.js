import { Swiper } from "../vendor/Swiper.js";

var swiper = new Swiper(".swiper", {
  slidesPerView: 3.5,
  spaceBetween: 15,

  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
});
