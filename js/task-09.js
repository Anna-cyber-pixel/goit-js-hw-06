function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  colorEl: document.querySelector(".color"),
  changeColorEl: document.querySelector(".change-color"),
  body: document.querySelector("body"),
};

const onColorBodyChange = () => {
  refs.body.style.backgroundColor = getRandomHexColor();
  refs.colorEl.textContent = refs.body.style.backgroundColor;
};

refs.changeColorEl.addEventListener("click", onColorBodyChange);
