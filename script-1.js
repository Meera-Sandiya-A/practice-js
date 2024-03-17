// //  Arrays

// const x = [2, 4, 6, 8, 10];
// console.log(x);

// const y = new Array(1, 2, 3, 4, 5);
// console.log(y);

// console.log(x.length);
// console.log(y[3]);

// const fruits = ["apple", "orange", "banana", "grapes", "mango"];

// // push
// fruits.push("berry");

// // pop
// fruits.pop();

// // unshift
// fruits.unshift("cherry");

// // shift
// fruits.shift();
// console.log(fruits);

// // for loop
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }

// // While loop
// let i = 0;
// while (i < fruits.length) {
//     console.log(fruits[i]);
//   i++;
// }

// // Inbuilt loop methods
// const number = [3, 5, 7, 9];

// // map
// const newNum = number.map((num) => {
//   return num + 5;
// });
// console.log(newNum);

// // filter
// const newNum = number.filter((num) => {
//   return num > 7;
// });
// console.log(newNum);

// // reduce
// const newNum = number.reduce((prev, num) => {
//   return prev + num;
// }, 0);
// console.log(newNum);

// // some
// const res = number.some((item) => {
//   return item > 3;
// });
// console.log(res);

// // every
//  const res = number.every((item, index, array) => {
//   return item > 3;
// });
// console.log(res);

// // find
// const res = number.find((item) => {
//   return item > 3;
// });
// console.log(res);

// // findIndex
// const findValue = value.findIndex((item) => {
//   return item === 2;
// });
// console.log(findValue);

// // forEach
// const newNums = number.forEach((num) => {
//   console.log(num);
// });

// // Spread and Rest Operators
// const num1 = [1, 2, 3];
// const num2 = [4, 5, 6, 7];
// const num3 = [4, 5, 6, 7];

// // Spread
// const spreadOperator = [...num1, ...num2];
// console.log(spreadOperator);

// // Rest
// function sum(...numbers) {
//   return numbers;
// }
// console.log(sum(num1, num2, 6, "hi"));

// function sum(a, b, ...rest) {
//   console.log("🚀 ~ sum ~ ̥:", rest);
//   return a + b;
// }

// // Another Array methods

const array = ["hi", "hello", "welcome"];

// // concat
// const newArr = num1.concat(num2, num3, "hi", "hello", 9);
// console.log(newArr);

// // slice
// const newArr = array.slice(1, 2);
// console.log(newArr);

// const newArr = array.slice(-2);
// console.log(newArr);

// // splice
// array.splice(1, 2, "orange");
// console.log(array);

const value = [2, 4, 6, 8];

// // fill
// value.fill(0);
// value.fill(2, 2);
// console.log(value);

// // flat
// const flatValue = [1, 2, [3, 4], [5, 6, [7]], [8, 9, [10]]];
// const flatArray = flatValue.flat(2);
// console.log(flatArray);

// // reverse
// const reverseValue = value.reverse();
// console.log(reverseValue);

// sort
const unsorted = [6, 9, 2, 4, 1, 5];
// unsorted.sort((a, b) => a - b);
unsorted.sort((a, b) => b - a);
console.log(unsorted);
