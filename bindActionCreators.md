### bindActionsCreators

bindActionsCreators is a function provided in redux, which helps us to wrap our 'actions' in 'dispatch' method.
This way we can use it in our components.
We can pass these binded actions as props to our components.
If we were not to use bindActionsCreators, we would have to pass actions as well as the dispatch method to our components.
That could not be a good thing.