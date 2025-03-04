import { ApiSourceType } from "@/types/api.source.type";
import { Dayjs } from "dayjs";

export default interface ArticlesFilterStoreInterface {
  term: string;
  category: string;
  sources: string[];
  authors: string[];
  date: Dayjs;
  apiSourceType: ApiSourceType;
}
