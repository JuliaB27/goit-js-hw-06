const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector('#ingredients');

const itemsAll = ingredients.map((ingredients) => {
  const list = document.createElement('li');
  list.textContent = ingredients;
  list.classList.add('.item');
  console.log(list);
  return list;
});

listIngredients.append(...itemsAll);
