// Types, Styles
import { HeaderProps as Props } from "./Header.types";
import Styles from "./Header.styles";

const Header: React.FC<Props> = (props) => {
  return (
    <Styles className="Header">
      <p className="Header__title">HACKER NEWS</p>
    </Styles>
  );
};

Header.defaultProps = {};

export default Header;
