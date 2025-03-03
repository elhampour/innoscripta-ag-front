import ArticlesStoreItemInterface from "./articles.store.item.interface";

export default interface ArticlesStoreDataInterface {
  pages: number;
  current: number;
  itemPerPage: number;
  term: string;
  items: ArticlesStoreItemInterface[];
  totalCount: number;
}
