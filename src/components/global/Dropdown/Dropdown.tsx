import React from "react";
import { Dropdown as DropdownUI } from "semantic-ui-react";

import Styles from "./Dropdown.styles";
import { DropdownProps as Props } from "./Dropdown.types";

const Dropdown: React.FC<Props> = (props) => {
  return (
    <Styles className="Dropdown">
      <DropdownUI {...props} />
    </Styles>
  );
};

Dropdown.defaultProps = {};

export default Dropdown;
