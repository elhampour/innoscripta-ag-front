import { ApiSourceType } from "@/types/api.source.type";

export default interface UserStoreDataInterface {
  category: string;
  sources: string[];
  authors: string[];
  apiSourceType: ApiSourceType;
}
