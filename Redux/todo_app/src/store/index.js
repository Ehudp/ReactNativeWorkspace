import { createStore } from "redux";
import rootReducer from "../reducers";
//import todos from "../reducers/todos";
//import visibilityFilter from "../reducers/visibilityFilter";

// const todoApp = (state = {}, action) => {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   };
// };

//export default (store = createStore(todoApp));

export default (store = createStore(rootReducer));
