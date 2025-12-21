// Generate the first n terms of the Fibonacci sequence using a loop.
// loop
let number = 10;
let n1 =0;
let n2= 1;

console.log("Fib Series")
for(let i =1; i <= number; i++){
    console.log(n1);
    
let next = n1 + n2;
n1 = n2;
n2 = next ;
}

// function fib(n){
//     if(n <=1) return n;
//     return fib(n-1)+fib(n-2);
// }

// console.log(fib(6));