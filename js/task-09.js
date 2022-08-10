// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

const bodyRef = document.querySelector('body');

const btnEl = document.querySelector('.change-color');

const hexText = document.querySelector('.color');

btnEl.addEventListener("click", onhexColor);

function onhexColor() {
  const hexColor = getRandomHexColor();
  bodyRef.style.backgroundColor = hexColor;
  hexText.textContent = hexColor;
  console.log(hexColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
