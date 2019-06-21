//import React, { Component } from "react";
import React from "react";

//no need for Component when a functional component?
export default function ShoppingItem(props) {
  return (
    <li>
      <h2
        style={{
          //if the shoppingItem checked:true then'?' cross out else do nothing
          textDecoration: props.item.checked ? "line-through" : null
        }}
      >
        {console.log(props)}
        {props.item.name}
      </h2>
      {/*Use the callback props when the buttons that get clicked inside ShoppingItem.
      
      add an onClick to each button and use the callback prop!*/}
      {/* Originally: <button onClick={props.onCheckItem} type="button">
      now pass item in callback prop with arrow functions */}
      <button onClick={() => props.onCheckItem(props.item)} type="button">
        check
      </button>
      <button onClick={() => props.onDeleteItem(props.item)} type="button">
        delete
      </button>
    </li>
  );
}

ShoppingItem.defaultProps = {
  //why an object?
  item: {}
};
