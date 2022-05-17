import React, { useState } from "react";
import "./App.css";
import bootcampers from "./bootcampers";
import compliments from "./bootcampers";

console.log(compliments.compliments);

function App() {
  const [bootcamperIndex, setbootcamperIndex] = useState(0);
  const [compliment, setCompliment] = useState(0);
  function handleClick() {
    setbootcamperIndex(
      Math.floor(Math.random() * bootcampers.bootcampers.length)
    );
    setCompliment(Math.floor(Math.random() * compliments.compliments.length));
  }
  return (
    <div className="App">
      <h1>React useState</h1>
      <p>{bootcampers.bootcampers[bootcamperIndex]}</p>
      <p>{compliments.compliments[compliment]}</p>
      <button onClick={handleClick}>Click me for a random bootcamper!</button>
    </div>
  );
}

export default App;
