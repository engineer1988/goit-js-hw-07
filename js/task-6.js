function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const numberInput = document.querySelector('input');
const createFocusBtn = document.querySelector('[data-create]');
const destroyFocusBtn = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');
const width = 30;
const height = 30;
const increment = 10;

createFocusBtn.addEventListener('click', createBoxes);

function createBoxes() {
  const amount = Number(numberInput.value);

  if (boxes.hasChildNodes()) {
    destroyBoxes();
  }

  if (amount >= 1 && amount <= 100) {
    let i = 0;

    while (i < amount) {
      let item = document.createElement('div');
      boxes.append(item);
      item.style.width = width + increment * i + 'px';
      item.style.height = height + increment * i + 'px';
      item.style.backgroundColor = getRandomHexColor();
      i++;
    }
  }
  numberInput.value = '';
}

destroyFocusBtn.addEventListener('click', destroyBoxes);

function destroyBoxes() {
  boxes.innerHTML = '';
}
