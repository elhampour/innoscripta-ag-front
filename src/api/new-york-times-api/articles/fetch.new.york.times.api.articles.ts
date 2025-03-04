import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";

import NewYorkTimesApiArticlesResultInterface from "./new.york.times.api.articles.result.interface";
import BuildUrl from "./build.url";
import FetchApiData from "./fetch.api.data";
import FilterByAuthors from "./filter.by.authors";
import FilterBySources from "./filter.by.sources";
import MapUniqueValuesToLookupData from "./map.unique.values.to.lookup.data";

const FetchNewYorkTimesApiArticles = async (
  filter: ArticlesFilterStoreInterface
): Promise<NewYorkTimesApiArticlesResultInterface> => {
  const url = BuildUrl(filter);
  let result = await FetchApiData(url);

  if (filter.authors.length >= 1) {
    result = FilterByAuthors(result, filter.authors);
  }

  if (filter.sources.length >= 1) {
    result = FilterBySources(result, filter.sources);
  }

  const authors = MapUniqueValuesToLookupData(
    result.response.docs.map((doc) => doc.byline.original)
  );

  const sources = MapUniqueValuesToLookupData(
    result.response.docs.map((doc) => doc.source)
  );

  const categories = MapUniqueValuesToLookupData(
    result.response.docs.map((doc) => doc.news_desk)
  );

  const homeArticles: ArticlesStoreItemInterface[] = result.response.docs.map((article) => {
    const image = article.multimedia.find((a) => a.type === "image");
    return {
      author: article.byline.original,
      title: article.headline.main,
      publishedAt: article.pub_date,
      urlToImage: image ? `https://static01.nyt.com/${image.url}` : "/images.png",
      description: article.abstract,
      category: article.news_desk,
      source: article.source,
    };
  });

  return {
    success: result.status === "OK",
    items: result.status === "OK" ? homeArticles : [],
    authors: result.status === "OK" ? authors : [],
    sources: result.status === "OK" ? sources : [],
    categories: result.status === "OK" ? categories : [],
  };
};

export default FetchNewYorkTimesApiArticles;
