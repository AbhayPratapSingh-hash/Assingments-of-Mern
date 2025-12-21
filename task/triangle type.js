//Determine the type of triangle (Equilateral, Isosceles, or Scalene) based on the lengths of its sides.


let a = 5;
let b = 5;
let c = 5; 

if (a === b && b === c) {
  console.log("Equilateral Triangle: All sides are equal.");
} else if (a === b || b === c || a === c) {
  console.log("Isosceles Triangle: Two sides are equal.");
} else {
  console.log("Scalene Triangle: All sides are different.");
}