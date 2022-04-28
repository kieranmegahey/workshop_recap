console.log("working");

// task 1

// let attempts = 0;

// while (attempts < 3) {
//   let password = prompt("Please enter the password.");
//   if (password !== "myPassword1!") {
//     attempts++;
//   } else {
//     alert("My secret information here");
//   }
//   break;
// }

// task 4

function authenticateUser() {
  let attempts = 0;

  while (attempts < 3) {
    let password = prompt("Please enter the password.");
    if (password === "myPassword1!") {
      return true;
    } else if (password !== "myPassword1!") {
      attempts++;
    }
  }
}
// get answer here
let isLoggedIn = authenticateUser();
if (isLoggedIn === true) {
  console.log("That is correct!");
} else {
  console.log("Not correct!");
}

// you should reveal the secret after the function is called using the boolean isLoggedIn
