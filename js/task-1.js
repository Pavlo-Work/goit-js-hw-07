'use strict';

const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(category => {
  const categoryTitle = category.querySelector('h2');
  const categoryItems = category.querySelectorAll('li');

  console.log(`Category: ${categoryTitle.textContent}`);
  console.log(`Elements: ${categoryItems.length}`);
});
