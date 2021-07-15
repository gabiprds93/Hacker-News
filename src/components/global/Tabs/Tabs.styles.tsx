import styled from "styled-components";

import { TabsStyledProps as Props } from "./Tabs.types";

const TabsStyled = styled.div<Props>`
  &.Tabs {
    display: flex;
    justify-content: center;
    padding: 6.4rem 1.6rem 12.8rem;
  }

  .Tabs {
  }
`;

export default TabsStyled;
