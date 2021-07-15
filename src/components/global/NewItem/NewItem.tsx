import Styles from "./NewItem.styles";
import { NewItemProps as Props } from "./NewItem.types";

import { ReactComponent as TimeSvg } from "../../../assets/images/time.svg";
import { ReactComponent as HeartRegularSvg } from "../../../assets/images/heart-regular.svg";

const NewItem: React.FC<Props> = (props) => {
  return (
    <Styles className="NewItem">
      <div className="NewItem__info">
        <div className="NewItem__info__top">
          <TimeSvg />
          <span>2 hours ago by author</span>
        </div>

        <span className="NewItem__info__title">
          Event-driven state management in React using Storeon
        </span>
      </div>

      <div className="NewItem__favorite">
        <HeartRegularSvg />
      </div>
    </Styles>
  );
};

NewItem.defaultProps = {};

export default NewItem;
