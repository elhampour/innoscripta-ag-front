import ArticlesFilterStoreInterface from "./articles.filter.store.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";

export default interface ArticlesStoreDataInterface {
  pages: number;
  items: ArticlesStoreItemInterface[];
  totalCount: number;
}
