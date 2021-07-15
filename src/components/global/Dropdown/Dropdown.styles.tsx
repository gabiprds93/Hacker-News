import styled from "styled-components";

import { DropdownStyledProps as Props } from "./Dropdown.types";

const DropdownStyled = styled.div<Props>`
  &.Dropdown {
    & .ui.selection.dropdown .menu > .item {
      padding: 1.2rem 0.8rem !important;
    }

    & .menu .item {
      & .text {
        font-size: 1.4rem;
      }
    }
  }

  .Dropdown {
  }
`;

export default DropdownStyled;
