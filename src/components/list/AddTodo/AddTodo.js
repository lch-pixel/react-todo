import React, { useState } from "react";
import { addTodo } from "../../../redux/todo-list/todoSlice";
import { connect } from "react-redux";
import { FormControl, Row, Container, Col, Button } from "react-bootstrap";
import styled from "styled-components";

const Label = styled.label`
  margin: 0;
  margin-left: 10px;
  font-weight: bold;
`;

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState("");

  return (
    <Container>
      <Row className="align-items-center">
        <Col>
          <Label>Task</Label>
        </Col>
        <Col className="p-0" xs={10}>
          <FormControl
            id="task"
            placeholder="What do you need to do?"
            onChange={e => setInput(e.target.value)}
            value={input}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Button
            className="float-right"
            variant="primary"
            onClick={() => {
              if (!input.trim()) {
                return;
              }
              dispatch(addTodo(input));
              setInput("");
            }}
          >
            Save Item
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default connect()(AddTodo);
