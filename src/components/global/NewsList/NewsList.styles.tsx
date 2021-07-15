import styled from "styled-components";

import { NewsListStyledProps as Props } from "./NewsList.types";

const NewsListStyled = styled.div<Props>`
  &.NewsList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(28rem, 55rem));
    grid-gap: 3.2rem;
    justify-content: space-between;
    padding-top: 2.4rem;
  }

  .NewsList {
  }
`;

export default NewsListStyled;
