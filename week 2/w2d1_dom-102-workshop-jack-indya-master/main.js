let pennies = 1;
const output = document.querySelector("output");

function handleClick() {
  console.log("Im just to prove it's working!");
  pennies = pennies + 1;
  output.innerText = `${pennies} Pennies`;
  // Double the number of pennies
  // display in the output tag
}

let extraTips = [
  "Keep your pennies is a glass jar",
  "Save money buy not eating!",
  "Don't let your partner know...",
];

const quote = document.querySelector(".quote");
quote.innerText = "Funny quote haha";

const h1 = document.querySelector("h1");
h1.style.textDecoration = "underline";

//task 4

const ul = document.querySelector("ul");

for (let i = 0; i < extraTips.length; i++) {
  const newLi = document.createElement("li");
  newLi.innerText = extraTips[i];
  ul.appendChild(newLi);
}

//task 5
document.title = "Pretty Glonky";

//task 6
