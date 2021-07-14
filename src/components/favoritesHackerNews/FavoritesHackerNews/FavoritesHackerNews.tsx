import Styles from "./FavoritesHackerNews.styles";
import { FavoritesHackerNewsProps as Props } from "./FavoritesHackerNews.types";
import Header from "../../global/Header/Header";

const FavoritesHackerNews: React.FC<Props> = (props) => {
  return (
    <Styles className="FavoritesHackerNews">
      <Header />
    </Styles>
  );
};

FavoritesHackerNews.defaultProps = {};

export default FavoritesHackerNews;
