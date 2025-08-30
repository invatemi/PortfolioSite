import { getDataReviews } from "../components/getData.js";

export const renderCardReviews = async () => {
  try {
    const information = await getDataReviews();
    const sortDataReviwes = await information.data.sort((num1, num2) => {
      return num1.id_reviews - num1.id_reviews;
    });

    sortDataReviwes.forEach((element) => {
      console.log(
        "Формируем список комментариев из полученных данных",
        element
      );
      //   прописываем код для создания комментариев
      //   !
    });
  } catch (error) {
    console.error("Ошибка при загрузке данных:", error);
  }
};
