const refs = {
  input: document.querySelector("#validation-input"),
};

const notFocusInput = (event) => {
  console.log(event.currentTarget.value.length);
  console.log(Number(refs.input.dataset.length));
  event.currentTarget.value.length !== Number(refs.input.dataset.length)
    ? refs.input.classList.add("invalid")
    : refs.input.classList.add("valid");
};

refs.input.addEventListener("blur", notFocusInput);
