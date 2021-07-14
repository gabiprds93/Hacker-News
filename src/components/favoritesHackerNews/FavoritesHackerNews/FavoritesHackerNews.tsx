import React from "react";

import Styles from "./FavoritesHackerNews.styles";
import { FavoritesHackerNewsProps as Props } from "./FavoritesHackerNews.types";

const FavoritesHackerNews: React.FC<Props> = (props) => {
  return (
    <Styles className="FavoritesHackerNews">
      FavoritesHackerNews
    </Styles>
  )
};

FavoritesHackerNews.defaultProps = {};

export default FavoritesHackerNews;
