import { create } from "zustand";
import ArticlesStoreStateInterface from "./articles.store.state.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";
import dayjs, { Dayjs } from "dayjs";
import { ApiSourceType } from "@/types/api.source.type";

export const useArticlesStore = create<ArticlesStoreStateInterface>((set, get) => ({
  articles: {
    newsApi: [],
    guardian: [],
    newYorkTimes: [],
  },
  filter: {
    apiSourceType: ApiSourceType.Guardian,
    term: "",
    catgeory: "-1",
    sources: [],
    authors: [],
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
      },
    }));
  },
  filterBySources: (sources: string[]) => {
    set((state) => ({
      filter: {
        ...state.filter,
        sources: sources,
      },
    }));
  },
  filterByAuthors: (authors: string[]) => {
    set((state) => ({
      filter: {
        ...state.filter,
        authors: authors,
      },
    }));
  },
  filterByDate: (date: Dayjs) => {
    let news = {
      ...get(),
      filter: {
        ...get().filter,
        date: date,
      },
    };
    set(news);
  },
  filterByApiSourceType: (apiSourceType: string[]) => {
    if (apiSourceType[0] == ApiSourceType.Guardian) {
      set((state) => ({
        filter: {
          ...state.filter,
          apiSourceType: ApiSourceType.Guardian,
        },
      }));
    }
    if (apiSourceType[0] == ApiSourceType.NewsApi) {
      set((state) => ({
        filter: {
          ...state.filter,
          apiSourceType: ApiSourceType.NewsApi,
        },
      }));
    }
    if (apiSourceType[0] == ApiSourceType.NewYorkTimes) {
      set((state) => ({
        filter: {
          ...state.filter,
          apiSourceType: ApiSourceType.NewYorkTimes,
        },
      }));
    }
  },
  setArticlesByNewsApi: (data: ArticlesStoreItemInterface[]) => {
    set((state) => ({
      articles: {
        ...state.articles,
        newsApi: data,
      },
    }));
  },
  setArticlesByGuardianApi: (data: ArticlesStoreItemInterface[]) => {
    set((state) => ({
      articles: {
        ...state.articles,
        guardian: data,
      },
    }));
  },
  setArticlesByNewYorkTimesApi: (data: ArticlesStoreItemInterface[]) => {
    set((state) => ({
      articles: {
        ...state.articles,
        newYorkTimes: data,
      },
    }));
  },
}));
