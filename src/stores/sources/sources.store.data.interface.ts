import LookupDataInterface from "../common/lookup.data.interface";
import { SourcesStoreItemStateInterface } from "./sources.store.item.state.interface";

export default interface SourcesStoreStateInterface {
  sources: SourcesStoreItemStateInterface;
  setSourcesByNewsApi: (data: LookupDataInterface[]) => void;
  setSourcesByGuardianApi: (data: LookupDataInterface[]) => void;
  setSourcesByNewYorkTimesApi: (data: LookupDataInterface[]) => void;
}
