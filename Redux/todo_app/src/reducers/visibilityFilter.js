import { SET_VISIBILITY_FILTER } from "../actions/actionTypes";

const visibilityFilter = (state = "SHOW_ALL", action) => {
  //alert(action.type, action.filter);
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
