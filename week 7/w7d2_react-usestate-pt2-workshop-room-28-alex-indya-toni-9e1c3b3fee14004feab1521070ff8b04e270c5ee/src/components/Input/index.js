import React from "react";

function Input({ onChangeProp }) {
  return <input onChange={onChangeProp} type="text"></input>;
}

export default Input;
