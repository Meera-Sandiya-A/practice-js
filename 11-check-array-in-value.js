// Check Array/string is in Value
//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
// Array can contain numbers or strings. X can be either.
// Return true if the array contains the value, false if not.

// Solution-1
// ---------------------------------------------
function check(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return true;
    }
  }
  return false;
}
const array = [2, 1, 3, 4, 5, 6, 7, 8];
console.log(check(array, 6));

// ==================================================

// Solution-2
// -----------------------------------------------
const fruits = ["apple", "berry", "orange"];
const hasApple = fruits.includes("apple");
console.log(hasApple);
