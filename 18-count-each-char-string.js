// Count the occurance of each character in a given string

// Solution
// ------------------------------------------------------------------
// function countCharacters(str) {
//   let str1 = str.toLowerCase();
//   let charCount = {};

//   for (let char of str1) {
//     // Ignore spaces (if you want to count spaces, remove the if condition)
//     if (char !== " ") {
//       charCount[char] = (charCount[char] || 0) + 1;
//     }
//   }
//   return charCount;
// }
// console.log(countCharacters("hello wOrld"));

// // Time Complexity: O(n)
