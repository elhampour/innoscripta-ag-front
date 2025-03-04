import dayjs from "dayjs";

import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";

const BuildUrl = (filter: ArticlesFilterStoreInterface): string => {
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=LJTszMqBWnOhHg96tIl5FtgJpM5IWOlL`;

  if (filter.term.length >= 1) {
    url += `&q=${filter.term}`;
  }

  if (filter.date) {
    const today = dayjs(filter.date).format("YYYYMMDD");
    const tomorrow = dayjs(filter.date).add(1, "day").format("YYYYMMDD");
    url += `&begin_date=${today}&end_date=${tomorrow}`;
  }

  return url;
};

export default BuildUrl;
