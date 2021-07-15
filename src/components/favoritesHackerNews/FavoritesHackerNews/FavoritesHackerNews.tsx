import Styles from "./FavoritesHackerNews.styles";
import { FavoritesHackerNewsProps as Props } from "./FavoritesHackerNews.types";
import Header from "../../global/Header/Header";
import Tabs from "../../global/Tabs/Tabs";

const FavoritesHackerNews: React.FC<Props> = (props) => {
  return (
    <Styles className="FavoritesHackerNews">
      <Header />

      <Tabs />
    </Styles>
  );
};

FavoritesHackerNews.defaultProps = {};

export default FavoritesHackerNews;
