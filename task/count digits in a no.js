let number = 123456;
let count = 0;

let temp = number; 

if (temp === 0) {
  count = 1;
} else {
  while (temp > 0) {
    temp = Math.floor(temp / 10);
    count++; 
  }
}

console.log(`The number of digits in ${number} is ${count}.`);