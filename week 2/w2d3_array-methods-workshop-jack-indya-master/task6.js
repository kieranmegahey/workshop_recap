const broomCupboard = [2, 4, 1, 3, 7, 5, 8, 6, 10, 9, 0];

const potions = [
  { name: "polyjuice potion", shelf: 2 },
  { name: "draught of living death", shelf: 4 },
  { name: "pepperup potion", shelf: 1 },
  { name: "veritaserum", shelf: 3 },
];

const students = [
  "Cedric Diggory",
  "Padma Patil",
  "Lucius Malfoy",
  "Seamus Finnigan",
  "Lavender Brown",
  "Luna Lovegood",
  "Gregory Goyle",
];

// 6a. Using the .sort() method, rearrange the brooms (numbers) in the broomCupboard array so that they are in ASCENDING order, with broomstick 1 at index 0 and broomstick 10 and index 9.

const sorted = broomCupboard.sort((a, b) => {
  return a - b;
});
console.log(sorted);

// const potions = [
//   { name: "polyjuice potion", shelf: 2 },
//   { name: "draught of living death", shelf: 4 },
//   { name: "pepperup potion", shelf: 1 },
//   { name: "veritaserum", shelf: 3 },
// ];
// Tsk tsk tsk. It looks like Snape can't even sort his own potion cupboard.

// 👉 6b. Using the .sort() method and the shelf property of each potions object, rearrange the four potions in the 'potions' array so they are in DESCENDING order of their shelves, with the 'draught of living death' at index 0 and the 'pepperup potion' at index 3.

const sortedPotion = potions.sort((a, b) => a.shelf - b.shelf);
console.log(sortedPotion);

// const students = [
//   "Cedric Diggory",
//   "Padma Patil",
//   "Lucius Malfoy",
//   "Seamus Finnigan",
//   "Lavender Brown",
//   "Luna Lovegood",
//   "Gregory Goyle",
// ];
// Some students have been kept behind in detention by Professor McGonagall. Obsessed with orderliness, she has asked you to sort the students into alphabetical order.

// 👉 6c. Sort the names in the array in alphebetical order according to their last name.

// Extra
// 🌟 Delete and repeat each question and solve it again.

// 🌟 Although you've used lots of array methods in this workshop, it is by no means the complete list! Research some more array methods and learn what they do.
