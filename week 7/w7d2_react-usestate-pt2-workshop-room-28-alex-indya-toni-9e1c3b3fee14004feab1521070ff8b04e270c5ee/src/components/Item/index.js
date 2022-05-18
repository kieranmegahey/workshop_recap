import React from "react";

function Item(props) {
  return <li style={{ fontFamily: `${props.font}` }}>{props.text}</li>;
}

export default Item;
