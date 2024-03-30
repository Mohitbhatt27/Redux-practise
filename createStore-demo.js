import { createStore } from "redux";

function demoReducer(state, action) {
  if (action.type === "add_item") {
    return [...state, { name: action.itemName, quantity: action.itemQuantity }];
  }
  return state;
}

const add_item = (name, quantity) => {
  return {
    type: "add_item",
    itemName: name,
    itemQuantity: quantity ? quantity : 1,
  };
};

const initialState = [{ name: "first item" }, { name: "second item" }];

const store = createStore(demoReducer, initialState);
store.subscribe(() => {
  console.log(store.getState());
  console.log("store changed");
})

store.dispatch(add_item("third item", 3));
store.dispatch(add_item("fourth item"));
store.dispatch(add_item("first item", 5));
store.dispatch({type: 'unknown'});


