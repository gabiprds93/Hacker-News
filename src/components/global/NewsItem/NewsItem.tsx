import { useEffect, useState } from "react";
import dayjs from "dayjs";

// Context
import useFavorites from "../../../contexts/favorites/favorites.hooks";
// Types, styles
import { NewsItemProps as Props } from "./NewsItem.types";
import { News } from "../../../types/news.type";
import Styles from "./NewsItem.styles";

import { ReactComponent as TimeSvg } from "../../../assets/images/time.svg";
import { ReactComponent as HeartRegularSvg } from "../../../assets/images/heart-regular.svg";
import { ReactComponent as HeartSolidSvg } from "../../../assets/images/heart-solid.svg";

const NewsItem: React.FC<Props> = (props) => {
  const { newsItem } = props;
  const { favorites, setFavorites } = useFavorites();
  const [isFavorite, setIsFavorite] = useState<boolean>();

  const { author, story_title, story_url, created_at, objectID } = newsItem;
  const dateFormat = dayjs(created_at).format("YYYY-MM-D");

  /**  Function to handle click of favorite pseudo button.
   *
   * @param {React.MouseEvent<HTMLDivElement, MouseEvent>} event Event that is triggered when there is a click
   */
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    let favoriteNews: News[] | undefined;

    if (isFavorite) {
      favoriteNews = favorites?.filter(
        (favorite) => favorite.objectID !== objectID
      );
    } else {
      favoriteNews = favorites.length ? favorites.concat(newsItem) : [newsItem];
    }

    setFavorites(favoriteNews);
    localStorage.setItem("favorites", JSON.stringify(favoriteNews));
  };

  useEffect(() => {
    const findFavorite = favorites?.find(
      (favorite) => favorite.objectID === objectID
    );

    setIsFavorite(!!findFavorite);
  }, [favorites, objectID]);

  if (!author || !story_title || !story_url || !created_at) {
    return null;
  }

  return (
    <Styles
      className="NewsItem"
      href={story_url}
      target="_blank"
      rel="noreferrer"
    >
      <div className="NewsItem__info">
        <div className="NewsItem__info__top">
          <TimeSvg />
          <span>{`${dateFormat} by ${author}`}</span>
        </div>

        <span className="NewsItem__info__title">{story_title}</span>
      </div>

      <div className="NewsItem__favorite">
        <div onClick={handleClick} className="NewsItem__favorite__icon">
          {isFavorite ? <HeartSolidSvg /> : <HeartRegularSvg />}
        </div>
      </div>
    </Styles>
  );
};

NewsItem.defaultProps = {};

export default NewsItem;
