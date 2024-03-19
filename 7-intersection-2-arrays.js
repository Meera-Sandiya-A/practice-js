// // Intersection of Two Arrays
// // Given two integer arrays nums1 and nums2, return an array of their intersection.
// // Each element in the result must be unique and you may return the result in any order.

// // Input: nums1 = [1,2,2,1], nums2 = [2,2] ----->>> Output: [2]
// // Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4] ----->>> Output: [9,4] / [4,9]

// // Solution-1 Using Sets
// // ----------------------------------------------------
// function intersectionArrays(nums1, nums2) {
//   const set1 = new Set(nums1);
//   const intersectionSet = new Set();

//   for (const num of nums2) {
//     if (set1.has(num)) {
//       intersectionSet.add(num);
//     } else {
//       return "no intersection values";
//     }
//   }
//   return Array.from(intersectionSet);
// }
// console.log(intersectionArrays([1, 2, 2, 1], [2, 2]));

// // time complexity: O(n) / O(n + m)

// // ============================================================

// // Solution-2 Using TWo Pointers and Sorting
// // ------------------------------------------------
// function intersectionArrays2(nums1, nums2) {
//   nums1.sort((a, b) => a - b);
//   nums2.sort((a, b) => a - b);

//   const intersection = [];
//   for (let i = 0; i < nums1.length; i++) {
//     for (let j = 0; j < nums2.length; j++) {
//       if (nums1[i] === nums2[j]) {
//         if (intersection[intersection.length - 1] !== nums1[i]) {
//           intersection.push(nums1[i]);
//         }
//       }
//     }
//   }
//   return intersection;
// }
// console.log(intersectionArrays2([4, 9, 5], [9, 4, 8, 9, 4]));

// // time complexity: O(nlogn) / O((n+m)log(n+m))

// // =====================================================================

// //  Solution-3 Using filter()
// // -------------------------------------------------------------
// function intersectionArrays3(nums1, nums2) {
//   let newArray = nums1.filter((arr) => nums2.includes(arr));
//   return newArray;
// }
// console.log(intersectionArrays3([4, 9, 5], [9, 4, 8, 9, 4]));
