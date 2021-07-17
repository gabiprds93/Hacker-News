import Styles from "./Header.styles";
import { HeaderProps as Props } from "./Header.types";

const Header: React.FC<Props> = (props) => {
  return (
    <Styles className="Header">
      <p className="Header__title">HACKER NEWS</p>
    </Styles>
  );
};

Header.defaultProps = {};

export default Header;
