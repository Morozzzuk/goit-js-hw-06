// * Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsEl = document.querySelector('#ingredients');
console.log(ingredientsEl);
console.log(ingredients);

const listRefs = ingredients.map((ingredient) => {
  const listRefs = document.createElement('li');
  listRefs.classList.add('item');
  listRefs.textContent = ingredient;
  return listRefs;
});
ingredientsEl.append(...listRefs);