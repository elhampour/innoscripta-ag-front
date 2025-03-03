import { Dayjs } from "dayjs";

export default interface ArticlesFilterStoreInterface {
  term: string;
  current: number;
  itemPerPage: number;
  catgeory: string;
  sources: string[];
  date: Dayjs;
}
