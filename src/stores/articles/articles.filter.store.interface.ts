import { Dayjs } from "dayjs";

import { ApiSourceType } from "@/types/api.source.type";

export default interface ArticlesFilterStoreInterface {
  term: string;
  category: string;
  sources: string[];
  authors: string[];
  date: Dayjs;
  apiSourceType: ApiSourceType;
}
