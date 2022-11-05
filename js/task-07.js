const refs = {
  input: document.querySelector("#font-size-control"),
  textRef: document.querySelector("#text"),
};

const changeFrontSize = () => {
  refs.textRef.style.fontSize = `${refs.input.value}px`;
};

refs.input.addEventListener("input", changeFrontSize);
