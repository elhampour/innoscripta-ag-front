import LookupDataInterface from "../lookup.data.interface";

export default interface CategoriesStoreStateInterface {
  categories: LookupDataInterface[];
  setCategories: (data: LookupDataInterface[]) => void;
}
