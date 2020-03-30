import React from "react";
import { ListGroup } from "react-bootstrap";
import { TodoItem } from "../TodoItem";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <ListGroup>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleTodo={() => {
            toggleTodo(todo);
          }}
          deleteTodo={() => {
            deleteTodo(todo);
          }}
        />
      ))}
    </ListGroup>
  );
};

export default TodoList;
