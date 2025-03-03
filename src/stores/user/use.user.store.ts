import { create } from "zustand";
import UserStoreStateInterface from "./user.store.state.interface";

export const useUserStore = create<UserStoreStateInterface>((set, get) => ({
  user: {
    categories: [],
    sources: [],
    authors: [],
  },
  setUserCategories: (categories: string[]) => {
    set((state) => ({
      user: {
        ...state.user,
        categories: categories,
      },
    }));
  },
  setUserAuthors: (authors: string[]) => {
    set((state) => ({
      user: {
        ...state.user,
        authors: authors,
      },
    }));
  },
  setUserSources: (sources: string[]) => {
    set((state) => ({
      user: {
        ...state.user,
        sources: sources,
      },
    }));
  },
}));
