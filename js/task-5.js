const widget = document.querySelector('body');
const color = document.querySelector('.color');
const changeColor = document.querySelector('.change-color');
changeColor.addEventListener('click', getRandoHmexColor);

function getRandoHmexColor() {
  return (widget.style.backgroundColor = color.textContent =
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`);
}
