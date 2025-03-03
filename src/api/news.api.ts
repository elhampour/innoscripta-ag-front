import HomeStoreDataInterface from "./home.store.data.interface";
import HomeStoreItemInterface from "./home.store.item.interface";
import NewsApiResultInterface from "./news.api.result.interface";
import NewsApiInterface from "./newsapi.interface";

const FetchNewsApi = async (homeData: HomeStoreDataInterface): Promise<NewsApiResultInterface> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=fc9babb014884ee5802a95fb915a78c3&pageSize=${
        homeData.itemPerPage + 1
      }&page=${homeData.current}&q=${homeData.term}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const newsApiResult: NewsApiInterface = await response.json();

    const homeArticles: HomeStoreItemInterface[] = newsApiResult.articles.map((newsArticle) => ({
      author: newsArticle.author,
      title: newsArticle.title,
      publishedAt: newsArticle.publishedAt,
      urlToImage: newsArticle.urlToImage,
      description: newsArticle.description,
    }));

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

export default FetchNewsApi;
