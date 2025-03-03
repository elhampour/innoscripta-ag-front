import ArticlesStoreDataInterface from "./articles.store.data.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";

export default interface ArticlesStoreStateInterface {
  articles: ArticlesStoreDataInterface;
  setArticles: (data: ArticlesStoreItemInterface[], totalCount: number) => void;
  getArticles: (page: number, itemPerPage: number, term: string) => void;
}
