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
    padding: 4rem 6.4rem;

    @media screen and (min-width: 1441px) {
      padding: 4rem 0;
    }

    @media screen and (max-width: 768px) {
      padding: 4rem 1.6rem;
    }
  }

  .Header {
    &__title {
      color: var(--palette-headerText);
      font-size: 2.8rem;

      @media screen and (min-width: 1441px) {
        margin: auto;
        width: 75%;
      }

      @media screen and (max-width: 768px) {
        text-align: center;
      }
    }
  }
`;

export default HeaderStyled;
