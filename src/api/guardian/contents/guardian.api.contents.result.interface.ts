import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import LookupDataInterface from "@/stores/common/lookup.data.interface";

export default interface GuardianApiContentsResultInterface {
  success: boolean;
  items: ArticlesStoreItemInterface[];
  authors: LookupDataInterface[];
  sources: LookupDataInterface[];
}
