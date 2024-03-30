import { createStore } from "redux";

const initialState = {
  users: [
    {
      id: 1,
      name: "John",
    },

    {
      id: 2,
      name: "Jane",
    },

    {
      id: 3,
      name: "Jim",
    },
  ],
  todos: [
    { userID: 1, todoId: 1, text: "complete deployment" },
    { userID: 1, todoId: 2, text: "raise the bug" },
    { userID: 2, todoId: 1, text: "complete ppt." },
    { userID: 2, todoId: 2, text: "take interview" },
    { userID: 3, todoId: 1, text: "plan the sprint" },
  ],
};

// function reducer (state, action) {
//   if (action.type == "EDIT_TODO") {
//     return {
//       ...state,
//       todos: state.todos.map((todo) => {
//         if (todo.todoId == action.todoId) {
//           return {
//             ...todo,
//             text: action.text,
//           };
//         }
//         return todo;
//       }),
//     };
//   }
// }

function reducer1(state, action) {
  if (action.type === "EDIT_TODO") {
    return {
      ...state,
      todos: state.todos.map((todo) => {
        if (todo.todoId === action.todoId && todo.userID === action.userID) {
          return {
            ...todo,
            text: action.text,
          };
        }
        return todo;
      }),
    };
  }
  return state; // Ensure to return state for unchanged actions
}


const store = createStore(reducer1, initialState);

store.subscribe(() => {});

store.dispatch({
  type: "EDIT_TODO",
  userID: 1,
  todoId: 1,
  text: "complete deployment in 2 days",
});

console.log(store.getState());
