//Check Vowel or Consonant
// Check if a given character is a vowel or a consonant.

let ch = 'e'; 

ch = ch.toLowerCase();

if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
  console.log(`${ch} is a vowel.`);
} else if (ch >= 'a' && ch <= 'z') {
  console.log(`${ch} is a consonant.`);
} else {
  console.log(`${ch} is not an alphabet character.`);
}