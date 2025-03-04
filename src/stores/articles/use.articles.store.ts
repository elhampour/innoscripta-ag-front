import { create } from "zustand";
import ArticlesStoreStateInterface from "./articles.store.state.interface";
import ArticlesStoreItemInterface from "./articles.store.item.interface";
import dayjs, { Dayjs } from "dayjs";
import { ApiSourceType } from "@/types/api.source.type";
import DefaultValues from "@/utils/default.values";

export const useArticlesStore = create<ArticlesStoreStateInterface>((set, get) => ({
  articles: {
    newsApi: [],
    guardian: [],
    newYorkTimes: [],
  },
  filter: {
    apiSourceType: ApiSourceType.Default,
    term: "",
    category: DefaultValues.getSelect().id,
    sources: [],
    authors: [],
    date: null,
  },
  setFilter: (apiSourceType, category, sources, authors) => {
    set((state) => ({
      filter: {
        ...state.filter,
        apiSourceType: apiSourceType,
        category: category,
        sources: sources,
        authors: authors,
      },
    }));
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
        category: category,
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
    const sourceType = apiSourceType[0];
    if (Object.values(ApiSourceType).includes(sourceType as ApiSourceType)) {
      set((state) => ({
        filter: {
          ...state.filter,
          apiSourceType: sourceType as ApiSourceType,
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
