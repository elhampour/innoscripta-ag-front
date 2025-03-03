import NewsApiArticlesResultInterface from "./news.api.articles.result.interface";
import NewsApiArticlesInterface from "./news.api.articles.interface";
import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import dayjs from "dayjs";

const FetchNewsApiArticles = async (
  filter: ArticlesFilterStoreInterface
): Promise<NewsApiArticlesResultInterface> => {
  try {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=fc9babb014884ee5802a95fb915a78c3&pageSize=${
      filter.itemPerPage + 1
    }&page=${filter.current}`;

    if (filter.term.length >= 1) {
      url = `${url}&q=${filter.term}`;
    }

    if (filter.catgeory.length >= 1) {
      url = `${url}&category=${filter.catgeory}&country=us`;
    } else if (filter.sources.length >= 1) {
      url = `${url}&sources=${filter.sources}`;
    } else {
      url = `${url}&country=us`;
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
      urlToImage: newsArticle.urlToImage,
      description: newsArticle.description,
    }));

    if (filter.date != null) {
      homeArticles = homeArticles.filter((article) =>
        dayjs(article.publishedAt).isSame(filter.date, "day")
      );
    }

    return {
      success: newsApiResult.status === "ok",
      items: newsApiResult.status === "ok" ? homeArticles : [],
      total: newsApiResult.status === "ok" ? newsApiResult.totalResults : 0,
    };
  } catch (error) {
    console.error("Error fetching news API:", error);
    return {
      success: false,
      items: [],
      total: 0,
    };
  }
};

export default FetchNewsApiArticles;
