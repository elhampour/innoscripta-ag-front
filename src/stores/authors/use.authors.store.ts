import { create } from "zustand";
import AuthorsStoreStateInterface from "./authors.store.data.interface";
import LookupDataInterface from "../common/lookup.data.interface";

export const useAuthorsStore = create<AuthorsStoreStateInterface>((set, get) => ({
  authors: {
    newsApi: [],
    guardian: [],
    newYorkTimes: [],
  },
  setAuthorsByNewsApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      authors: {
        ...state.authors,
        newsApi: data,
      },
    }));
  },
  setAuthorsByGuardianApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      authors: {
        ...state.authors,
        guardian: data,
      },
    }));
  },
  setAuthorsByNewYorkTimesApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      authors: {
        ...state.authors,
        newYorkTimes: data,
      },
    }));
  },
}));
