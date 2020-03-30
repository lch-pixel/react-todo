import React from "react";
import { ListGroup } from "react-bootstrap";
import { CheckIcon, TimesIcon } from "../../../common/icons";
import styled from "styled-components";

const Item = styled(ListGroup.Item)`
  display: table;
  vertical-align: middle;
`;

const Text = styled.span`
  display: table-cell;
  vertical-align: middle;
  text-decoration: ${props => (props.isCompleted ? "line-through" : "none")};
`;

const IconRapper = styled.span`
  display: ${props => (props.isCompleted ? "none" : "inline-block")};
  float: ${props => props.float || "right"};
`;

const TodoItem = ({ toggleTodo, deleteTodo, isCompleted, text }) => {
  return (
    <Item>
      <Text isCompleted={isCompleted}>{text}</Text>
      <IconRapper onClick={deleteTodo}>
        <TimesIcon bc="#d9534f" />
      </IconRapper>
      <IconRapper onClick={toggleTodo} isCompleted={isCompleted}>
        <CheckIcon bc="#5bb85d" isCompleted={isCompleted} />
      </IconRapper>
    </Item>
  );
};

export default TodoItem;
