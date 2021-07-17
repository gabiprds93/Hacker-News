// Interfaces and types from context Favorites
import { News } from "../../types/news.type";

// Provider Props
export interface FavoritesProviderProps {
  children: React.ReactNode;
}

// Provider value
export interface FavoritesProviderValue {
  favorites: News[];
  setFavorites: React.Dispatch<React.SetStateAction<News[]>>;
}
