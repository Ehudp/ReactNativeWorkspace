import { combineReducers, createStore } from "redux";

import counterReducer from "./CounterReducer";

const AppReducers = combineReducers({
  counterReducer
});

const store = createStore(AppReducers);

export default store;
