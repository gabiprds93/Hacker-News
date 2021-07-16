import { useState } from "react";
import { DropdownProps } from "semantic-ui-react";

import Styles from "./AllHackerNews.styles";
import { AllHackerNewsProps as Props } from "./AllHackerNews.types";
import { options } from "./AllHackerNews.helpers";
import Header from "../../global/Header/Header";
import Tabs from "../../global/Tabs/Tabs";
import Dropdown from "../../global/Dropdown/Dropdown";
import NewsList from "../../global/NewsList/NewsList";

const AllHackerNews: React.FC<Props> = (props) => {
  const defaultValue = options[0].value;
  const [query, setQuery] = useState(defaultValue);

  const handleChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setQuery(data.value as string);
  };

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
            onChange={handleChange}
            defaultValue={defaultValue}
          />
        </div>

        <NewsList query={query} />
      </main>
    </Styles>
  );
};

AllHackerNews.defaultProps = {};

export default AllHackerNews;
