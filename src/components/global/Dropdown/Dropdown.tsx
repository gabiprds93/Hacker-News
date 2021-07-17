import { Dropdown as DropdownUI } from "semantic-ui-react";

//Types, Styles
import { DropdownProps as Props } from "./Dropdown.types";
import Styles from "./Dropdown.styles";

const Dropdown: React.FC<Props> = (props) => {
  return (
    <Styles className="Dropdown">
      <DropdownUI {...props} />
    </Styles>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
