import GuardianApiContentsResponseResultField from "./guardian.api.contents.response.result.field";
import GuardianApiContentsResponseResultTag from "./guardian.api.contents.response.result.tag";

export default interface GuardianApiContentsResponseResultInterface {
  id: string;
  type: string;
  sectionId: string;
  sectionName: string;
  webPublicationDate: Date;
  webTitle: string;
  webUrl: string;
  apiUrl: string;
  isHosted: boolean;
  pillarId: string;
  pillarName: string;
  fields: GuardianApiContentsResponseResultField;
  tags: GuardianApiContentsResponseResultTag[];
}
