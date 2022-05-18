import React, { useState } from "react";
import "./App.css";
import Input from "../Input/index";
import Item from "../Item/index";

function App() {
  const [text, setText] = useState("");

  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <div className="App">
      <Input onChangeProp={handleChange} />
      <Item text={text} font="Ariel" />
      <Item text={text} font="Fantasy" />
    </div>
  );
}

export default App;
