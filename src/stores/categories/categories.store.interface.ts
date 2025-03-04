import LookupDataInterface from "../common/lookup.data.interface";

export default interface CategoriesStoreInterface {
  default: LookupDataInterface[];
  newsApi: LookupDataInterface[];
  guardian: LookupDataInterface[];
  newYorkTimes: LookupDataInterface[];
}
