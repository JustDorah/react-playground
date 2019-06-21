import React from "react";
import ShoppingItem from "./ShoppingItem";

export default function ShoppingList(props) {
  return (
    <ul>
      {props.items.map((item, i) => (
        <ShoppingItem
          key={i}
          item={item}
          //  WHY?? In order for these functions to reach the appropriate buttons, they will need to first be passed through the ShoppingList component.

          onDeleteItem={props.onDeleteItem}
          onCheckItem={props.onCheckItem}
        />
      ))}
    </ul>
  );
}

ShoppingList.defaultProps = {
  //why an array?
  items: []
};
