import NewsApiSourcesResultInterface from "./news.api.sources.result.interface";
import NewsApiSourcesInterface from "./news.api.sources.interface";
import LookupDataInterface from "@/stores/lookup.data.interface";

const FetchNewsApiSources = async (): Promise<NewsApiSourcesResultInterface> => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=fc9babb014884ee5802a95fb915a78c3`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result: NewsApiSourcesInterface = await response.json();

    const sources: LookupDataInterface[] = result.sources.map((newsArticle) => ({
      id: newsArticle.id,
      name: newsArticle.name,
    }));

    const categories: LookupDataInterface[] = [
      ...new Set(result.sources.map((source) => source.category)),
    ].map((category, index) => ({
      id: (index + 1).toString(),
      name: category,
    }));

    return {
      success: result.status === "ok",
      items: result.status === "ok" ? sources : [],
      catgeories: categories,
    };
  } catch (error) {
    console.error("Error fetching news API:", error);
    return {
      success: false,
      items: [],
      catgeories: [],
    };
  }
};

export default FetchNewsApiSources;
