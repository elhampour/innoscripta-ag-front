import LookupDataInterface from "../common/lookup.data.interface";

export default interface AuthorsStoreInterface {
  newsApi: LookupDataInterface[];
  guardian: LookupDataInterface[];
  newYorkTimes: LookupDataInterface[];
}
