import React, { createContext, useEffect, useMemo, useState } from "react";
import { ContextDevTool } from "react-context-devtool";
import { News } from "../../types/news.type";
import { getLocalStorage } from "../../utils/common.utils";

import { FavoritesProviderProps as Props } from "./favorites.context.types";
import { FavoritesProviderValue } from "./favorites.context.types";

// @ts-ignore
export const FavoritesContext = createContext<FavoritesProviderValue>();

const FavoritesProvider: React.FC<Props> = (props) => {
  const [favorites, setFavorites] = useState<News[]>([]);

  useEffect(() => {
    const storedFavorites = getLocalStorage("favorites");
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  const value: FavoritesProviderValue = useMemo(() => {
    return {
      favorites,
      setFavorites,
    };
  }, [favorites]);

  return (
    <FavoritesContext.Provider value={value}>
      <ContextDevTool
        context={FavoritesContext}
        id="favorites"
        displayName="Favorites"
      />
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesProvider;
