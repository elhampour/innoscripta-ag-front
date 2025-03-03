import LookupDataInterface from "../lookup.data.interface";

export default interface SourcesStoreStateInterface {
  sources: LookupDataInterface[];
  setSources: (data: LookupDataInterface[]) => void;
}
