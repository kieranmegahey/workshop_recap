let animals = [
  "baboon",
  "kangaroo",
  "rhino",
  "frog",
  "beaver",
  "horse",
  "basalisk",
];

let bListAnimals = animals.filter((animal) => {
  return animal.charAt(0) === "b";
}); // Your 'filter' code here.
console.log(bListAnimals);
