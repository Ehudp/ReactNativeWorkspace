import { connect } from "react-redux";
import FilterPanel from "../components/FilterPanel";
import { filterTodos } from "../actions";

const mapStateToProps = state => {
  return { todos: state.todos, currentFilter: state.visibilityFilter };
};

const mapDispatchToProps = dispatch => ({
  showFilter: filter => dispatch(filterTodos(filter))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterPanel);
