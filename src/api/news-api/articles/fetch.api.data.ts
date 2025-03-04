import NewsApiArticlesInterface from "./news.api.articles.interface";

const FetchApiData = async (url: string): Promise<NewsApiArticlesInterface> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return (await response.json()) as NewsApiArticlesInterface;
};

export default FetchApiData;
