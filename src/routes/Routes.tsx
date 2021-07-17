import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import AllHackerNews from "../pages/AllHackerNews.page";
import FavoritesHackerNews from "../pages/FavoritesHackerNews.page";
// Context
import FavoritesProvider from "../contexts/favorites/favorites.context";

const Routes = () => {
  const queryClientRef = useRef<QueryClient>();

  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: true,
        },
      },
    });
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <FavoritesProvider>
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
      </FavoritesProvider>
    </QueryClientProvider>
  );
};

export default Routes;
