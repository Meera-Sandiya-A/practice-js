// Is there a vowel in there?
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).
// If they are, change the array value to a string of that vowel.
// Return the resulting array.

// Solution-1
// ----------------------------------
// function isVowel1(vowel) {
//   let vowelCode = {
//     97: "a",
//     101: "e",
//     105: "i",
//     111: "o",
//     117: "u",
//   };

//   for (let i = 0; i < vowel.length; i++) {
//     if (vowelCode[vowel[i]]) {
//       vowel[i] = vowelCode[vowel[i]];
//     }
//   }
//   return vowel;
// }

// console.log(isVowel1([97, 101, 103, 105, 111, 200]));

// time complexity: O(n)
// ============================================================

// // Solution-2 Count the number of vowels
// -------------------------------------------------
// function countVowels(str) {
//   const vowels = "aeiouAEIOU";
//   let count = 0;

//   for (let letter of str) {
//     if (vowels.includes(letter)) {
//       count++;
//     }
//   }
//   return count;
// }
// // console.log(countVowels("Hello MEera")); // 5

// time complexity: O(n)
