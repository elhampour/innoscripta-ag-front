import { create } from "zustand";

import { ApiSourceType } from "@/types/api.source.type";
import DefaultValues from "@/utils/default.values";

import UserStoreStateInterface from "./user.store.state.interface";
import UserStoreDataInterface from "./user.store.data.interface";

export const useUserStore = create<UserStoreStateInterface>((set, get) => ({
  user: {
    category: DefaultValues.getSelect().id,
    sources: [],
    authors: [],
    apiSourceType: ApiSourceType.Default,
  },
  setUser: (data: UserStoreDataInterface) => {
    set({
      user: data,
    });
  },
  clearUser: () => {
    set({
      user: {
        category: DefaultValues.getSelect().id,
        sources: [],
        authors: [],
        apiSourceType: ApiSourceType.Default,
      },
    });
  },
  setUserApiSourceType: (apiSourceType: string[]) => {
    const sourceType = apiSourceType[0];
    if (Object.values(ApiSourceType).includes(sourceType as ApiSourceType)) {
      const newState = {
        ...get(),
        user: {
          ...get().user,
          apiSourceType: sourceType as ApiSourceType,
        },
      };
      localStorage.setItem("user", JSON.stringify(newState.user));
      set(newState);
    }
  },
  setUserCategory: (category: string) => {
    const newState = {
      ...get(),
      user: {
        ...get().user,
        category: category,
      },
    };
    localStorage.setItem("user", JSON.stringify(newState.user));
    set(newState);
  },
  setUserAuthors: (authors: string[]) => {
    const newState = {
      ...get(),
      user: {
        ...get().user,
        authors: authors,
      },
    };
    localStorage.setItem("user", JSON.stringify(newState.user));
    set(newState);
  },
  setUserSources: (sources: string[]) => {
    const newState = {
      ...get(),
      user: {
        ...get().user,
        sources: sources,
      },
    };
    localStorage.setItem("user", JSON.stringify(newState.user));
    set(newState);
  },
}));
