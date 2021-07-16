import { useState } from "react";
import dayjs from "dayjs";

import Styles from "./NewsItem.styles";
import { NewsItemProps as Props } from "./NewsItem.types";
import { News } from "../../../types/news.type";
import { getLocalStorage } from "../../../utils/common.utils";

import { ReactComponent as TimeSvg } from "../../../assets/images/time.svg";
import { ReactComponent as HeartRegularSvg } from "../../../assets/images/heart-regular.svg";
import { ReactComponent as HeartSolidSvg } from "../../../assets/images/heart-solid.svg";

const NewsItem: React.FC<Props> = (props) => {
  const { newsItem } = props;
  const { author, story_title, story_url, created_at, story_id } = newsItem;
  const storedFavorites: News[] | undefined = getLocalStorage("favorites");
  const findFavorite = storedFavorites?.find(
    (favorite) => favorite.story_id === story_id
  );
  const [isFavorite, setIsFavorite] = useState(!!findFavorite);

  const dateFormat = dayjs(created_at).format("YYYY-MM-D");
  let favorites: News[] | undefined;

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
    if (newsItem) {
      const storedFavorites: News[] | undefined = getLocalStorage("favorites");

      setIsFavorite((prev) => {
        if (prev) {
          favorites = storedFavorites?.filter(
            (favorite) => favorite.story_id !== story_id
          );
        } else {
          favorites = storedFavorites
            ? storedFavorites.concat(newsItem)
            : [newsItem];
        }
        return !prev;
      });

      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

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
