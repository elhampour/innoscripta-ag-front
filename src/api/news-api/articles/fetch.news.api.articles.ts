import NewsApiArticlesResultInterface from "./news.api.articles.result.interface";
import NewsApiArticlesInterface from "./news.api.articles.interface";
import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import dayjs from "dayjs";
import LookupDataInterface from "@/stores/common/lookup.data.interface";

const FetchNewsApiArticles = async (
  filter: ArticlesFilterStoreInterface
): Promise<NewsApiArticlesResultInterface> => {
  let url = `https://newsapi.org/v2/everything?apiKey=70060ea1249b466685fcb26986e08be4`;

  if (filter.term.length >= 1) {
    url = `${url}&q=${filter.term}`;
  } else {
    url = `${url}&q=a`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const newsApiResult: NewsApiArticlesInterface = await response.json();

  let homeArticles: ArticlesStoreItemInterface[] = newsApiResult.articles.map((newsArticle) => ({
    author: newsArticle.author,
    title: newsArticle.title,
    publishedAt: newsArticle.publishedAt,
    urlToImage:
      newsArticle.urlToImage == null ||
      newsArticle.urlToImage == undefined ||
      newsArticle.urlToImage.length == 0
        ? "/images.png"
        : newsArticle.urlToImage,
    description: newsArticle.description,
    category: "",
    source: newsArticle.source.name,
  }));

  const authors: LookupDataInterface[] = [
    { id: "-1", name: "Select" },
    ...[...new Set(homeArticles.map((source) => source.author))].map((author) => ({
      id: author,
      name: author,
    })),
  ];

  return {
    success: newsApiResult.status === "ok",
    items: newsApiResult.status === "ok" ? homeArticles : [],
    authors: newsApiResult.status === "ok" ? authors : [],
  };
};

export default FetchNewsApiArticles;
