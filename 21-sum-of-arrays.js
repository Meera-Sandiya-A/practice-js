// Sum Mixed Array
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

// Solution-1
// ----------------------------------------------------
// function sumMix1(x) {
//   var sum = 0;
//   for (i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//   }
//   return sum;
// }
// console.log(sumMix1([1, 2, "8", 9, 4.5, "10"]));

// Time complexity: O(n)

// ==================================================

// Solution-2
// -------------------------------------------------
// function sumMix2(x) {
//   let sum = 0;
//   for (let sums of x) {
//     sum += parseFloat(sums);
//   }
//   return sum;
// }

// console.log(sumMix2([1, 2, "8", 9, 4.5, "10"]));

// Time complexity: O(n)
