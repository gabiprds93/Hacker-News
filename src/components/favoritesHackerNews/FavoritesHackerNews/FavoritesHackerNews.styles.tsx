import styled from "styled-components";

import { FavoritesHackerNewsStyledProps as Props } from "./FavoritesHackerNews.types";

const FavoritesHackerNewsStyled = styled.div<Props>`
  &.FavoritesHackerNews {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .FavoritesHackerNews {
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
    }
  }
`;

export default FavoritesHackerNewsStyled;
