import styled from "styled-components";

import { AllHackerNewsStyledProps as Props } from "./AllHackerNews.types";

const AllHackerNewsStyled = styled.div<Props>`
  &.AllHackerNews {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .AllHackerNews {
    &__main {
      flex: 1;
      padding: 0 6.4rem 3.6rem;

      @media screen and (min-width: 1441px) {
        margin: auto;
        padding: 0 0 3.6rem;
        width: 75%;
      }

      @media screen and (max-width: 768px) {
        padding: 0 1.6rem 3.6rem;
      }

      &__wrapper-options {
        position: relative;
      }
    }

    &__dropdown {
      bottom: 3.2rem;
      left: 0;
      position: absolute;
      width: 24rem;

      @media screen and (max-width: 375px) {
        width: 100%;
      }
    }
  }
`;

export default AllHackerNewsStyled;
