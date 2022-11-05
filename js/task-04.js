const refs = {
  decrementBtn: document.querySelector('button[data-action="decrement"]'),
  incrementBtn: document.querySelector('button[data-action="increment"]'),
  value: document.querySelector("#value"),
};

let count = 0;
const render = () => {
  refs.value.textContent = count;
};

const handleDecrement = () => {
  count -= 1;
  render();
};

const handleIncrement = () => {
  count += 1;
  render();
};

refs.decrementBtn.addEventListener("click", handleDecrement);
refs.incrementBtn.addEventListener("click", handleIncrement);
