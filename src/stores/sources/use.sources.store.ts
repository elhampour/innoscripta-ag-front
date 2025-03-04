import { create } from "zustand";
import SourcesStoreStateInterface from "./sources.store.data.interface";
import LookupDataInterface from "../common/lookup.data.interface";
import DefaultValues from "@/utils/default.values";

export const useSourcesStore = create<SourcesStoreStateInterface>((set, get) => ({
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
