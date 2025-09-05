export const getInformationServices = () => {
  document.querySelector(".services__information-titel").textContent =
    "Web Design";
  document.querySelector(".services__information-description").textContent =
    "Создаем современные и понятные интерфейсы, которые нравятся пользователям";
  document.querySelector(".services__information-base").textContent =
    "Мы превращаем ваши цели в цифровой опыт, который приносит результат. Наша философия проста: если интерфейс красивый и интуитивно понятный, пользователи остаются дольше, доверяют больше и возвращаются чаще. Мы проектируем не просто страницы, а инструменты для роста вашего бизнеса, делая акцент на удобстве, эстетике и сильном бренде.";
  document.querySelector(".services__information-advantages").textContent =
    "Ключевые преимущества:";
  document
    .querySelectorAll(".services__information-item")
    .forEach((element, index) => {
      const elementText = [
        "Повышение конверсии и лояльности клиентов",
        "Укрепление узнаваемости бренда",
        "Адаптивный дизайн для всех устройств",
        "Скорость и современные технологии",
      ];
      element.textContent = elementText[index];
    });

  document
    .querySelector(".services-information")
    .classList.add("services-information--active");

  setTimeout(() => {
    document
      .querySelector(".services-information")
      .classList.remove("services-information--active");
  }, 30000);
};

document
  .querySelector("#item__web-development")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".services__information-titel").textContent =
      "Web Development";
    document.querySelector(".services__information-description").textContent =
      "Превращаем готовый дизайн в работающий сайт.";
    document.querySelector(".services__information-base").textContent =
      "Мы — техническое сердце вашего проекта, которое оживляет макеты. Наша задача — сделать так, чтобы каждый элемент работал безупречно: кнопки нажимались, формы отправлялись, а страницы летали. Мы пишем не просто код, а создаем надежный фундамент для вашего онлайн-присутствия, который стабильно работает 24/7 и легко масштабируется под любые ваши ambitions.";
    document.querySelector(".services__information-advantages").textContent =
      "Ключевые преимущества:";
    document
      .querySelectorAll(".services__information-item")
      .forEach((element, index) => {
        const elementText = [
          "Молниеносная скорость загрузки и отклика",
          "Абсолютная адаптивность под любые устройства",
          "Чистый, структурированный и поддерживаемый код",
          "Надежность и стабильность работы каждого элемента",
        ];
        element.textContent = elementText[index];
      });

    document
      .querySelector(".services-information")
      .classList.add("services-information--active");

    setTimeout(() => {
      document
        .querySelector(".services-information")
        .classList.remove("services-information--active");
    }, 30000);
  });

document
  .querySelector("#item__complex-sites")
  .addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector(".services__information-titel").textContent =
      "Complex Sites";
    document.querySelector(".services__information-description").textContent =
      "Разрабатываем мощные веб-платформы и сервисы с индивидуальной логикой.";
    document.querySelector(".services__information-base").textContent =
      "Мы создаем не просто сайты, а сложные экосистемы для автоматизации и роста вашего бизнеса. Каждый проект — это уникальный цифровой организм с продуманной архитектурой, бесшовной интеграцией сервисов и мощным функционалом, который решает конкретные бизнес-задачи и открывает новые возможности.";
    document.querySelector(".services__information-advantages").textContent =
      "Ключевые преимущества:";
    document
      .querySelectorAll(".services__information-item")
      .forEach((element, index) => {
        const elementText = [
          "Полная автоматизация бизнес-процессов и рабочих потоков",
          "Интеграция с CRM, платежными системами и сторонними API",
          "Масштабируемая архитектура для роста и высоких нагрузок",
          "Безопасность данных и отказоустойчивость",
        ];
        element.textContent = elementText[index];
      });

    document
      .querySelector(".services-information")
      .classList.add("services-information--active");

    setTimeout(() => {
      document
        .querySelector(".services-information")
        .classList.remove("services-information--active");
    }, 30000);
  });
