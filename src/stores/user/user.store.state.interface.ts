import UserStoreDataInterface from "./user.store.data.interface";

export default interface UserStoreStateInterface {
  user: UserStoreDataInterface;
  setUser: (data: UserStoreDataInterface) => void;
  clearUser: () => void;
  setUserCategory: (category: string) => void;
  setUserApiSourceType: (apiSourceType: string[]) => void;
  setUserAuthors: (authors: string[]) => void;
  setUserSources: (sources: string[]) => void;
}
