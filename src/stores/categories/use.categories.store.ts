import { create } from "zustand";
import CategoriesStoreStateInterface from "./categories.store.data.interface";
import LookupDataInterface from "../common/lookup.data.interface";

export const useCategoriesStore = create<CategoriesStoreStateInterface>((set, get) => ({
  categories: {
    newsApi: [
      {
        id: "-1",
        name: "Select",
      },
      {
        id: "business",
        name: "business",
      },
      {
        id: "entertainment",
        name: "entertainment",
      },
      {
        id: "general",
        name: "general",
      },
      {
        id: "health",
        name: "health",
      },
      {
        id: "science",
        name: "science",
      },
      {
        id: "sports",
        name: "sports",
      },
      {
        id: "technology",
        name: "technology",
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
  setCategoriesByGuardianApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      categories: {
        ...state.categories,
        guardian: data,
      },
    }));
  },
  setCategoriesByNewYorkTimesApi: (data: LookupDataInterface[]) => {
    set((state) => ({
      categories: {
        ...state.categories,
        newYorkTimes: data,
      },
    }));
  },
}));
