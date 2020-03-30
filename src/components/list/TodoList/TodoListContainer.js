import { connect } from "react-redux";
import { toggleTodo, deleteTodo } from "../../../redux/todos";
import TodoList from "./TodoList";

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

const mapDispatchToProps = dispatch => ({
  toggleTodo: todo => dispatch(toggleTodo(todo)),
  deleteTodo: todo => dispatch(deleteTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
