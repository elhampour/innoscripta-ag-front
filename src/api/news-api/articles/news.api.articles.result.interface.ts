import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import LookupDataInterface from "@/stores/common/lookup.data.interface";

export default interface NewsApiArticlesResultInterface {
  success: boolean;
  items: ArticlesStoreItemInterface[];
  authors: LookupDataInterface[];
}
