import React from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../action/action";

let Select = () => {

    const dispatch = useDispatch()
    const themes = useSelector(state => state.themes)
    const theme = useSelector(state => state.theme)

    const [value, setValue] = React.useState(theme.bg)

    React.useEffect(() => {
        dispatch(changeTheme(value))
    }, [value, dispatch])

    let handleChange = (event) => {
        setValue(event.target.value)
    }

  return (
    <Form className="position-absolute top-0 end-0 m-3">
      <Form.Control size="sm" as="select" value={value} onChange={event => handleChange(event)}>
        {themes.map((theme, id) => <option key={theme.name + id} value={theme.bg}>{theme.name}</option>)}
      </Form.Control>
    </Form>
  );
};

export default Select;
