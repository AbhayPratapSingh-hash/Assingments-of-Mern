// Program to find the largest of three numbers using nested if statements

let a = 25;
let b = 42;
let c = 17;


if (a >= b) {
  if (a >= c) {
    console.log(`${a} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
} else {
  if (b >= c) {
    console.log(`${b} is the largest number.`);
  } else {
    console.log(`${c} is the largest number.`);
  }
}