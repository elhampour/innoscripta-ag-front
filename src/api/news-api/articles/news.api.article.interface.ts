import NewsApiArticleSourceInterface from "./news.api.article.source.interface";

export default interface NewsApiArticleInterface {
  author: string;
  content: string;
  description: string;
  publishedAt: Date;
  source: NewsApiArticleSourceInterface;
  title: string;
  url: string;
  urlToImage: string;
}
