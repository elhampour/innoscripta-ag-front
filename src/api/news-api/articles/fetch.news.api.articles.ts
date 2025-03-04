import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";

import NewsApiArticlesResultInterface from "./news.api.articles.result.interface";
import BuildUrl from "./build.url";
import FetchApiData from "./fetch.api.data";
import GetImageUrl from "./get.image.url";
import MapUniqueValuesToLookupData from "./map.unique.values.to.lookup.data";

const FetchNewsApiArticles = async (
  filter: ArticlesFilterStoreInterface
): Promise<NewsApiArticlesResultInterface> => {
  const url = BuildUrl(filter);
  const newsApiResult = await FetchApiData(url);

  const homeArticles: ArticlesStoreItemInterface[] = newsApiResult.articles.map((newsArticle) => ({
    author: newsArticle.author,
    title: newsArticle.title,
    publishedAt: newsArticle.publishedAt,
    urlToImage: GetImageUrl(newsArticle.urlToImage),
    description: newsArticle.description,
    category: "", // This could be updated if needed
    source: newsArticle.source.name,
  }));

  const authors = MapUniqueValuesToLookupData(homeArticles.map((article) => article.author));

  return {
    success: newsApiResult.status === "ok",
    items: newsApiResult.status === "ok" ? homeArticles : [],
    authors: newsApiResult.status === "ok" ? authors : [],
  };
};

export default FetchNewsApiArticles;
