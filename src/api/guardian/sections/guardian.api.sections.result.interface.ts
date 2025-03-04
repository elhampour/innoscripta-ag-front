import LookupDataInterface from "@/stores/lookup.data.interface";

export default interface GuardianApiSectionsResultInterface {
  success: boolean;
  items: LookupDataInterface[];
}
