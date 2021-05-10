import Navbar from "react-bootstrap/Navbar";
import Select from "./Select";
import { useSelector } from "react-redux";

let Brand = () => {

    const theme = useSelector(state => state.theme)

  return (
    <Navbar className="mb-5" bg={theme.bg} variant={theme.variant}>
      <Navbar.Brand className="fs-2 fw-bold ms-5">
        ToDo List
        <Select />
      </Navbar.Brand>
    </Navbar>
  );
};

export default Brand;
