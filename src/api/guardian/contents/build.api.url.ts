import dayjs from "dayjs";

import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import DefaultValues from "@/utils/default.values";

const BuildApiUrl = (filter: ArticlesFilterStoreInterface): string => {
  let url = `https://content.guardianapis.com/search?api-key=3f66322e-0a99-47e8-a137-edd22e22b0c1&show-fields=thumbnail,publication,standfirst&show-tags=contributor`;

  if (filter.term) url += `&q=${filter.term}`;
  if (filter.date) {
    const today = dayjs(filter.date).format("YYYY-MM-DD");
    const tomorrow = dayjs(filter.date).add(1, "day").format("YYYY-MM-DD");
    url += `&from-date=${today}&to-date=${tomorrow}`;
  }
  if (filter.category !== DefaultValues.getSelect().id) url += `&section=${filter.category}`;

  return url;
};

export default BuildApiUrl;
