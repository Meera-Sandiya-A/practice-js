// Palindrome Check

// Solution-1
// ------------------------------------------
// function isPalindrome1(str) {
//   let endIdx = str.length - 1;

//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== str[endIdx]) {
//       return "It is not Palindrome";
//     }
//     endIdx--;
//   }
//   return "It is Palindrome";
// }
// console.log(isPalindrome1("abcdcba"));

// ==================================================

// Solution-2 Two Pointer Sum
// --------------------------------------------------
// function isPalindrome2(str) {
//   let startIdx = 0;
//   let endIdx = str.length - 1;

//   while (startIdx < endIdx) {
//     if (str[startIdx] !== str[endIdx]) {
//       return "It is not palindrome";
//     }
//     startIdx++;
//     endIdx--;
//   }
//   return "It is palindrome";
// }
// console.log(isPalindrome2("dawd"));

// Time Complexity: O(n)
// Space Complexity: O(1)

// ========================================================

// Solution-3
// --------------------------------------------------------
// function isPalindrome3(str) {
//   let revChar = "";
//   let endIdx = str.length - 1;

//   for (let i = endIdx; i >= 0; i--) {
//     revChar += str[i];
//   }
//   return str === revChar;
// }
// console.log(isPalindrome3("abcdsba"));

// Time Complexity: O(n)
// Space Complexity: O(n)

// ============================================================

// Solution-4 Using built-in
// --------------------------------------------------------
// function isPalindrome4(str) {
//   const arrValues = str.split("");
// //  console.log(arrValues); // [ 'e', 'f', 'g', 'k', 'e' ]
// //  const revArrValues = arrValues.reverse(); // [ 'e', 'k', 'g', 'f', 'e' ]
//   console.log(revArrValues);
//   const revString = revArrValues.join("");
//   console.log(revString);

//   if (str !== revString) {
//     return "It is not palindrome";
//   }
//   return "It is palindrome";
// }
// console.log(isPalindrome4("efgke"));
