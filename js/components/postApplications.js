export const postApplication = async () => {
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
};
