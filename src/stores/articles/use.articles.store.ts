import { create } from "zustand";
import ArticlesStoreStateInterface from "./articles.store.state.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";

export const useArticlesStore = create<ArticlesStoreStateInterface>((set, get) => ({
  articles: {
    pages: 0,
    current: 1,
    term: "",
    itemPerPage: 6,
    items: [],
    totalCount: 0,
  },
  getArticles: (page: number, itemPerPage: number, term: string) => {
    set((state) => ({
      articles: {
        ...state.articles,
        term: term ? term : "",
        itemPerPage: itemPerPage ? itemPerPage : 5,
        current: page ? page : 1,
      },
    }));
  },
  setArticles: (data: ArticlesStoreItemInterface[], totalCount: number) => {
    let pages = totalCount / get().articles.itemPerPage;
    set((state) => ({
      articles: {
        ...state.articles,
        items: data,
        pages: pages,
        totalCount: totalCount,
      },
    }));
  },
}));
