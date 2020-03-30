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
`;

const TodoItem = ({ item }) => {
  return (
    <Item>
      <Text>
        {item.isCompleted ? <del>{item.children}</del> : item.children}
      </Text>
      <TimesIcon bc="#d9534f" />
      <CheckIcon bc="#5bb85d" />
    </Item>
  );
};

export default TodoItem;
