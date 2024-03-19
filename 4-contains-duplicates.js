// Contains Duplicate
// Given an integer array nums, return true if any value appears at least twice in the array,
// and return false if every element is distinct.

// Input: nums = [1,2,3,1]  ---->> Output: true
// Input: nums = [1,2,3,4] --->> Output: false

// Solution -1 using Two loops
// function containsDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(containsDuplicates([1, 2, 3, 1]));

// high time complexity: O(n^2) due to the nested loops

// Solution-2
// function containsDuplicates2(nums) {
//   const newArray = new Set();

//   for (const num of nums) {
//     if (newArray.has(num)) {
//       return true;
//     }
//     newArray.add(num);
//   }
//   return false;
// }
// console.log(containsDuplicates2([1, 2, 3]));

// time complexity: O(n)
// space complexity: O(n)
