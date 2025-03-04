import ArticlesStoreItemInterface from "./articles.store.item.interface";

export default interface ArticlesStoreDataInterface {
  newsApi: ArticlesStoreItemInterface[];
  guardian: ArticlesStoreItemInterface[];
}
