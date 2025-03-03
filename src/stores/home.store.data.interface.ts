import HomeStoreItemInterface from "./home.store.item.interface";

export default interface HomeStoreDataInterface {
  pages: number;
  current: number;
  itemPerPage: number;
  term: string;
  items: HomeStoreItemInterface[];
  totalCount: number;
}
