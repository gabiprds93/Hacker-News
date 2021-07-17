import styled from "styled-components";

import { NewsListStyledProps as Props } from "./NewsList.types";

const NewsListStyled = styled.div<Props>`
  &.NewsList {
    display: grid;
    grid-template-columns: 48% 48%;
    justify-content: space-between;

    @media screen and (max-width: 1024px) {
      grid-template-columns: 100%;
    }
  }

  .NewsList {
  }
`;

export default NewsListStyled;
