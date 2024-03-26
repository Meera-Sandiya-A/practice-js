// Convert to Lower Case and Upper Case

//65=A, 97=a = 32 (97-65)

// Solution-1 To Lower Case
// ------------------------------------------
// function toLowerCase(str) {
//   let temp = "";

//   for (let i = 0; i < str.length; i++) {
//     let asciiChar = str[i].charCodeAt();

//     if (asciiChar >= 65 && asciiChar <= 97) {
//       temp = temp + String.fromCharCode(asciiChar + 32);
//     } else {
//       temp += str[i];
//     }
//   }
//   return temp;
// }
// console.log(toLowerCase("MEERA"));

// ==============================================================

// Solution-1 To Upper Case
// ---------------------------------------------------
// function toUpperCase(str) {
//   let temp = "";

//   for (let i = 0; i < str.length; i++) {
//     let asciiChar = str[i].charCodeAt();

//     if (asciiChar >= 97 && asciiChar <= 122) {
//       temp = temp + String.fromCharCode(asciiChar - 32);
//     } else {
//       temp += str[i];
//     }
//   }
//   return temp;
// }
// console.log(toUpperCase("mEera"));
