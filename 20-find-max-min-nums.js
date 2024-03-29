// Find Max & Min Numbers

// function maxMin(nums) {
//   if (nums.length === 0) {
//     return null;
//   }

//   let max = nums[0];
//   let min = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] > max) {
//       max = nums[i];
//     }
//     if (nums[i] < min) {
//       min = nums[i];
//     }
//   }

//   return { max, min };
// }
// console.log(maxMin([-2, 1, 8, 4, 7, 3]));

// Time Complexity: O(n)
// Space Complexity: O(1)

// ================================================

// Solution-2 built-in Math function
// ---------------------------------------------------
// function maxMinOptimized(nums) {
//   if (nums.length === 0) {
//     return null;
//   }

//   let max = nums[0];
//   let min = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     max = Math.max(max, nums[i]);
//     min = Math.min(min, nums[i]);
//   }
//   return { max, min };
// }
// console.log(maxMinOptimized([-2, 1, 8, 4, 7, 3]));
