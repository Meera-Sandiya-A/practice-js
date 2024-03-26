// Convert String to Array
// Write a function to split a string and convert it into an array of words.

// Solution-1
// ------------------------------------------------
// function stringToArray(string) {
//   return string.trim().split(" ");
// }

// const strings = "Robin Singh";
// const wordArray = stringToArray(strings);
// console.log(wordArray);

// ====================================================

// Solution-2
// ----------------------------------------------
// function stringToArray1(str) {
//   let resultArray = [];
//   let tempString = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== " ") {
//       tempString += str[i];
//     } else if (tempString.trim()) {
//       resultArray.push(tempString);
//       tempString = "";
//     }
//   }
//   resultArray.push(tempString);

//   return resultArray;
// }
// const strings = "Robin hello  ho Singh";
// const wordArray = stringToArray1(strings);
// console.log(wordArray);
