import HomeStoreItemInterface from "@/stores/home.store.item.interface";

export default interface NewsApiResultInterface {
  success: boolean;
  items: HomeStoreItemInterface[];
  total: number;
}
