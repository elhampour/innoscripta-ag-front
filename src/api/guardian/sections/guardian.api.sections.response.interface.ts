import GuardianApiSectionsResponseResultInterface from "./guardian.api.sections.response.result.interface";

export default interface GuardianApiSectionsResponseInterface {
  status: string;
  userTier: string;
  total: number;
  results: GuardianApiSectionsResponseResultInterface[];
}
