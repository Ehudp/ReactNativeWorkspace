const visibilityFilter = (state = "SHOW_ALL", action) => {
  //console.log("visibilityFilter State :", state);
  switch (action.type) {
    case "SET_VISIBLE_FILTER":
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
