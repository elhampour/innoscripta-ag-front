import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { useAuthorsStore } from "@/stores/authors/use.authors.store";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import FetchNewYorkTimesApiArticles from "@/api/new-york-times-api/articles/fetch.new.york.times.api.articles";

import { FetchDataStrategy } from "./fetch.data.strategy";

export class FetchNewYorkTimesApiStrategy implements FetchDataStrategy {
  async fetchData(filter: ArticlesFilterStoreInterface) {
    const newYorkTimesData = await FetchNewYorkTimesApiArticles(filter);
    if (newYorkTimesData.success) {
      useArticlesStore.getState().setArticlesByNewYorkTimesApi(newYorkTimesData.items);
      useAuthorsStore.getState().setAuthorsByNewYorkTimesApi(newYorkTimesData.authors);
      useSourcesStore.getState().setSourcesByNewYorkTimesApi(newYorkTimesData.sources);
    }
  }
}
