function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const createFocusBtn = document.querySelector('[data-create]');
const destroyFocusBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createFocusBtn.addEventListener('focus', createBoxes);

function createBoxes() {
  if (boxes.hasChildNodes()) {
    destroyBoxes();
  }
  let i = 0;
  let b = 30;
  let item;
  while (
    i < numberInput.value &&
    numberInput.value >= 1 &&
    numberInput.value <= 100
  ) {
    item = document.createElement('div');
    boxes.append(item);
    item.style.width = b + 'px';
    item.style.height = b + 'px';
    item.style.backgroundColor = getRandomHexColor();
    i++;
    b += 10;
  }
  numberInput.value = '';
}

destroyFocusBtn.addEventListener('focus', destroyBoxes);
function destroyBoxes() {
  let item1 = document.querySelectorAll('#boxes div');
  const result = item1.forEach(element => {
    element.remove();
  });
  return result;
}
