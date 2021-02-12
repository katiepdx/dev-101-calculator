import { add, subtract, multiply, divide } from './utils.js';
const add1 = document.getElementById('add-1');
const add2 = document.getElementById('add-2');
const addTotal = document.getElementById('add-total');
const addButton = document.getElementById('add-button');

const subtract1 = document.getElementById('subtract-1');
const subtract2 = document.getElementById('subtract-2');
const subtractTotal = document.getElementById('subtract-total');
const subtractButton = document.getElementById('subtract-button');

const multiplication1 = document.getElementById('multiply-1');
const multiplication2 = document.getElementById('multiply-2');
const multiplicationTotal = document.getElementById('multiply-total');
const multiplicationButton = document.getElementById('multiply-button');

const divide1 = document.getElementById('divide-1');
const divide2 = document.getElementById('divide-2');
const divideTotal = document.getElementById('divide-total');
const divideButton = document.getElementById('divide-button');

addButton.addEventListener('click', () => {
  const num1 = Number(add1.value);
  const num2 = Number(add2.value);
  const total = add(num1, num2);
  addTotal.textContent = total;
});

subtractButton.addEventListener('click', () => {
  const num1 = Number(subtract1.value);
  const num2 = Number(subtract2.value);
  const total = subtract(num1, num2);
  subtractTotal.textContent = total;
});

multiplicationButton.addEventListener('click', () => {
  const num1 = Number(multiplication1.value);
  const num2 = Number(multiplication2.value);
  const total = multiply(num1, num2);
  multiplicationTotal.textContent = total;
});

divideButton.addEventListener('click', () => {
  const num1 = Number(divide1.value);
  const num2 = Number(divide2.value);
  const total = divide(num1, num2);
  divideTotal.textContent = total;
});
