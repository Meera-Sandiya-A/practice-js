// const arr = [23, 4, 5, 8, 10];

// function maxMin(a) {
//   let arrResult = [];

//   arrResult = a.reverse().split().join();
//   return arrResult;
// }

// const result = maxMin(arr);

// function sumArrays(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i];
//   }
//   return sum;
// }

// const result2 = sumArrays(arr);
// console.log(result2);

// 1) Find sum of numbers
const numb = [7, 3, 9, 4, 0];
function sumArrays(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
// console.log(sumArrays(numb));

///////////////////////////////////////////////////////

// 2) find Max & Min numbers
const num = [-2, 7, 3, 9, 4, 0];
function maxMin(array) {
  if (array.length === 0) {
    return null;
  }

  let max = array[0];
  let min = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max) {
      max = array[i];
    }
    if (array[i] < min) {
      min = array[i];
    }
  }

  return { max, min };
}
// console.log(maxMin(num));

////////////////////////////////////////////

// 3) factorial of a positive integer
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// console.log(factorial(5));

/////////////////////////////////////////////////

// 4) Find the factorial of a given number using iteration
function factorialIteration(n) {
  if (n < 0) {
    return "invalid";
  }

  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorialIteration(5));

//////////////////////////////////////////////////////

// 5) Check if a gn number is odd or even
function isOddOrEven(n) {
  return n % 2 === 0 ? "It is even" : "It is odd";
}

// console.log(isOddOrEven(4));

////////////////////////////////////////////////

// 6) Sum of all even numbers
function sumOfEven(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum = sum + i;
  }
  return sum;
}
// console.log(sumOfEven(10));

///////////////////////////////////////////////

// 7) Sum of all Odd numbers
function sumOfOdd(n) {
  let sum = 0;
  for (let i = 1; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}
// console.log(sumOfOdd(10));

////////////////////////////////////////////////

// 8) Reverse a number using while loop
let rev = 0;
let numbers = 12345;
let lastDigit;

while (numbers > 0) {
  lastDigit = numbers % 10;
  rev = rev * 10 + lastDigit;
  numbers = Math.floor(numbers / 10);
}
// console.log(rev);

////////////////////////////////////////////////////////

// 9) Reverse a number using built-in function
let nums = -6789;
function reverseBuiltIn(n) {
  return parseInt(n.toString().split("").reverse("").join("")) * Math.sign(n);
}
// console.log(reverseBuiltIn(nums)) ;

/////////////////////////////////////////////////////

// 10) Palindrome using for loop
function palindrome(str) {
  let j = str.length - 1;

  for (i = 0; i < str.length; i++) {
    if (str[i] !== str[j]) {
      return "It is not a palindrome";
    }
    j--;
  }
  return "It is palindrome";
}
// console.log(palindrome("car"));

/////////////////////////////////////////////////////

// 11) palindrome check
let strings = "aba";
function isPalindrome(str) {
  let startIdx = 0;
  let endIdx = str.length - 1;

  startIdx === endIdx ? "It is palindrome" : "It is not palindrome";
}

// console.log(palindrome(strings));

//////////////////////////////////////////////////////

// 12) Check given number is prime number
const primeNum = 19;
function primeNumber(n) {
  if (n <= 1) {
    return 1;
  }
  for (let i = 2; i <= n; i++) {
    if (n % 2 === 0) {
      return "It is not a prime number";
    }
  }
  return "It is prime number";
}
// console.log(primeNumber(primeNum));

//////////////////////////////////////////////////

// 13) Find the average of an array of numbers by reduce method
function calculateAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }

  // reduce method is used to accumulate the sum of all elements in the array
  // frst acc = 0 initial value; current = current element
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  const average = sum / arr.length;

  return average;
}
// console.log(calculateAverage([2, 4, 6, 8]));

////////////////////////////////////////////////////////////////////

// 14) find the average of array for loop
function calculateAverageArray(arr) {
  if (arr.length === 0) {
    return 0;
  }

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
}
// console.log(calculateAverageArray([2, 4, 6, 8]));

/////////////////////////////////////////////////////////////////

// 15) Check if gn number is perfect square
function isPerfectSquare(n) {
  if (n < 0) {
    return false;
  }

  const square = Math.sqrt(n);
  return Number.isInteger(square);
}
// console.log(isPerfectSquare(9)); // true

// 16) Check if gn number is perfect square using for loop
function perfectSquare(n) {
  if (n < 0) {
    return false;
  }

  for (let i = 0; i <= n; i++) {
    const square = i * i;
    if (square === n) {
      return true;
    }
  }
  return false;
}
// console.log(perfectSquare(6));

/////////////////////////////////////////////////////

// 17) check if given year is leap year
function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
    ? `${year} is leap year`
    : `${year} is not Leap year`;
}
// console.log(isLeapYear(2020));
// console.log(isLeapYear(2010));

///////////////////////////////////////////////////////////////////

// 18) check if given date in the year is leap year or not
function isLeapYear1(year) {
  // in Date obj months are indexed as 0
  // so jan = 0, feb = 1
  const feb = new Date(year, 1, 29);
  return feb.getDate() === 29
    ? `${year} is leap year`
    : `${year} is not Leap year`;
}
// console.log(isLeapYear1(2020));
// console.log(isLeapYear1(2018));

////////////////////////////////////////////////////////////

// 19) Count the occurance of each character in a given string
function countCharacters(str) {
  let charCount = {};

  for (let char of str) {
    // Ignore spaces (if you want to count spaces, remove the if condition)
    if (char !== " ") {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  return charCount;
}
// console.log(countCharacters("hello world"));

////////////////////////////////////////////////////////////////////////

// 20) Count the number of vowels using for loop
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let letter of str) {
    if (vowels.includes(letter)) {
      count++;
    }
  }
  return count;
}
// console.log(countVowels("Hello MEera")); // 5

//////////////////////////////////////////////////////////

// 21) Check if given string is panagram or not
function isPanagram(str) {
  const alphabetSet = new Set("abcdefghijklmnopqrstuvwxyz");

  for (let char of str.toLowerCase()) {
    alphabetSet.delete(char);
  }
  return alphabetSet.size === 0 ? "It is panagram" : "It is not panagram";
}
// console.log(isPanagram("The quick Brown fox jumps over the lazy dog"));

//////////////////////////////////////////////////////

// 22) for loop to print the Fibonacci series using for loop
function fibonacciLoop(n) {
  let fiboSeries = [];

  for (let i = 0; i < n; i++) {
    if (i <= 1) {
      fiboSeries.push(i);
    } else {
      fiboSeries.push(fiboSeries[i - 1] + fiboSeries[i - 2]);
    }
  }
  return fiboSeries;
}
// console.log(fibonacciLoop(10));

// 23) for loop to print the Fibonacci series using recursion
function fibonacciWithRecursion(n) {
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  } else {
    const fibSeries = fibonacciWithRecursion(n - 1);
    fibSeries.push(
      fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]
    );
    return fibSeries;
  }
}
// console.log(fibonacciWithRecursion(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
