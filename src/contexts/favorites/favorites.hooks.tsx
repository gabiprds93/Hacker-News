import { useContext } from "react";

import { FavoritesContext } from "./favorites.context";
import { FavoritesProviderValue } from "./favorites.context.types";

const useFavorites = () => {
  const context = useContext<FavoritesProviderValue>(FavoritesContext);

  if (typeof context === "undefined") {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }

  return context;
};

export default useFavorites;
