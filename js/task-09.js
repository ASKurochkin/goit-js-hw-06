function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector(".change-color");
const bgdColor = document.querySelector(".color");

const changeBackground = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  bgdColor.textContent = color;
}

changeBtn.addEventListener("click", changeBackground);
