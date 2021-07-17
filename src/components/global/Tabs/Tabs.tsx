// Components
import TabLink from "../TabLink/TabLink";
// Types, Styles
import { TabsProps as Props } from "./Tabs.types";
import Styles from "./Tabs.styles";

const Tabs: React.FC<Props> = (props) => {
  return (
    <Styles className="Tabs">
      <TabLink label="All" to="/" activeOnlyWhenExact />

      <TabLink label="My faves" to="/favorites" />
    </Styles>
  );
};

Tabs.defaultProps = {};

export default Tabs;
