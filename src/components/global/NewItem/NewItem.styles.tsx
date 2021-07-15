import styled from "styled-components";

import { NewItemStyledProps as Props } from "./NewItem.types";

const NewItemStyled = styled.div<Props>`
  &.NewItem {
    border-radius: 0.6rem;
    border: solid 1px var(--palette-borderNewItem);
    display: flex;
    justify-content: space-between;
  }

  .NewItem {
    &__info {
      flex: 1;
      padding: 2.4rem;

      &__top {
        align-items: center;
        color: var(--palette-infoText);
        display: flex;
        font-size: 1.2rem;
        padding-bottom: 0.8rem;

        & svg {
          margin-right: 0.8rem;
        }
      }

      &__title {
        color: var(--palette-titleText);
        font-size: 1.4rem;
      }
    }

    &__favorite {
      align-items: center;
      background-color: var(--palette-backgroundFav);
      border-top-right-radius: 0.6rem;
      border-bottom-right-radius: 0.6rem;
      display: flex;
      justify-content: center;
      width: 64px;
    }
  }
`;

export default NewItemStyled;
