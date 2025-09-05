import { getAnimationCamment } from "./components/commentsScript.js";
import { openForm, closeForm } from "./components/animationRequestForm.js";
import { postApplication } from "./components/postApplications.js";
import { renderCardProject } from "./components/renderProjectCard.js";
import { getInformationServices } from "./components/getServices.js";

document.addEventListener("DOMContentLoaded", () => {
  // анимация отзывов
  getAnimationCamment();

  // гегерация карточек
  renderCardProject(document.querySelector(".work__list"));

  // открытие формы
  document.querySelector(".btn.btn--call").addEventListener("click", (e) => {
    e.preventDefault();
    openForm();
  });

  // отправка данных и открытие формы
  document
    .querySelector(".btn.btn--submit")
    .addEventListener("click", async (e) => {
      e.preventDefault();
      postApplication();
    });

  // блюр зажнего фона
  document.querySelector(".overlay").addEventListener("click", (e) => {
    if (e.target === document.querySelector(".overlay")) {
      closeForm();
    }
  });

  // закрытие на ESC
  document.addEventListener("keydown", (e) => {
    if (
      e.key === "Escape" &&
      document.querySelector(".overlay").classList.contains("active")
    ) {
      closeForm();
    }
  });

  // описание сервисов
  document.querySelector("#item__web-desing").addEventListener("click", (e) => {
    e.preventDefault();
    getInformationServices();
  });
});
