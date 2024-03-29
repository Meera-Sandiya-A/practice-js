// Maximum Sub Array Sum
// Given an integer array nums, find the subarray with largest sum and return its sum.

// Input: [-2,1,-3,4,-1,2,1,-5,4]  ------->>> Output: 6, [4,-1,2,1]
// Input: [5,4,-1,7,8]  ---------->>> Output: 23, [5,4,-1,7,8]

// Solution-1 Brute's Force Approach
// --------------------------------------
// function maxSubArray(nums) {
//   let maxSum = nums[0]; // consider frst index as maxSum
//   let startIdx = 0;
//   let endIdx = 0;

//   //n
//   for (let i = 0; i < nums.length; i++) {
//     let currentSum = 0;

//     // n, n-1, n-2, ...... // n*n
//     for (let j = i; j < nums.length; j++) {
//       currentSum = currentSum + nums[j];
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//         startIdx = i;
//         console.log(startIdx);
//         endIdx = j;
//       }
//     }
//   }
//   return { sum: maxSum, subArray: nums.slice(startIdx, endIdx + 1) };
// }
// console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
// console.log(maxSubArray([5, 4, -1, 7, 8])); //23
// console.log(maxSubArray([3, 6, 2, -6, -2, 11, -3, -1, 1, -5]));

// Time Complexity: O(n^2)
// Space complexity: O(1)

// ================================================================

// solution-2 Kadane's Algorithm
// -----------------------------------------------------------------
// function maxSubArray2(nums) {
//   let sum = 0;
//   let max = nums[0];

//   for (let i = 0; i < nums.length; i++) {
//     sum = sum + nums[i];
//     if (sum > max) {
//       max = sum;
//     }
//     if (sum < 0) {
//       sum = 0;
//     }
//   }
//   return max;
// }
// console.log(maxSubArray2([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
// Time Complexity: O(n)
// Space complexity: O(1)
