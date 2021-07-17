// Components
import Header from "../../global/Header/Header";
import Tabs from "../../global/Tabs/Tabs";
import NewsList from "../../global/NewsList/NewsList";
// Context
import useFavorites from "../../../contexts/favorites/favorites.hooks";
// Types, Styles
import { FavoritesHackerNewsProps as Props } from "./FavoritesHackerNews.types";
import Styles from "./FavoritesHackerNews.styles";

const FavoritesHackerNews: React.FC<Props> = (props) => {
  const { favorites } = useFavorites();

  return (
    <Styles className="FavoritesHackerNews">
      <header>
        <Header />
      </header>

      <main className="FavoritesHackerNews__main">
        <Tabs />

        <NewsList news={favorites} />
      </main>
    </Styles>
  );
};

FavoritesHackerNews.defaultProps = {};

export default FavoritesHackerNews;
