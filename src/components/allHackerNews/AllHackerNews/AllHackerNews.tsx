import Styles from "./AllHackerNews.styles";
import { AllHackerNewsProps as Props } from "./AllHackerNews.types";
import { options } from "./AllHackerNews.helpers";
import Header from "../../global/Header/Header";
import Tabs from "../../global/Tabs/Tabs";
import Dropdown from "../../global/Dropdown/Dropdown";

const AllHackerNews: React.FC<Props> = (props) => {
  return (
    <Styles className="AllHackerNews">
      <Header />

      <main className="AllHackerNews__main">
        <Tabs />

        <div className="AllHackerNews__dropdown">
          <Dropdown
            placeholder="Select your news"
            fluid
            selection
            options={options}
          />
        </div>
      </main>
    </Styles>
  );
};

AllHackerNews.defaultProps = {};

export default AllHackerNews;
