import LookupDataInterface from "../common/lookup.data.interface";
import AuthorsStoreInterface from "./authors.store.interface";

export default interface AuthorsStoreStateInterface {
  authors: AuthorsStoreInterface;
  setAuthorsByNewsApi: (data: LookupDataInterface[]) => void;
  setAuthorsByGuardianApi: (data: LookupDataInterface[]) => void;
}
