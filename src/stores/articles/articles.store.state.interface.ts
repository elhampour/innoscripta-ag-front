import { Dayjs } from "dayjs";
import ArticlesFilterStoreInterface from "./articles.filter.store.interface";
import ArticlesStoreDataInterface from "./articles.store.data.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";

export default interface ArticlesStoreStateInterface {
  articles: ArticlesStoreDataInterface;
  filter: ArticlesFilterStoreInterface;
  setArticles: (data: ArticlesStoreItemInterface[], totalCount: number) => void;
  filterByTerm: (term: string) => void;
  filterByCategory: (category: string) => void;
  filterBySources: (sources: string[]) => void;
  filterByDate: (date: Dayjs) => void;
}
