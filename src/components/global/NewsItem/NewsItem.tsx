import dayjs from "dayjs";

import Styles from "./NewsItem.styles";
import { NewsItemProps as Props } from "./NewsItem.types";

import { ReactComponent as TimeSvg } from "../../../assets/images/time.svg";
import { ReactComponent as HeartRegularSvg } from "../../../assets/images/heart-regular.svg";

const NewsItem: React.FC<Props> = (props) => {
  const { newsItem } = props;

  const { author, story_title, story_url, created_at } = newsItem ?? {};
  const dateFormat = dayjs(created_at).format("YYYY-MM-D");

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.preventDefault();
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
        <div onClick={(event) => handleClick(event)}>
          <HeartRegularSvg />
        </div>
      </div>
    </Styles>
  );
};

NewsItem.defaultProps = {};

export default NewsItem;
