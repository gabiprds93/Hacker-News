import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import AllHackerNews from "../pages/AllHackerNews.page";
import FavoritesHackerNews from "../pages/FavoritesHackerNews.page";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <AllHackerNews />
        </Route>

        <Route path="/favorites">
          <FavoritesHackerNews />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
