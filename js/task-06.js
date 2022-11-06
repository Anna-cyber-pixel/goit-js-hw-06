const refs = {
  input: document.querySelector("#validation-input"),
};

const notFocusInput = (event) => {
  console.log(event.currentTarget.value.length);
  console.log(Number(refs.input.dataset.length));
  if (event.currentTarget.value.length === Number(refs.input.dataset.length)) {
    if (refs.input.classList.contains("invalid")) {
      refs.input.classList.remove("invalid");
    }
    refs.input.classList.add("valid");
  } else {
    if (refs.input.classList.contains("valid")) {
      refs.input.classList.remove("valid");
    }
    refs.input.classList.add("invalid");
  }
};

refs.input.addEventListener("blur", notFocusInput);
