const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsList = document.querySelector('#ingredients');

const item = el => {
const itemEl = document.createElement('li');
itemEl.classList.add('item');
itemEl.textContent = el;
console.log(itemEl);
return itemEl};

const list = ingredients.map( el => item(el));
console.log(list);

ingredientsList.append(...list);


