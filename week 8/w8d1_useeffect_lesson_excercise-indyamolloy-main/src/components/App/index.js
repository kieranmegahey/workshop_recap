import { useState, useEffect } from "react";

import List from "../List";
import Input from "../Input";

import "./App.css";

function App() {
  const [toDos, setToDos] = useState(["test"]);
  useEffect(() => {
    document.title = `${toDos.length} things to do`;
  }, [toDos]);
  console.log("App rerender");

  function handleDelete(i) {
    console.log("%chandle delete", "color:lightblue");
    setToDos([...toDos.slice(0, i), ...toDos.slice(i + 1)]);
  }

  function addToDo(text) {
    console.log("%cadd to do ", "color:lightgreen");
    setToDos([...toDos, text]);
  }

  return (
    <div className="App">
      <h1>My list...</h1>
      <Input onData={addToDo} />
      <List toDos={toDos} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
