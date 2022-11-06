const refs = {
  form: document.querySelector(".login-form"),
};

const onFormSubmit = (event) => {
  event.preventDefault();

  const formElements = event.currentTarget.elements;

  if (formElements.email.value === "" || formElements.password.value === "") {
    return alert("Є незаповненні поля)");
  }
  const formData = new FormData(event.currentTarget);

  const infoData = {};
  for (let key of formData) {
    infoData[key] = key;
  }
  console.log(infoData);

  event.currentTarget.reset();
};

refs.form.addEventListener("submit", onFormSubmit);
