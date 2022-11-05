const refs = {
  input: document.querySelector("#name-input"),
  nameId: document.querySelector("#name-output"),
};

const onInputChange = (event) => {
  console.log(event.currentTarget.value);
  refs.input.value.length === 0
    ? (refs.nameId.textContent = "Anonymous")
    : (refs.nameId.textContent = event.currentTarget.value);
};

refs.input.addEventListener("input", onInputChange);
