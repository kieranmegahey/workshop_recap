const hand = document.querySelector(".hand");

let i = 0;
function moveHand() {
  hand.style.transform = `rotate(${i}deg)`;
} // example of how to rotate the hand

setInterval(() => {
  moveHand();
  i = i + 6;
}, 1000);
// // Requirements
// You should use setInterval.
// The hand should move round the clock every second and should complete a full revolution in 60 seconds.
// You should adjust the rotation of the hand using the transform property as demonstrated in main.js.
// Bonus
// Use the JS Date object to get the real seconds.
// Add a minute hand.
// Add an hour hand.
