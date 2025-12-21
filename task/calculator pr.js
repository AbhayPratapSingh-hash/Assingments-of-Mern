// Calculator Program
//Perform addition, subtraction, multiplication, or division based on user input (e.g., using if-else or switch).


let num1 = 10;
let num2 = 5;
let operator = '*';

if (operator === '+') {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
} else if (operator === '-') {
  console.log(`${num1} - ${num2} = ${num1 - num2}`);
} else if (operator === '*') {
  console.log(`${num1} * ${num2} = ${num1 * num2}`);
} else if (operator === '/') {
  if (num2 !== 0) {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  } else {
    console.log("Error: Division by zero .");
  }
} else {
  console.log("Invalid operator.");
}