// News services
import axios from "axios";

import { Params } from "./news.service.types";
import { NewsData } from "../../types/news.type";

const baseURL = "https://hn.algolia.com/api/v1/search_by_date";

export const fetchNews = async (params: Params): Promise<NewsData> => {
  try {
    const { data } = await axios.get(baseURL, { params });

    return data;
  } catch (e) {
    throw new Error(e.message);
  }
};
