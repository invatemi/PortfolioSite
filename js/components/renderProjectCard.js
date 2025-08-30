import { getDataProject } from "../components/getData.js";

export const renderCardProject = async (teg) => {
  try {
    const dataProject = await getDataProject();
    const sortDataProject = await dataProject.data.sort((num1, num2) => {
      return num1.id_project - num2.id_project;
    });

    sortDataProject.forEach((element) => {
      console.log("Формируем список из полученных кеарточек: ", element);
      const itemCard = document.createElement("li");
      const cardDiv = document.createElement("div");
      const imgCard = document.createElement("img");
      const txtTegP = document.createElement("p");
      const txtTegSpanUp = document.createElement("span");
      const txtTegSpanBotom = document.createElement("span");

      itemCard.classList.add("work__item");
      cardDiv.classList.add("card-work");
      imgCard.classList.add("card-work__img");
      txtTegP.classList.add("card-work__txt");
      txtTegSpanUp.classList.add("card-work__up");
      txtTegSpanBotom.classList.add("card-work__bottom");

      imgCard.width = "600";
      imgCard.height = "600";
      imgCard.src = `${element.img_project}`;
      txtTegSpanUp.textContent = `${element.titel_project}`;
      txtTegSpanBotom.textContent = `${element.name_project}`;

      txtTegP.append(txtTegSpanUp, txtTegSpanBotom);
      cardDiv.append(imgCard, txtTegP);
      itemCard.append(cardDiv);

      teg.append(itemCard);
    });
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};
