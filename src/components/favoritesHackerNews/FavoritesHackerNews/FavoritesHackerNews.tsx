import Styles from "./FavoritesHackerNews.styles";
import { FavoritesHackerNewsProps as Props } from "./FavoritesHackerNews.types";
import Header from "../../global/Header/Header";
import Tabs from "../../global/Tabs/Tabs";
import NewsList from "../../global/NewsList/NewsList";
import useFavorites from "../../../contexts/favorites/favorites.hooks";

const FavoritesHackerNews: React.FC<Props> = (props) => {
  const { favorites } = useFavorites();

  return (
    <Styles className="FavoritesHackerNews">
      <Header />

      <main className="FavoritesHackerNews__main">
        <Tabs />

        <NewsList news={favorites} />
      </main>
    </Styles>
  );
};

FavoritesHackerNews.defaultProps = {};

export default FavoritesHackerNews;
