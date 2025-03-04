import NewsApiSourcesResultInterface from "./news.api.sources.result.interface";
import NewsApiSourcesInterface from "./news.api.sources.interface";
import LookupDataInterface from "@/stores/common/lookup.data.interface";

const FetchNewsApiSources = async (): Promise<NewsApiSourcesResultInterface> => {
  const response = await fetch(
    `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=70060ea1249b466685fcb26986e08be4`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result: NewsApiSourcesInterface = await response.json();

  const sources: LookupDataInterface[] = [
    {
      id: "-1",
      name: "Select",
    },
    ...result.sources.map((newsArticle) => ({
      id: newsArticle.id,
      name: newsArticle.name,
    })),
  ];

  return {
    success: result.status === "ok",
    items: result.status === "ok" ? sources : [],
  };
};

export default FetchNewsApiSources;
