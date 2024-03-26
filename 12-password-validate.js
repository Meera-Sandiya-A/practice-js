// // Password Validation Check
// // Given string, whether the string contains the max & min length,
// // has upper case, lower case, numeric value, special characters.
// // Lower case length must exceeds only 2

// // ASCII code
// // Special Character: 33 to 47, 58 to 64, 91 to 96, 123 to 126
// // Numeric value: 48 to 57
// // Upper case: 65 to 90
// // Lower Case: 97 to 122

// // Solution
// // ------------------------------------------------------------
// function validatePasswordCheck(str) {
//   const strLength = str?.length;
//   const min = 8;
//   const max = 15;
//   let hasLowerCase = false;
//   let hasUpperCase = false;
//   let hasNumeric = false;
//   let hasSpecialChar = false;
//   let lowerCaseCount = 0;

//   //   max - min length
//   if (!(strLength >= min && strLength <= max)) {
//     console.log("Password should have exceed between 8 to 15");
//     return false;
//   }

//   // lower case
//   for (let i = 0; i < strLength; i++) {
//     if (str[i].charCodeAt() >= 97 && str[i].charCodeAt() <= 122) {
//       hasLowerCase = true;
//       lowerCaseCount += 1;
//     }

//     if (lowerCaseCount > 2) {
//       console.log("Lower case max exceeds");
//       return false;
//     }
//   }

//   if (!hasLowerCase) {
//     console.log("Password should contains atleast one lower case");
//     return false;
//   }

//   // upper case
//   for (let i = 0; i < strLength; i++) {
//     if (str[i].charCodeAt() >= 65 && str[i].charCodeAt() <= 90) {
//       hasUpperCase = true;
//     }
//   }

//   if (!hasUpperCase) {
//     console.log("Password should contains atleast one Upper case");
//     return false;
//   }

//   // numeric value
//   for (let i = 0; i < strLength; i++) {
//     if (str[i].charCodeAt() >= 48 && str[i].charCodeAt() <= 57) {
//       hasNumeric = true;
//     }
//   }

//   if (!hasNumeric) {
//     console.log("Password should contains atleast one numeric value");
//     return false;
//   }

//   // special character
//   for (let i = 0; i < strLength; i++) {
//     if (
//       (str[i].charCodeAt() >= 33 && str[i].charCodeAt() <= 47) ||
//       (str[i].charCodeAt() >= 58 && str[i].charCodeAt() <= 64)
//     ) {
//       hasSpecialChar = true;
//     }
//   }

//   if (!hasSpecialChar) {
//     console.log("Password should contains atleast one Special character value");
//     return false;
//   }

//   console.log("Validation Passed");
//   return true;
// }
// console.log(validatePasswordCheck("passwordS9#"));

// // Time Complexity: O(n)
