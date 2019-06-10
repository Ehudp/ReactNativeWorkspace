import { connect } from "react-redux";
import TodoList from "../components/TodoList";
import { toggleTodo } from "../actions";
import store from "../store";

const mapStateToProps = state => {
  //console.log("mapStateToProps State :", state);
  //console.log("store State :", store.getState());
  return { todos: state.todos };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
