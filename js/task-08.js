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
  formData.forEach((value, name) => console.log(name, value));

  event.currentTarget.reset();
};

refs.form.addEventListener("submit", onFormSubmit);
