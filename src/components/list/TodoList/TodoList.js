import React, { useState } from "react";
import { ListGroup } from "react-bootstrap";
import { TodoItem } from "../TodoItem";

const TodoList = () => {
  const [list, setList] = useState([]);

  return (
    <ListGroup>
      {list.map(item => (
        <TodoItem item={item} />
      ))}
    </ListGroup>
  );
};

export default TodoList;
