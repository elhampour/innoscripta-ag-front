import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import LookupDataInterface from "@/stores/common/lookup.data.interface";

export default interface NewYorkTimesApiArticlesResultInterface {
  success: boolean;
  items: ArticlesStoreItemInterface[];
  authors: LookupDataInterface[];
  categories: LookupDataInterface[];
  sources: LookupDataInterface[];
}
