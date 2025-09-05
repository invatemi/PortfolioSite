const body = document.body;
const request = document.querySelector(".request-info");
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

export { openForm, closeForm };
