const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const IngredientsList = document.querySelector('#ingredients');
const array = ingredients.map(element => {
  const newIngredientsEl = document.createElement('li');
  newIngredientsEl.classList.add('ingridient-item');
  newIngredientsEl.textContent = element;
  return newIngredientsEl;
});

IngredientsList.append(...array);

console.log(IngredientsList)