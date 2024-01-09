const elements = document.querySelectorAll(' .item');
const numberOfCategories = elements.length;
console.log(`Number of categories: ${numberOfCategories}`);

const result = elements.forEach(element => {
  console.log('Category: ' + element.children[0].textContent);
  console.log('Elements: ' + element.children[1].children.length);
});
