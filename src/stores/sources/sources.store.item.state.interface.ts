import LookupDataInterface from "../common/lookup.data.interface";

export interface SourcesStoreItemStateInterface {
  default: LookupDataInterface[];
  newsApi: LookupDataInterface[];
  guardian: LookupDataInterface[];
  newYorkTimes: LookupDataInterface[];
}
