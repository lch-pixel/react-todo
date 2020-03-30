import { connect } from "react-redux";
import { addTodo } from "../../../redux/todos";
import AddTodo from "./AddTodo";

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
