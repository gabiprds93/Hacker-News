import Styles from "./AllHackerNews.styles";
import { AllHackerNewsProps as Props } from "./AllHackerNews.types";
import Header from "../../global/Header/Header";

const AllHackerNews: React.FC<Props> = (props) => {
  return (
    <Styles className="AllHackerNews">
      <Header />
    </Styles>
  );
};

AllHackerNews.defaultProps = {};

export default AllHackerNews;
