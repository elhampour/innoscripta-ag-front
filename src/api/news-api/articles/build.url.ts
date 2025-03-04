import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";

const BuildUrl = (filter: ArticlesFilterStoreInterface): string => {
  const baseUrl = `https://newsapi.org/v2/everything?apiKey=70060ea1249b466685fcb26986e08be4`;
  return filter.term.length >= 1 ? `${baseUrl}&q=${filter.term}` : `${baseUrl}&q=a`;
};

export default BuildUrl;
