import { useInfiniteQuery } from "react-query";

import { fetchNews } from "./news.service";

export const useFetchNews = (query: any) => {
  return useInfiniteQuery(
    "news",
    ({ pageParam }) => {
      return fetchNews({
        query,
        page: pageParam ?? 0,
      });
    },
    {
      enabled: true,
      getNextPageParam: (lastPage: any) => {
        const { page, nbPages } = lastPage;

        return page === nbPages ? undefined : page + 1;
      },
    }
  );
};
