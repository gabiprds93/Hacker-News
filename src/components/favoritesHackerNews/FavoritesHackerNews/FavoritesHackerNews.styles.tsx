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
      padding: 0 1.6rem;
    }

    &__dropdown {
      width: 24rem;
    }
  }
`;

export default FavoritesHackerNewsStyled;
