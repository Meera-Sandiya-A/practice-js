// Removes duplicates from sorted Array
// given an integer array nums sorted in non-decreasing order,
// remove the duplicates in place, such that each unique element appears
// only once. The relative order of the elements should be kept the same.
// then return the number of unique elements in nums.

// Input: [1, 1, 2] --->> Output: 2, [1,2,...]
// Input: [0,0,1,1,1,2,2,3,3,4] --->> Output: 5, [0,1,2,3,4,_,_,_]

// Solution-1 With built-in Js function
// ---------------------------------------------
// function removeDuplicates(nums) {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] === nums[i + 1]) {
//       nums.splice(i + 1, 1);
//       i--;
//     }
//   }
//   return nums; // [1, 2]
//   //   return nums.length; // 2
// }
// console.log(removeDuplicates([1, 1, 2]));

// Time complexity: O(n)
// Space complexity: O(1)

// =============================================================

// Solution -2
// -------------------------------------------------
// function removeDuplicates(nums) {
//   if (nums.length === 0) return 0;
// nums.sort((a,b)=> a-b);

//   let i = 0;

//   for (let j = 1; j < nums.length; j++) {
//     if (nums[i] !== nums[j]) {
//       i++;
//       nums[i] = nums[j];
//     }
//   }

//   //   nums.length = i + 1;

//   return i + 1;
// }

// console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

// Time complexity: O(n) due to the single loop iterating through the array.
// Space complexity: O(1) as it modifies the original array in-place.
