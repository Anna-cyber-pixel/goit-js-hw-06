const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

const item = (ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = ingredient;
  console.log(itemEl);
  return itemEl;
};

const list = ingredients.map((ingredient) => item(ingredient));
console.log(list);

ingredientsList.append(...list);
