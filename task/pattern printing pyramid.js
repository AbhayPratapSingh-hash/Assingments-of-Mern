
// Print a pyramid pattern of * of height n using nested loops.

let n= 5;

for (let i = 1; i <= n; i++) { 
// the loop (i) controls the number of rows (height of the pyramid)
  let pattern = "";

  for (let j = 1; j <= n - i; j++) { 
   loop (j)// prints spaces so that stars are centered
    pattern += " ";
  }
  for (let k = 1; k <= 2 * i - 1; k++) {
 loop (k)// prints the correct number of stars for the current row — notice 2 * i - 1 gives the pattern 1, 3, 5, 7, ...
    pattern += "*";
  }

  console.log(pattern);
}