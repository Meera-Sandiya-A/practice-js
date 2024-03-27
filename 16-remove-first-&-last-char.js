// Remove First and Last Character Part Two
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
  if (result.length <= 1) {
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
console.log(midString("hello,world,beautiful")); // Output: "world beautiful"
console.log(midString("")); // Output: null
console.log(midString("a")); // Output: null

// =================================================================

// Solution-2
// -----------------------------------------------------------------
function array(string) {
  // Split the string into an array using commas as separators
  const elements = string.split(",");

  // Check if the array is empty or has only two element
  if (elements.length <= 2) {
    return null;
  }

  // Extract elements from index 1 (excluding first) to length-1 (excluding last)
  const middleElements = elements.slice(1, elements.length - 1);

  // Join the middle elements with spaces as separators
  return middleElements.join(" ");
}
console.log(array("1,2,3"));
console.log(array("1,2,3,4,5"));
console.log(array("1,2"));
console.log(array("1"));
console.log(array(""));
