### Reducers
    Reducer is a function that takes two arguments: the current state and an action.
    It returns the new state.

### CreateStore
    CreateStore is a function that takes two arguments: reducer and initialState.
    It returns a store object that has 4 methods: 
    1. dispatch, 
    2. subscribe, 
    3. getState, and 
    4. replaceReducer.

### Store 
    is like a blackbox. It has state of the app, and some utility method like dispatch etc. to manage it.

# The only way to change state is by dispatching an action.