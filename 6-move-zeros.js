// Move Zeros
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Input: nums = [0,1,0,3,12] ----->> Output: [1,3,12,0,0]
// Input: nums = [0] ------->> Output: [0]

// Solution-1
// ---------------------------------------------------
// function moveZeros(nums) {
//   let nonZeroIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] !== 0) {
//       [nums[i], nums[nonZeroIndex]] = [nums[nonZeroIndex], nums[i]];
//       nonZeroIndex++;
//     }
//   }
//   return nums;
// }
// console.log(moveZeros([0]));

// Time Complexity: O(n)