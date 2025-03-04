import NewYorkTimesApiArticlesInterface from "./new.york.times.api.articles.interface";

const FetchApiData = async (url: string): Promise<NewYorkTimesApiArticlesInterface> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return (await response.json()) as NewYorkTimesApiArticlesInterface;
};

export default FetchApiData;
