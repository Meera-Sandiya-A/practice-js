// Pangram Check
// Given a string, Check whether the string is pangram or not
// pangram which contains all the alphabets in a given string
// which satisfies the given condition

// Input: “Five or six big jet planes zoomed quickly by the tower.”
// Input: "The brown fox quick jumps over the lazy dog"

// Solution-1
// ---------------------------------------
// function isPangram(str) {
//   let strLowerCase = str.toLowerCase();

//   for (let i = 97; i <= 122; i++) {
//     if (!strLowerCase.includes(String.fromCharCode(i))) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPangram("The brown fox quick jumps over the lazy dog"));

// Time Complexity:

// ===========================================================================

// Solution -2 return missing character
// ------------------------------------------------
// function isPanagram1(str) {
//   let strLowerCase = str.toLowerCase();
//   let missingChar = "";
//   let notPangram = false;

//   for (let i = 97; i <= 122; i++) {
//     if (!strLowerCase.includes(String.fromCharCode(i))) {
//       missingChar += String.fromCharCode(i);
//     }
//   }

//   if (!notPangram) {
//     return `It is not pangram, because it doesn't have "${missingChar}"`;
//   }

//   return "It is true";
// }
// console.log(isPanagram1("The brown fox quick jumps over the dog"));
