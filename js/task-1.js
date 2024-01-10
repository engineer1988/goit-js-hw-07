const elements = document.querySelectorAll('.item');
const numberOfCategories = elements.length;
console.log(`Number of categories: ${numberOfCategories}`);

const result = elements.forEach(element => {
  console.log('Category: ' + element.querySelector('h2').textContent);
  console.log('Elements: ' + element.querySelector('ul').children.length);
});
