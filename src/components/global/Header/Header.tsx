import React from "react";

import Styles from "./Header.styles";
import { HeaderProps as Props } from "./Header.types";

const Header: React.FC<Props> = (props) => {
  return <Styles className="Header">HACKER NEWS</Styles>;
};

Header.defaultProps = {};

export default Header;
