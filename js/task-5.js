function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector("body");
const colorSpan = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
changeColorBtn.addEventListener("click", () => {
  const randomColore = getRandomHexColor();
  body.style.backgroundColor = randomColore;
  colorSpan.textContent = randomColore;
});
const style = document.createElement('style');
style.textContent = `
.change-color {
color: #fff;
border: none;
  border-radius: 8px;
padding: 8px 16px;
width: 148px;
height: 40px;
background: #4e75ff;}`;
document.head.append(style);