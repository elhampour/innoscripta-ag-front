import { create } from "zustand";
import SourcesStoreStateInterface from "./sources.store.data.interface";
import LookupDataInterface from "../common/lookup.data.interface";

export const useSourcesStore = create<SourcesStoreStateInterface>((set, get) => ({
  sources: {
    newsApi: [
      {
        id: "-1",
        name: "Select",
      },
    ],
    guardian: [
      {
        id: "-1",
        name: "Select",
      },
    ],
    newYorkTimes: [
      {
        id: "-1",
        name: "Select",
      },
    ],
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
