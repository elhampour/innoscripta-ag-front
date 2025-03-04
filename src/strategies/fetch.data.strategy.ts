import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";

export interface FetchDataStrategy {
  fetchData: (filter: ArticlesFilterStoreInterface) => Promise<void>;
}
