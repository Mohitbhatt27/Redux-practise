import { createStore, combineReducers, applyMiddleware } from 'redux';
const state = {
    users: [
        {
            id: 1, 
            name: 'Sanket',
        },
        {
            id: 2, 
            name: 'Sarthak',
        },
        {
            id: 3, 
            name: 'JD',
        }
    ],
    todos: [
        {
            userId: 1,
            todoId: 1, 
            name: 'complete deployment'
        },
        {
            userId: 1,
            todoId: 2, 
            name: 'raise the bug'
        },
        {
            userId: 3,
            todoId: 1, 
            name: 'plan the sprint'
        },
        {
            userId: 2,
            todoId: 1, 
            name: 'complete ppt'
        },
        {
            userId: 2,
            todoId: 2, 
            name: 'take interview'
        }
    ]
}

function logger1({ getState }) {
    return next => action => {
      console.log('will dispatch from logger 1', action)
  
      // Call the next dispatch method in the middleware chain.
      const returnValue = next(action)
  
      console.log('state after dispatch from logger 1', returnValue, getState())
  
      // This will likely be the action itself, unless
      // a middleware further in chain changed it.
      return returnValue
    }
  }

  function logger2({getState, dispatch}) { 
    return function (next) {
        return function (action) {
            // action we dispatched
            console.log("My impl", action, getState());
            const response = next(action);
            console.log("response", response, getState());

            return 10;
        }
    }
  }

const ADD_USER = 'ADD_USER';
const EDIT_TODO = 'EDIT_TODO';
function userReducer(users = state.users, action) {
    if(action.type == ADD_USER) {
        let newUser = { id: action.userId, name: action.userName };
        let newUsers = [ ...users, newUser] ;
        return newUsers;
    }
    return users;
}

function todoReducer(todos = state.todos, action) {
    if(action.type == EDIT_TODO) {
        let newTodos = todos.map(todo => {
            if(todo.todoId == action.todoId && todo.userId == action.userId) {
                todo.name = action.name;
            }
            return todo;
        });
        return newTodos;
    }
    return todos;
}



const combinedReducer = combineReducers({users: userReducer, todos: todoReducer});
const store = createStore(combinedReducer, {}, applyMiddleware(logger1, logger2));



store.dispatch({type: ADD_USER, userId: 5, userName: 'Tanmay'});

