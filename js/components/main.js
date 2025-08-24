import Swiper from "../vendor/Swiper";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

// Now you can use Swiper
const swiper = new Swiper(".swiper", {
  // Install modules
  modules: [Navigation, Pagination, Scrollbar],
  speed: 500,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  // ...
});
