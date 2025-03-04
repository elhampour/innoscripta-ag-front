import { create } from "zustand";

import DefaultValues from "@/utils/default.values";

import SourcesStoreStateInterface from "./sources.store.data.interface";
import LookupDataInterface from "../common/lookup.data.interface";

export const useSourcesStore = create<SourcesStoreStateInterface>((set) => ({
  sources: {
    default: [DefaultValues.getSelect()],
    newsApi: [DefaultValues.getSelect()],
    guardian: [DefaultValues.getSelect()],
    newYorkTimes: [DefaultValues.getSelect()],
  },
  setSourcesByNewsApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      sources: {
        ...state.sources,
        newsApi: data,
      },
    }));
  },
  setSourcesByGuardianApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      sources: {
        ...state.sources,
        guardian: data,
      },
    }));
  },
  setSourcesByNewYorkTimesApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      sources: {
        ...state.sources,
        newYorkTimes: data,
      },
    }));
  },
}));
