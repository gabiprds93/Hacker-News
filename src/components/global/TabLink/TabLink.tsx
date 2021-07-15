import { Link, useRouteMatch } from "react-router-dom";

import Styles from "./TabLink.styles";
import { TabLinkProps as Props } from "./TabLink.types";

const TabLink: React.FC<Props> = (props) => {
  const { label, to, activeOnlyWhenExact } = props;

  const match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact,
  });

  return (
    <Styles className={`TabLink ${match ? "TabLink--active" : ""}`}>
      <Link to={to}>
        <div className="TabLink__link">{label}</div>
      </Link>
    </Styles>
  );
};

TabLink.defaultProps = {};

export default TabLink;
