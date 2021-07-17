import { useEffect, useState } from "react";
import { DropdownProps } from "semantic-ui-react";

//Components
import Header from "../../global/Header/Header";
import Tabs from "../../global/Tabs/Tabs";
import Dropdown from "../../global/Dropdown/Dropdown";
import NewsList from "../../global/NewsList/NewsList";
// Helpers
import { options } from "./AllHackerNews.helpers";
//Types, Styles
import { AllHackerNewsProps as Props } from "./AllHackerNews.types";
import Styles from "./AllHackerNews.styles";

const AllHackerNews: React.FC<Props> = (props) => {
  const defaultValue = options[0].value;
  const storedQuery = localStorage.getItem("selectedQuery");
  const selectedQuery = storedQuery ?? defaultValue;
  const [query, setQuery] = useState(selectedQuery);

  /**  Function to handle change of dropdown.
   *
   * @param {React.SyntheticEvent<HTMLElement, Event>} event Event that is triggered when there is a change
   * @param {DropdownProps} data Data of dropdown properties
   */
  const handleChange = (
    event: React.SyntheticEvent<HTMLElement, Event>,
    data: DropdownProps
  ) => {
    setQuery(data.value as string);
  };

  useEffect(() => {
    localStorage.setItem("selectedQuery", query);
  }, [query]);

  return (
    <Styles className="AllHackerNews">
      <header>
        <Header />
      </header>

      <main className="AllHackerNews__main">
        <div className="AllHackerNews__main__wrapper-options">
          <Tabs />

          <div className="AllHackerNews__dropdown">
            <Dropdown
              placeholder="Select your news"
              fluid
              selection
              options={options}
              value={query}
              onChange={handleChange}
            />
          </div>
        </div>

        <NewsList query={query} />
      </main>
    </Styles>
  );
};

AllHackerNews.defaultProps = {};

export default AllHackerNews;
