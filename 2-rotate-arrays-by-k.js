// rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative

// Input: nums = [1, 2, 3, 4, 5, 6, 7], k = 3 ------>> Output: [5, 6, 7, 1, 2, 3, 4]
// Input: nums = [-1, -100, 3, 99], k = 2 ------>> Output: [3, 99, -1, -100]

// Solution-1 Brute Force
// ----------------------------------------

// const rotateArray1 = (nums, k) => {
//   for (let i = 0; i < k; i++) {
//     const reverseValue = nums.pop();
//     console.log(reverseValue);
//     nums.unshift(reverseValue);
//   }

//   return nums;
// };
// console.log(rotateArray1([1, 2, 3, 4, 5, 6, 7], 3));

// Time Complexity: O(n * k)
// space complexity: O(1)

// ====================================================================

// Solution-2 Using in-built JS function
// ----------------------------------------

// function rotateArray(nums, k) {
//   let size = nums.length;

//   if (k > size) {
//     k = k % size; // takes remainder value
//   }

//   const rotated = nums.splice(size - k, k); // 7-3 => 4 // [5,6,7] // O(n)

//   nums.unshift(...rotated); // O(n)

//   return nums;
// }
// console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

// Time Complexity: O(n)

// ======================================================================

// Solution-3 Using Reverse function
// -------------------------------------------

// function rotateReverseArray(nums, k) {
//   const size = nums.length;
//   k = k % size; //  to handle cases where k is larger than the array length.

//   function reverse(nums, start, end) {
//     while (start < end) {
//       [nums[start], nums[end]] = [nums[end], nums[start]];
//       start++;
//       end--;
//     }
//   }

//   reverse(nums, 0, size - 1); // [ 5, 4, 3, 2, 1 ]
//   reverse(nums, 0, k - 1); // [ 4, 5, 3, 2, 1 ]
//   reverse(nums, k, size - 1); // [4, 5, 1, 2, 3]

//   return nums;
// }
// console.log(rotateReverseArray([1, 2, 3, 4, 5], 2));

// Time Complexity: O(n)
// space complexity: O(1)
