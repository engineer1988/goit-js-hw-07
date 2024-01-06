function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const createFocusBtn = document.querySelector('[data-create]');
const destroyFocusBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

createFocusBtn.addEventListener('click', createBoxes);

function createBoxes() {
  let i = 0;
  let b = 30;
  while (i < numberInput.value) {
    const item = document.createElement('div');
    item.style.width = b + 'px';
    item.style.height = b + 'px';
    item.style.backgroundColor = getRandomHexColor();
    boxes.append(item);
    i++;
    b += 10;
  }
}

destroyFocusBtn.addEventListener('click', () => {
  numberInput.value = '';
});
