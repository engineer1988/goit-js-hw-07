// const title = document.querySelectorAll('h2');
// title.style.fontSize = '24px';
// title.style.color = 'tomato';
// title.style.fontWeight = '600';
// title.style.lineHeight = '1.33';
// title.style.letterSpacing = '0.04em';
// const title1 = title
//   .forEach(
//     element =>
//       (element.style =
//         'color: #2E2F42; font-size: 24px; font-weight: 600; line-height: 1.33; letter-spacing: 0.04em;')
//   )
//   .join('');

const elements = document.querySelectorAll(' .item');
const numberOfCategories = elements.length;
console.log(`Number of categories: ${numberOfCategories}`);

// for (let i = 0; i < elements.length; i++) {
//   console.log('Category: ' + elements[i].children[0].textContent);
//   console.log('Elements: ' + elements[i].children[1].children.length);
// }
const result = elements.forEach(element => {
  console.log('Category: ' + element.children[0].textContent);
  console.log('Elements: ' + element.children[1].children.length);
});
