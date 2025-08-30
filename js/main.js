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

  buttonELclose.addEventListener("click", async (e) => {
    e.preventDefault();

    const data = {
      name_application: document.querySelector("#name-fildset").value.trim(),
      phone_application: document.querySelector("#phone-fildset").value.trim(),
      email_application: document.querySelector("#email-fildset").value.trim(),
    };

    try {
      const response = await fetch("http://localhost:3000/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Добавьте проверку статуса ответа
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        alert("Заявка отправлена, скоро с вами свяжутся!");
      } else {
        alert("Ошибка при отправке: " + result.message);
      }
    } catch (error) {
      console.error("Ошибка сети:", error);
      alert("Ошибка соединения с сервером");
    } finally {
      closeForm(); // Закрываем форму в любом случае
    }
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
