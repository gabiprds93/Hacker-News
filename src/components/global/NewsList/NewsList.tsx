import { useCallback, useEffect, useRef } from "react";

// Components
import NewsItem from "../NewsItem/NewsItem";
// Services
import { useFetchNews } from "../../../services/news/news.service.hooks";
//Types, Styles
import { NewsListProps as Props } from "./NewsList.types";
import { News } from "../../../types/news.type";
import Styles from "./NewsList.styles";

const NewsList: React.FC<Props> = (props) => {
  const { query, news } = props;
  const observer = useRef<IntersectionObserver>();
  const {
    data: newsData,
    isLoading,
    isSuccess,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
    refetch,
  } = useFetchNews(query);

  /** Function that triggers to bring more news
   *
   * @param {HTMLDivElement} item Referenced element
   */
  const triggerRef = useCallback(
    (item: HTMLDivElement) => {
      if (isFetchingNextPage) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      });

      if (item) observer.current.observe(item);
    },
    [fetchNextPage, hasNextPage, isFetchingNextPage]
  );

  /** Function to get an array of news
   *
   * @returns { News[]} Returns array of news
   */
  const getNewsArray = useCallback(() => {
    return newsData?.pages.reduce<News[]>((acc, page) => {
      if (!page.hits) {
        return [...acc];
      }

      return [...acc, ...page.hits];
    }, []);
  }, [newsData]);

  const newsArray = getNewsArray();

  useEffect(() => {
    if (query) {
      localStorage.setItem("selectedQuery", query);
      refetch();
    }
  }, [query, refetch]);

  return (
    <Styles className="NewsList">
      {!news ? (
        <>
          {isLoading ? <div>Loading news!</div> : null}

          {isSuccess ? (
            <div className="NewsList__grid">
              {newsArray?.map((newsItem, index) => {
                return <NewsItem key={index} newsItem={newsItem} />;
              })}
            </div>
          ) : null}

          <div ref={triggerRef}>
            {isFetchingNextPage ? "Loading more..." : ""}
          </div>

          {!hasNextPage && !isLoading ? (
            <div>You have scrolled through all the new</div>
          ) : null}
        </>
      ) : null}

      {news?.map((newsItem, index) => {
        return <NewsItem key={index} newsItem={newsItem} />;
      })}
    </Styles>
  );
};

NewsList.defaultProps = {};

export default NewsList;
