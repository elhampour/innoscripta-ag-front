import LookupDataInterface from "@/stores/common/lookup.data.interface";

export default interface GuardianApiSectionsResultInterface {
  success: boolean;
  items: LookupDataInterface[];
}
