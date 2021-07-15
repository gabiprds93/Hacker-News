import styled from "styled-components";

import { TabLinkStyledProps as Props } from "./TabLink.types";

const TabLinkStyled = styled.div<Props>`
  &.TabLink {
    border: solid 1px var(--palette-borderTab);
    border-radius: 0.2rem;
    color: var(--palette-tabText);
    font-size: 1.6rem;
    font-weight: 500;
    text-align: center;
    width: 9.6rem;

    & a,
    &:visited {
      color: var(--palette-tabText);
      text-decoration: none;
    }

    &--active {
      border: solid 1px var(--palette-activeTab);

      & a,
      &:visited {
        color: var(--palette-activeTab);
      }
    }
  }

  .TabLink {
    &__link {
      padding: 0.8rem 0;
    }
  }
`;

export default TabLinkStyled;
