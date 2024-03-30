import { createStore, bindActionCreators } from "redux";

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

//binding events actions using bindActionCreators

const initialState = [{ name: "first item" }, { name: "second item" }];

const store = createStore(demoReducer, initialState);

store.subscribe(() => {
  console.log(store.getState());
  console.log("store changed");
});

const actions = bindActionCreators({ add_item }, store.dispatch);

actions.add_item(add_item("third item", 3));
actions.add_item(add_item("fourth item"));
actions.add_item(add_item("first item", 5));
actions.add_item({ type: "unknown" });
