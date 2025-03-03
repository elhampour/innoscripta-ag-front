import { create } from "zustand";
import ArticlesStoreStateInterface from "./articles.store.state.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";
import dayjs, { Dayjs } from "dayjs";

export const useArticlesStore = create<ArticlesStoreStateInterface>((set, get) => ({
  articles: {
    pages: 0,
    items: [],
    totalCount: 0,
  },
  filter: {
    current: 1,
    itemPerPage: 6,
    term: "",
    catgeory: "",
    sources: [],
    date: null,
  },
  filterByTerm: (term: string) => {
    set((state) => ({
      filter: {
        ...state.filter,
        term: term,
      },
    }));
  },
  filterByCategory: (category: string) => {
    set((state) => ({
      filter: {
        ...state.filter,
        catgeory: category,
        sources: [],
      },
    }));
  },
  filterBySources: (sources: string[]) => {
    set((state) => ({
      filter: {
        ...state.filter,
        sources: sources,
        catgeory: "",
      },
    }));
  },
  filterByDate: (date: Dayjs) => {
    set((state) => ({
      filter: {
        ...state.filter,
        date: date,
      },
    }));
  },
  setArticles: (data: ArticlesStoreItemInterface[], totalCount: number) => {
    let pages = totalCount / get().filter.itemPerPage;
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
