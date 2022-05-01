// ## Task 1 - Declaring an Array
console.log("hello");
// Convert these lists of things into JavaScript arrays.

// E.G.

// ### Example: Favorite Foods

// - Cheese
// - Chocolate
// - Olives
// - Anchovies

// Would become...

// ```js
// const favoriteFoods = ["Cheese", "Chocolate", "Olives", "Anchovies"];
// // ```

// // 👉 You do the rest!

// // ### 1. Favorite Songs

// const favSongs = [
//   "Tiny Dancer",
//   "Running Up That Hill",
//   "Don't Stop Moving",
//   "Tragedy",
//   "Crazy Horses",
// ];

// // - Tiny Dancer
// // - Running Up That Hill
// // - Don't Stop Moving
// // - Tragedy
// // - Crazy Horses

// // // ### 2. Profit From First Seven Days of Tao's Penny Doubling Pyramid Scheme

// const profit = [1, 2, 4, 8, 16, 32, 64];
// // - 1
// // - 2
// // - 4
// // - 8
// // - 16
// // - 32
// // - 64

// // ### 3. Team

// const team = [
//   { name: "ben", specialSkill: "code rapping" },
//   { name: "Tao", specialSkill: "hand raising" },
//   { name: "Lizzie", specialSkill: "being friendly" },
// ];

// - Name is Ben, special skill is code rapping.
// - Name is Tao, special skill is hand raising.
// - Name is Lizzie, special skill is being friendly.
// - Name is Liz, special skill is crochet.
// - Name is Patrick, special skill is Call of Duty.
// - Name is Chris, special skill is changing lives.
// - Name is Tim, special skill is analogies.
// - Name is James, special skill is friendship.
// - Name is Joseph, special skill is being positive.
// - Name is Max, special skill is papier-mâché.

// ## Task 2 - Reading Array Values

// ```js
let options = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
// ```

// Using bracket notation and the correct index...

// 👉 Console.log the month in which you were born.

console.log(options[3]);

// 👉 Console.log the month your mother was born.
console.log(options[8]);

// 👉 Console.log your favorite month.
console.log(options[11]);

// ## Task 3 - Looping and Accessing

// We can use the useful loops we learned to access the items in an array.

// ```js
let englishNumbers = ["one", "two", "three", "four", "five"];
// ```

// 👉 Declare an index variable and assign it the value of 0.
// let index = 0;
// 👉 In a while loop, console.log the array item at the current index and add 1 to the index variable.

for (let index = 0; index < englishNumbers.length; index++) {
  console.log(englishNumbers[index]);
}
// 👉 Have the while loop run until the index is equal to or greater than the array's length property.

// ## Task 4 - Looping and Accessing

// 👉 Refactor task three to use a for loop instead of a while loop.

// ## Task 5 - Looping and Reassigning

// // ```js
let words = ["ben", "ha", "spla", "fa", "ca", "dra"];
// // for loop goes here
for (let i = 0; i < words.length; i++) {
  console.log(words[i] + "t");
  // console.log(words);
}
// // ```

// 👉 Use a for loop to iterate over the words array and add the letter t to the end of each word.
