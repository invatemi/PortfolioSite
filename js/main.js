import { getAnimationCamment } from "./components/commentsScript.js";

document.addEventListener("DOMContentLoaded", () => {
  getAnimationCamment();

  // !
  const body = document.body;
  const buttonELopen = document.querySelector(".btn.btn--call");
  const request = document.querySelector(".request-info");
  const buttonELclose = document.querySelector(".btn.btn--submit");
  const overlay = document.querySelector(".overlay");

  const openForm = () => {
    body.classList.add("body--hide");
    request.classList.add("request-info--active");
    overlay.classList.add("active");
  };

  const closeForm = () => {
    body.classList.remove("body--hide");
    request.classList.remove("request-info--active");
    overlay.classList.remove("active");
  };

  buttonELopen.addEventListener("click", (e) => {
    e.preventDefault();
    openForm();
  });

  buttonELclose.addEventListener("click", (e) => {
    e.preventDefault();
    alert("заявка отправлена, скоро с вами свяжуться");
    // todo
    closeForm();
  });

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
      closeForm();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay.classList.contains("active")) {
      closeForm();
    }
  });
});
