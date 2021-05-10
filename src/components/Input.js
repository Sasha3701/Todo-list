import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../action/action";

let Input = () => {
  const [value, setValue] = React.useState("");

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme);

  let handleChange = (event) => {
    setValue(event.target.value);
  };

  let addItemInStore = () => {
    const item = {
      id: Date.now().toString(),
      text: value,
      isReady: false,
    };
    dispatch(addItem(item));
    setValue("");
  };

  let handleClick = () => {
    addItemInStore();
  };

  let handleKeyPress = (event) => {
    if (event.key === "Enter") {
      addItemInStore();
    }
  };

  return (
    <React.Fragment>
      <InputGroup className="w-50 mb-5" size='sm'>
        <FormControl
          value={value}
          onChange={(event) => handleChange(event)}
          onKeyPress={handleKeyPress}
          placeholder="Enter task..."
        />
        <InputGroup.Append>
          <Button onClick={handleClick} variant={theme.bg} disabled={!value}>
            Add
          </Button>
        </InputGroup.Append>
      </InputGroup>
    </React.Fragment>
  );
};

export default Input;
