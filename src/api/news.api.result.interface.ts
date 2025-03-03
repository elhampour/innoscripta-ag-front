import HomeStoreItemInterface from "./home.store.item.interface";

export default interface NewsApiResultInterface {
  success: boolean;
  items: HomeStoreItemInterface[];
  total: number;
}
