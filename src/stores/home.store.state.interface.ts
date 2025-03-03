import HomeStoreDataInterface from "./home.store.data.interface";
import HomeStoreItemInterface from "./home.store.item.interface";

export default interface HomeStoreStateInterface {
  homeData: HomeStoreDataInterface;
  setHomeData: (data: HomeStoreItemInterface[], totalCount: number) => void;
  getHomeData: (page: number, itemPerPage: number, term: string) => void;
}
