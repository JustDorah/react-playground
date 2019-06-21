import React, { Component } from "react";
import AddItemForm from "./shopping-list/AddItemForm";
import ShoppingList from "./shopping-list/ShoppingList";

class App2 extends Component {
  state = {
    shoppingItems: [
      /* put stub items in here for testing */
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false }
    ]
  };
  // event handler methods for the callback props
  //just adding the item props shows up as item:class in console. Need to pass the item from the ShoppingItem comp
  //with props passed into button in shoppingitem- now item shows up as bread, oranges or apples etc..
  handleDeleteItem(item) {
    console.log("handle delete item called", { item });
    const newItems = this.state.shoppingItems.filter(itm => itm !== item);
    this.setState({
      shoppingItems: newItems
    });
  }
  handleCheckItem(item) {
    console.log("handle check item called", { item });
    const newItems = this.state.shoppingItems.map(itm => {
      if (itm === item) {
        itm.checked = !itm.checked;
      }
      return itm;
    });
    this.setState({
      shoppingItems: newItems
    });
  }

  handleAddItem = itemName => {
    console.log("handle add item", { itemName });
    //WHAT???  ...this.state
    const newItems = [
      ...this.state.shoppingItems,
      { name: itemName, checked: false }
    ];
    this.setState({
      shoppingItems: newItems
    });
  };

  render() {
    return (
      //NOTE: The <></> is called a Fragment, we've used it here to avoid an unnecessary <div>.
      <>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm onAddItem={this.handleAddItem} />
          </section>
          <section>
            {/* Note: can you see how the callback props are similar to event handler props? */}
            <ShoppingList
              items={this.state.shoppingItems}
              //add the two callback props here- Inside the opening ShoppingList component tag
              onDeleteItem={this.handleDeleteItem}
              onCheckItem={this.handleCheckItem}
            />
          </section>
        </main>
      </>
    );
  }
}

export default App2;
