import Styles from "./NewsList.styles";
import { NewsListProps as Props } from "./NewsList.types";
import NewItem from "../NewItem/NewItem";

const NewsList: React.FC<Props> = (props) => {
  return (
    <Styles className="NewsList">
      <NewItem />
      <NewItem />
      <NewItem />
      <NewItem />
    </Styles>
  );
};

NewsList.defaultProps = {};

export default NewsList;
