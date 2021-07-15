import Styles from "./Tabs.styles";
import { TabsProps as Props } from "./Tabs.types";
import TabLink from "../TabLink/TabLink";

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
