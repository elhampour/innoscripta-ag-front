import LookupDataInterface from "../common/lookup.data.interface";
import CategoriesStoreInterface from "./categories.store.interface";

export default interface CategoriesStoreStateInterface {
  categories: CategoriesStoreInterface;
  setCategoriesByGuardianApi: (data: LookupDataInterface[]) => void;
  setCategoriesByNewYorkTimesApi: (data: LookupDataInterface[]) => void;
}
