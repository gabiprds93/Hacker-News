import { useInfiniteQuery } from "react-query";

// Services
import { fetchNews } from "./news.service";
// Types
import { NewsData } from "../../types/news.type";

export const useFetchNews = (query: string | undefined) => {
  return useInfiniteQuery(
    "news",
    ({ pageParam }) => {
      return fetchNews({
        query: query ?? "",
        page: pageParam ?? 0,
      });
    },
    {
      enabled: false,
      getNextPageParam: (lastPage: NewsData) => {
        const { page, nbPages } = lastPage;

        return page === nbPages ? undefined : page + 1;
      },
    }
  );
};
