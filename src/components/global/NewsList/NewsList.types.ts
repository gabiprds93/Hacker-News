// Interfaces and types from component NewsList
import { News } from "../../../types/news.type";

// Component Props
export interface NewsListProps {
  query?: string;
  news?: News[] | undefined;
}

// Styled Component Props
export interface NewsListStyledProps {
  className: string;
}
