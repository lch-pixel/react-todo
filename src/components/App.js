import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { TodoList } from "./list/TodoList";
import styled from "styled-components";
import { AddTodo } from "./list/AddTodo";

const Wrapper = styled.section`
  width: 600px;
  height: 400px;
  background-color: #f5f5f5;
  padding: 15px;
  border-radius: 20px;
`;

const Header = styled.h1``;

function App() {
  return (
    <Wrapper>
      <Header>Todo</Header>
      <TodoList />
      <hr />
      <AddTodo />
    </Wrapper>
  );
}

export default App;
