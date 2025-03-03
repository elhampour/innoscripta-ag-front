import HomeStoreItemInterface from "@/stores/home.store.item.interface";

export default interface NewsApiArticlesResultInterface {
  success: boolean;
  items: HomeStoreItemInterface[];
  total: number;
}
