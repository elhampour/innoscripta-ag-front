import LookupDataInterface from "../common/lookup.data.interface";

export default interface AuthorsStoreInterface {
  default: LookupDataInterface[];
  newsApi: LookupDataInterface[];
  guardian: LookupDataInterface[];
  newYorkTimes: LookupDataInterface[];
}
