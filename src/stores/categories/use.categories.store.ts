import { create } from "zustand";

import DefaultValues from "@/utils/default.values";

import CategoriesStoreStateInterface from "./categories.store.data.interface";
import LookupDataInterface from "../common/lookup.data.interface";

export const useCategoriesStore = create<CategoriesStoreStateInterface>((set) => ({
  categories: {
    default: [DefaultValues.getSelect()],
    newsApi: [
      DefaultValues.getSelect(),
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
    guardian: [DefaultValues.getSelect()],
    newYorkTimes: [DefaultValues.getSelect()],
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
