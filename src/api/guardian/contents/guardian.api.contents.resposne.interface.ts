import GuardianApiContentsResponseResultInterface from "./guardian.api.contents.response.result.interface";

export default interface GuardianApiContentsResposneInterface {
  status: string;
  userTier: string;
  total: number;
  startIndex: number;
  pageSize: number;
  currentPage: number;
  pages: number;
  orderBy: string;
  results: GuardianApiContentsResponseResultInterface[];
}
