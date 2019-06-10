import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";

// const combineReducers = reducers => {
//   console.log(reducers);
//   return (state = {}, action) => {
//     //  console.log("State", state);
//     return Object.keys(reducers).reduce((nextState, key) => {
//    //   console.log("nextState", nextState);
//       nextState[key] = reducers[key](state[key], action);

//       return nextState;
//     }, {});
//   };
// };

export default combineReducers({
  todos,
  visibilityFilter
});
