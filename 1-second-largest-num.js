// 1- Second Largest Number
// Given an array of size N, print second largest distinct element of an array

// Input: [12, 35, 1, 10, 34]
// Input: [10, 5, 10]

// Solution-1 Brute's Force
// Time Complexity : O(nlogn) // takes more time

// function secondLargestNumber(arr) {
//   const uniqueArray = arr;
//   uniqueArray.sort((a, b) => b - a); // O(nlogn)

//   if (uniqueArray.length >= 2) {
//     return uniqueArray[1];
//   } else {
//     return -1;
//   }
// }
// console.log(secondLargestNumber([12, 35, 1, 10, 34]));

// // Having duplicate values
// function secondLargestNumber(arr) {
//   const uniqueArray = Array.from(new Set(arr)); // O(n)
//   //   console.log(uniqueArray);
//   uniqueArray.sort((a, b) => b - a);

//   if (uniqueArray.length >= 2) {
//     return uniqueArray[1];
//   } else {
//     return -1;
//   }
// }
// console.log(secondLargestNumber([10, 5, 10]));

// Time Complexity : O(nlogn) // takes more time

// ==========================================================

// Solution-2 Optimized Approach

// function secondLargestNumber(arr) {
//   let largest = Number.NEGATIVE_INFINITY;
//   let secondLargest = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     // O(n)
//     if (arr[i] > largest) {
//       secondLargest = largest;
//       largest = arr[i];
//     } else if (arr[i] != largest && arr[i] > secondLargest) {
//       secondLargest = arr[i];
//     }
//   }
//   return secondLargest;
// }
// console.log(secondLargestNumber([12, 35, 1, 10, 34]));

// Time Complexity : O(n)
// Space Complexity:

// function secondSmallestNumber(arr) {
//   let smallest = Number.POSITIVE_INFINITY;
//   let secondSmallest = Number.POSITIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//       secondSmallest = smallest;
//       smallest = arr[i];
//     } else if (arr[i] != smallest && arr[i] < secondSmallest) {
//       secondSmallest = arr[i];
//     }
//   }
//   return secondSmallest;
// }
// console.log(secondSmallestNumber([12, 35, 5, 10, 34]));
