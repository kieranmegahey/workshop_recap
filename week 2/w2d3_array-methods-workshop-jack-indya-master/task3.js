let someNumbers = [4, 5, 6, 78, 2, 3, 45, 34, 2, 23, 5, 45, 6, 7, 23];

// someNumbers.some((number) => {
//   number / hasMultipleOf3;
// });

// You have an array which contains some numbers. You would like to find out if any of the numbers are multiples of the following numbers:

let hasMultipleOf3 = someNumbers.some((number) => {
  return number % 3 === 0;
});
console.log(hasMultipleOf3);

let hasMultipleOf5 = someNumbers.some((number) => number % 5 === 0);
console.log(hasMultipleOf5);
let hasMultipleOf60 = someNumbers.some((number) => number % 60 === 0);
console.log(hasMultipleOf60);
let hasMultipleOf90 = someNumbers.some((number) => {
  return number % 90 === 0;
});
console.log(hasMultipleOf90);
// 👉 3a. Declare four new variables, one for each of the numbers above. Use the .some() method to assign a value of true or false (a boolean) to each of the variables, depending on whether there is at least one multiple of that number in the someNumbers array.
