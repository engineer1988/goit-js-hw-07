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
const categories = document.querySelectorAll('.item ul');
const numberOfCategories = categories.length;
console.log(`Number of categories: ${numberOfCategories}`);

const cat = document.querySelectorAll('h2');
const category = cat.forEach(element =>
  console.log(`Category: ${element.textContent}`)
);
