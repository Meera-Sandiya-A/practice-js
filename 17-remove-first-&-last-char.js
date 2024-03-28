// Remove First and Last Character
// Given a string containing a sequence of character sequences separated by commas.
// Write a function which returns a new string containing the same character sequences
// except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items
// would cause the resulting string to be empty, return an empty value(NULL).

// Solution-1
// ----------------------------------------------------------------
function midString(str) {
  const result = [];
  let isStart = true;
  let isEnd = false;

  // Loop through each character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    // Check for comma separator
    if (char === ",") {
      if (!isStart) {
        result.push(str.substring(startIndex, i)); // Extract middle element
      }
      startIndex = i + 1; // Update start index for next element
      isEnd = true; // Mark the end of current element
    } else {
      // Reset end flag if not a comma
      isEnd = false;
      // Initialize start index for the first element
      if (isStart) {
        startIndex = i;
        isStart = false;
      }
    }
  }

  // Check if there's a remaining element at the end
  if (!isEnd) {
    result.push(str.substring(startIndex));
  }

  // Handle empty or single element case
  if (result.length <= 2) {
    return null;
  }

  // Concatenate elements with spaces manually
  let finalString = "";
  for (let i = 0; i < result.length - 1; i++) {
    finalString += result[i] + " ";
  }
  finalString += result[result.length - 1];

  return finalString;
}

// Test cases
console.log(midString("hello,world, beautiful")); // Output: "world beautiful"
// console.log(midString("")); // Output: null
// console.log(midString("a")); // Output: null

// time Complexity : O(n)

// =================================================================

// Solution-2 with Built-in
// -----------------------------------------------------------------
// function array(string) {
//   // const elements = string; // array
//   const elements = string.split(",");

//   if (elements.length <= 2) {
//     return null;
//   }

//   const middleElements = elements.slice(1, elements.length - 1); // [ '1', '2', '3' ]

//   return middleElements.join(" "); // 1 2 3
// }
// // console.log(array(["1", "2", "3", "4"])); //for array
// console.log(array("hello,1,2,3,hi"));
// console.log(array("1,2"));
// console.log(array("1"));
// console.log(array(""));

// // Time Complexity: O(n)

// =====================================================================================

// Solution-3 Array to string
// ------------------------------------------------------------
// function removeChar(arr) {
//   let newStr = "";
//   for (let i = 1; i < arr.length - 1; i++) {
//     newStr += arr[i] + " ";
//   }
//   return newStr.trim(); // removes last space
// }
// console.log(removeChar(["hello", "world", "meera", "sandiya", "beautiful"])); // world meera sandiya
// // console.log(removeChar("hello, meera, sandiya")); // ello, meera, sandiy

// // Time Complexity: O(n)
