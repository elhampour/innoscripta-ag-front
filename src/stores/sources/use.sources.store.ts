import { create } from "zustand";
import SourcesStoreStateInterface from "./sources.store.data.interface";
import LookupDataInterface from "../lookup.data.interface";

export const useSourcesStore = create<SourcesStoreStateInterface>((set, get) => ({
  sources: [],
  setSources: (data: LookupDataInterface[]) => {
    set((state) => ({
      sources: data,
    }));
  },
}));
