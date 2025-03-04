import { Dayjs } from "dayjs";

import ArticlesFilterStoreInterface from "./articles.filter.store.interface";
import ArticlesStoreDataInterface from "./articles.store.data.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";

export default interface ArticlesStoreStateInterface {
  articles: ArticlesStoreDataInterface;
  filter: ArticlesFilterStoreInterface;
  setFilter: (apiSourceType, category, sources, authors) => void;
  setArticlesByNewsApi: (data: ArticlesStoreItemInterface[]) => void;
  setArticlesByGuardianApi: (data: ArticlesStoreItemInterface[]) => void;
  setArticlesByNewYorkTimesApi: (data: ArticlesStoreItemInterface[]) => void;
  filterByTerm: (term: string) => void;
  filterByCategory: (category: string) => void;
  filterBySources: (sources: string[]) => void;
  filterByAuthors: (authors: string[]) => void;
  filterByDate: (date: Dayjs) => void;
  filterByApiSourceType: (apiSourceType: string[]) => void;
}
