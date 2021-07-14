import React from "react";

import { render } from "setupTests";
import FavoritesHackerNews from "./FavoritesHackerNews";

describe("FavoritesHackerNews", () => {
  it("renders with default props", () => {
    render(<FavoritesHackerNews />);
  });
});
