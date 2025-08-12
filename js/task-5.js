const colorBtn = document.querySelector('.change-color');
const docBody = document.querySelector('body');
const colorName = document.querySelector('.color');

colorBtn.addEventListener('click', colorBtnClickHandler);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

function colorBtnClickHandler() {
  docBody.style.backgroundColor = getRandomHexColor();
  colorName.textContent = docBody.style.backgroundColor;
};