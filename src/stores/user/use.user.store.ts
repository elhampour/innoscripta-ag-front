import { create } from "zustand";
import UserStoreStateInterface from "./user.store.state.interface";
import { ApiSourceType } from "@/types/api.source.type";
import UserStoreDataInterface from "./user.store.data.interface";

export const useUserStore = create<UserStoreStateInterface>((set, get) => ({
  user: {
    category: "-1",
    sources: [],
    authors: [],
    apiSourceType: ApiSourceType.Guardian,
  },
  setUser: (data: UserStoreDataInterface) => {
    set({
      user: data,
    });
  },
  clearUser: () => {
    set({
      user: {
        category: "-1",
        sources: [],
        authors: [],
        apiSourceType: ApiSourceType.Guardian,
      },
    });
  },
  setUserApiSourceType: (apiSourceType: string[]) => {
    let newState = {
      ...get(),
      user: {
        ...get().user,
      },
    };
    if (apiSourceType[0] == ApiSourceType.Guardian) {
      newState.user.apiSourceType = ApiSourceType.Guardian;
    }
    if (apiSourceType[0] == ApiSourceType.NewsApi) {
      newState.user.apiSourceType = ApiSourceType.NewsApi;
    }
    if (apiSourceType[0] == ApiSourceType.NewYorkTimes) {
      newState.user.apiSourceType = ApiSourceType.NewYorkTimes;
    }

    localStorage.setItem("user", JSON.stringify(newState.user));

    set(newState);
  },
  setUserCategory: (category: string) => {
    let newState = {
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
    let newState = {
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
    let newState = {
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
