import NewsApiArticleInterface from "./news.api.article.interface";

export default interface NewsApiArticlesInterface {
  articles: NewsApiArticleInterface[];
  status: string;
  totalResults: number;
}
