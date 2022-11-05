const categoryLength = document.querySelector("#categories").children.length;
console.log("Number of categories: ", categoryLength);

const category = document.querySelector("#categories").children;

const categoryCount = [...category].forEach((el) => {
  console.log("Category: ", el.firstElementChild.textContent);
  console.log("Elements: ", el.lastElementChild.children.length);
});
