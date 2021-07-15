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
      padding: 0 1.6rem;
    }

    &__dropdown {
      width: 24rem;
    }
  }
`;

export default AllHackerNewsStyled;
