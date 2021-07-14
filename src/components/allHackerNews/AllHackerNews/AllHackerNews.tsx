import React from "react";

import Styles from "./AllHackerNews.styles";
import { AllHackerNewsProps as Props } from "./AllHackerNews.types";

const AllHackerNews: React.FC<Props> = (props) => {
  return (
    <Styles className="AllHackerNews">
      AllHackerNews
    </Styles>
  )
};

AllHackerNews.defaultProps = {};

export default AllHackerNews;
