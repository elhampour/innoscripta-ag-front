import NewsApiArticleInterface from "./newsapi.article.interface";

export default interface NewsApiInterface {
  articles: NewsApiArticleInterface[];
  status: string;
  totalResults: number;
}
