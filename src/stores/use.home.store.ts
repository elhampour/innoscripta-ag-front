import { create } from "zustand";
import HomeStoreStateInterface from "./home.store.state.interface";
import HomeStoreItemInterface from "./home.store.item.interface";

export const useHomeStore = create<HomeStoreStateInterface>((set, get) => ({
  homeData: {
    pages: 0,
    current: 1,
    term: "",
    itemPerPage: 4,
    items: [],
    totalCount: 0,
  },
  getHomeData: (page: number, itemPerPage: number, term: string) => {
    set((state) => ({
      homeData: {
        ...state.homeData,
        term: term ? term : "",
        itemPerPage: itemPerPage ? itemPerPage : 5,
        current: page ? page : 1,
      },
    }));
  },
  setHomeData: (data: HomeStoreItemInterface[], totalCount: number) => {
    let pages = totalCount / get().homeData.itemPerPage;
    set((state) => ({
      homeData: {
        ...state.homeData,
        items: data,
        pages: pages,
        totalCount: totalCount,
      },
    }));
  },
}));
