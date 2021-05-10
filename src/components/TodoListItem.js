import { Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Form } from "react-bootstrap";
import { changeStatus, deleteItem } from "../action/action";
import React from "react";

let TodoListItem = (props) => {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  let handleChange = (event) => {
    dispatch(changeStatus(event.target.id));
  };

  let handleClick = (event) => {
    dispatch(deleteItem(event.target.id));
  };

  const style = [
    "d-flex flex-row",
    props.status ? "text-decoration-line-through" : ""
  ]

  return (
    <li className="d-flex flex-row align-items-center mb-3 fs-5">
      <Card
        bg={theme.bg}
        text={theme.variant.toLowerCase() === "light" ? "dark" : "white"}
        className="flex-fill"
      >
        <Card.Body className={style.join(" ")}>
          <Form.Check
            inline
            id={props.name}
            type="checkbox"
            value={props.status}
            onChange={(event) => handleChange(event)}
          />
          {props.text}
        </Card.Body>
      </Card>
      <i
        id={props.name}
        onClick={(event) => handleClick(event)}
        className="fa fa-trash fa-2x m-2"
      />
    </li>
  );
};

export default TodoListItem;