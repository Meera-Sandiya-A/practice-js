// Find Duplicate
// Given an integer array nums, return the duplicate values

// Input: nums= [1, 2, 3, 1, 4, 5]

// Solution -1 Using Two Loops
// ---------------------------------------------------
// function findDuplicate(nums) {
//   const duplicates = new Set();

//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] === nums[j]) {
//         duplicates.add(nums[i]);
//       }
//     }
//   }
//   return Array.from(duplicates);
// }
// console.log(findDuplicate([1, 2, 3, 4, 2, 3]));

// time complexity: O(n^2)

// ======================================================================

// Solution -2 find first Duplicate
// --------------------------------------------------------------

// function findFirstDuplicate(nums) {
//   const seen = new Set();

//   for (const num of nums) {
//     if (seen.has(num)) {
//       return num;
//     }
//     seen.add(num);
//   }

//   return null;
// }

// const duplicate = findFirstDuplicate([1, 2, 1, 3]);
// console.log("First duplicate value:", duplicate);

// if (duplicate !== null) {
//   console.log("First duplicate value:", duplicate);
// } else {
//   console.log("No duplicates found");
// }
