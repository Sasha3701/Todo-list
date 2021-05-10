import React from "react";
import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Brand from "./components/Brand";
import Input from "./components/Input";
import NoTask from "./components/NoTask";
import TodoList from "./components/TodoList";

let App = () => {
  const list = useSelector((state) => state.list);

  return (
    <div>
      <Brand />
      <Container fluid>
        <Row className="justify-content-center">
          <Input />
        </Row>
        <Row className="justify-content-center">
          {list.length !== 0 ? <TodoList /> : <NoTask />}
        </Row>
      </Container>
    </div>
  );
};

export default App;
