import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { useAuthorsStore } from "@/stores/authors/use.authors.store";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import FetchNewsApiArticles from "@/api/news-api/articles/fetch.news.api.articles";
import FetchNewsApiSources from "@/api/news-api/sources/fetch.news.api.sources";

import { FetchDataStrategy } from "./fetch.data.strategy";

export class FetchNewsApiStrategy implements FetchDataStrategy {
  async fetchData(filter: ArticlesFilterStoreInterface) {
    const newsApiArticles = await FetchNewsApiArticles(filter);
    if (newsApiArticles.success) {
      useArticlesStore.getState().setArticlesByNewsApi(newsApiArticles.items);
      useAuthorsStore.getState().setAuthorsByNewsApi(newsApiArticles.authors);
    }

    const newsApiSourcesData = await FetchNewsApiSources();
    if (newsApiSourcesData.success) {
      useSourcesStore.getState().setSourcesByNewsApi(newsApiSourcesData.items);
    }
  }
}
