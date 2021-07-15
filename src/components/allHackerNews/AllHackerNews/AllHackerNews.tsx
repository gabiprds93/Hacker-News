import Styles from "./AllHackerNews.styles";
import { AllHackerNewsProps as Props } from "./AllHackerNews.types";
import Header from "../../global/Header/Header";
import Tabs from "../../global/Tabs/Tabs";

const AllHackerNews: React.FC<Props> = (props) => {
  return (
    <Styles className="AllHackerNews">
      <Header />

      <Tabs />
    </Styles>
  );
};

AllHackerNews.defaultProps = {};

export default AllHackerNews;
