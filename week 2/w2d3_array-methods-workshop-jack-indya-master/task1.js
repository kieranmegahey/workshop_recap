const cats = ["tony", "daisy", "socks", "rockie"];

// const capitalisedCats = cats.map((cat) => {
//   return cat.toUpperCase;
// });
// console.log(capitalisedCats);

function upper(string) {
  return string.toUpperCase();
}

const upperCats = cats.map(upper);

console.log(upperCats);
