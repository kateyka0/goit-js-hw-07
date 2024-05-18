function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.getElementById('controls');
const input = controls.querySelector('input');
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const boxes = document.getElementById('boxes');

input.style.border = '1px solid #808080';
input.style.borderRadius = '8px';
input.style.padding = '8px';
input.style.width = '150px';
input.style.height = '40px';
createButton.style. borderRadius = '8px';
createButton.style.padding = '8px 16px';
createButton.style.width = '120px';
createButton.style.height = '40px';
createButton.style.background = '#4e75ff';
createButton.style.color = '#fff';
createButton.style.border = 'none';
createButton.style.marginLeft = '16px';
createButton.style.marginRight = '16px';
destroyButton.style. borderRadius = '8px';
destroyButton.style.padding = '8px 16px';
destroyButton.style.width = '120px';
destroyButton.style.height = '40px';
destroyButton.style.background = '#ff4e4e';
destroyButton.style.color = '#fff';
destroyButton.style.border = 'none';
destroyButton.style.marginLeft = '16px';
destroyButton.style.marginRight = '16px';
boxes.style.display = 'flex';
boxes.style.flexWrap = 'wrap';
boxes.style.gap = '48px';
boxes.style.marginTop = '48px'

function createBoxes(amount) {
  destroyBoxes();
  const elements = [];
  let size = 30;
  
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    elements.push(box);
    size += 10;
  }
  boxes.append(...elements);
}

function destroyBoxes() {
  boxes.innerHTML = '';
}

createButton.addEventListener('click', () => {
  const amount = parseInt(input.value.trim(), 10);

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = '';
  } else {
    alert('Please enter a number between 1 and 100.');
  }
});

destroyButton.addEventListener('click', () => {
  destroyBoxes();
});