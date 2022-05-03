const button = document.querySelector("#click-me");

function handleClick(event) {
  // If shift key pressed, change the inner text of the button to be NAILED IT
  if (event.shiftKey === true) {
    button.innerHTML = "NAILED IT";
  }
}

button.addEventListener("click", handleClick);

document.querySelector("#title-changer").addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

const flowerButton = document.querySelector(".task-2");

function flower() {
  document.title = "💐🌷🌼";
}
flowerButton.addEventListener("click", flower);

// task

const dunno = document.querySelector("#title-changer");
const h1 = document.querySelector("h1");

function eventfunc(event) {
  h1.innerText = event.target.value;
}
dunno.addEventListener("keyup", eventfunc);

//task 4
const img = document.querySelector("img");

function handleMouse() {
  h1.style.color = "hotpink";
}
function handleMouseLeave() {
  h1.style.color = "initial";
}

img.addEventListener("mouseenter", handleMouse);
img.addEventListener("mouseleave", handleMouseLeave);

//task 6

// Add an event listener to the checkbox input that listens to the change event, and declare an inline function that toggles a class of .funky on and off of the h1 element.

const checkBox = document.querySelector("#check-box");

checkBox.addEventListener("click", () => h1.classList.toggle("funky"));
