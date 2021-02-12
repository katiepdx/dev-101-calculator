export const add = ((num1, num2) => num1 + num2);
export const subtract = ((num1, num2) => num1 - num2);
export const multiply = ((num1, num2) => num1 * num2);
export const divide = ((num1, num2) => num1 / num2);

export const calculator = ((firstInputId, secondInputId, buttonId, resultsId, calculation) => {
  const input1 = document.getElementById(firstInputId);
  const input2 = document.getElementById(secondInputId);
  const display = document.getElementById(resultsId);
  const button = document.getElementById(buttonId);

  button.addEventListener('click', () => {
    const num1 = Number(input1.value);
    const num2 = Number(input2.value);
    const total = calculation(num1, num2);
    display.textContent = total;
  });
});
