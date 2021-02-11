// ADDITION
const add1 = document.getElementById('add-1')
const add2 = document.getElementById('add-2')
const addTotal = document.getElementById('add-total')
const addButton = document.getElementById('add-button')

addButton.addEventListener('click', () => {
  const total = Number(add1.value) + Number(add2.value)
  addTotal.textContent = total
})

// SUBTRACT
const subtract1 = document.getElementById('subtract-1')
const subtract2 = document.getElementById('subtract-2')
const subtractTotal = document.getElementById('subtract-total')
const subtractButton = document.getElementById('subtract-button')

subtractButton.addEventListener('click', () => {
  const total = Number(subtract1.value) - Number(subtract2.value)
  subtractTotal.textContent = total
})

// MULTIPLICATION
const multiplication1 = document.getElementById('multiply-1')
const multiplication2 = document.getElementById('multiply-2')
const multiplicationTotal = document.getElementById('multiply-total')
const multiplicationButton = document.getElementById('multiply-button')

multiplicationButton.addEventListener('click', () => {
  const total = Number(multiplication1.value) * Number(multiplication2.value)
  multiplicationTotal.textContent = total
})

// DIVIDE
const divide1 = document.getElementById('divide-1')
const divide2 = document.getElementById('divide-2')
const divideTotal = document.getElementById('divide-total')
const divideButton = document.getElementById('divide-button')

divideButton.addEventListener('click', () => {
  const total = Number(divide1.value) / Number(divide2.value)
  divideTotal.textContent = total
})
