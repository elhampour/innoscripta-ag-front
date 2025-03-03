import { create } from "zustand";
import CategoriesStoreStateInterface from "./categories.store.data.interface";
import LookupDataInterface from "../lookup.data.interface";

export const useCategoriesStore = create<CategoriesStoreStateInterface>((set, get) => ({
  categories: [],
  setCategories: (data: LookupDataInterface[]) => {
    set((state) => ({
      categories: data,
    }));
  },
}));
