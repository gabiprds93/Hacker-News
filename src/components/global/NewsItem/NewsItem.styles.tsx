import styled from "styled-components";

import { NewsItemStyledProps as Props } from "./NewsItem.types";

const NewItemStyled = styled.a<Props>`
  &.NewsItem {
    border-radius: 0.6rem;
    border: solid 1px var(--palette-borderNewItem);
    display: flex;
    height: 9.6rem;
    justify-content: space-between;
    margin-bottom: 3.2rem;

    &:hover {
      opacity: 0.4;
    }
  }

  .NewsItem {
    &__info {
      display: flex;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      padding: 0 2.4rem;

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
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        color: var(--palette-titleText);
        display: -webkit-box;
        font-size: 1.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
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

      &__icon {
        cursor: pointer;
      }
    }
  }
`;

export default NewItemStyled;
