import UserStoreDataInterface from "./user.store.data.interface";

export default interface UserStoreStateInterface {
  user: UserStoreDataInterface;
  setUserCategories: (categories: string[]) => void;
  setUserAuthors: (authors: string[]) => void;
  setUserSources: (sources: string[]) => void;
}
