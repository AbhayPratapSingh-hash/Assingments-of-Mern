let number = 45455612;
let sum = 0;

let temp  = number;

while(temp> 0){
    let digit = temp%10;
    sum += digit;
    temp = Math.floor(temp/10);
}

console.log(`The sum of digit ${number} is ${sum}`);