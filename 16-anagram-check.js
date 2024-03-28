// Anagram Check
// Function to check whether two strings are anagram of each other

// Solution-1 Hashing Method
// ------------------------------------------------------------
// function isAnagram1(str1, str2) {
//   // Remove empty spaces manually
//   let str1NoSpaces = "";
//   let str2NoSpaces = "";

//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] !== " ") {
//       str1NoSpaces += str1[i];
//     }
//   }
//   for (let i = 0; i < str2.length; i++) {
//     if (str2[i] !== " ") {
//       str2NoSpaces += str2[i];
//     }
//   }

//   if (str1NoSpaces.length !== str2NoSpaces.length) {
//     return "It is not Anagram, length is not matched";
//   }

//   str1NoSpaces = str1NoSpaces.toLowerCase();
//   str2NoSpaces = str2NoSpaces.toLowerCase();

//   let counter = {};

//   for (let char of str1NoSpaces) {
//     counter[char] = counter[char] ? counter[char] + 1 : 1;
//   }

//   for (let items of str2NoSpaces) {
//     if (!counter[items]) {
//       return false;
//     }
//     counter[items] = counter[items] - 1;
//   }

//   return "The strings are Anagram";
// }
// console.log(isAnagram1("ice man", "cin Em a"));

// time complexity: O(n)

// ===========================================================

// // Solution-2 using built-in method
// // ----------------------------------------------------
// function areAnagram(str1, str2) {
//   let strLen1 = str1.length;
//   let strLen2 = str2.length;

//   if (strLen1 != strLen2) return false;

//   let strLower1 = str1.toLowerCase();
//   let strLower2 = str2.toLowerCase();

//   const sortedStr1 = strLower1.split("").sort().join("");
//   const sortedStr2 = strLower2.split("").sort().join("");
//   console.log(sortedStr1, sortedStr2);

//   if (sortedStr1 != sortedStr2) return false;

//   return "It is Anagram";
// }
// console.log(areAnagram("listen", "silenT"));

// time complexity: O(n log n) worst case

// // ====================================================================

// // Solution-3
// // ------------------------------------------------------------

// function isAnagram2(str1, str2) {
//   if (str1.length !== str2.length) {
//     return "It is not Anagram, length is not matched";
//   }

//   const sortedString1 = str1.sort();
//   const sortedString2 = str2.sort();

//   for (let i = 0; i < str1.length; i++) {
//     if (sortedString1[i] !== sortedString2[i]) {
//       return "It is not Anagram";
//     }
//   }

//   return "It is Anagram";
// }

// let string1 = ["t", "e", "s", "t"];
// let string2 = ["t", "t", "e", "s"];
// console.log(isAnagram2(string1, string2));
