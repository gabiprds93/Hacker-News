import styled from "styled-components";

import { HeaderStyledProps as Props } from "./Header.types";

const HeaderStyled = styled.div<Props>`
  &.Header {
    box-shadow: 0 1px 4px 0 var(--palette-shadow);
    background-image: linear-gradient(
      to bottom,
      var(--palette-backgroundTop) -32%,
      var(--palette-white) 124%
    );
    color: var(--palette-headerText);
    font-size: 2.8rem;
    padding: 4rem 15rem;
  }

  .Header {
  }
`;

export default HeaderStyled;
