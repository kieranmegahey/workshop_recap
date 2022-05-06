let queue = [
  "catHorse",
  "dogPig",
  "catHorse",
  "dogPig",
  "kangarooBear",
  "dogPig",
  "catHorse",
  "catHorse",
  "dogPig",
];

// 5a. Yet another 'catHorse' turns up at the nightclub door. Use an array method to add them to the back of the queue.

queue.push("catHorse");
console.log(queue);

// 👉 5b. The queue is moving ever slowly forwards, and a mutated animal from the front may enter the nightclub. Remove a mutated animal from the front of the queue using an array method.

queue.shift();
console.log(queue);

// 👉 5c. Oh my. An 'owlDonkey' has appeared at the door. Put them straight to the front of the queue using an array method.
queue.unshift("owlDonkey");
console.log(queue);

// 👉 5d. The queue really IS moving very slowly. The 'catHorse' at the back of the queue decides to call it a night. Remove the 'catHorse' at the back of the queue using an array method.
queue.pop();
console.log(queue);
// 👉 5e. You have received an emergency phone call concerning the 'kangarooBear' in the middle of the queue. Use an array method to remove the 'kangarooBear' from the middle of the queue.
queue.splice(4, 1);
console.log(queue);
// 👉 5f. Classic. A group of 'rabbitSalmon' have decided to form an unofficial queue next to your queue. Using an array method, merge the unofficial queue into the original queue, so that all of the 'rabbitSalmon' are at the back of the queue.
const unofficialQueue = [
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
  "rabbitSalmon",
];

const newArr = queue.concat(unofficialQueue);
console.log(newArr);
