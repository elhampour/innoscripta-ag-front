import LookupDataInterface from "@/stores/common/lookup.data.interface";

export default interface NewsApiSourcesResultInterface {
  success: boolean;
  items: LookupDataInterface[];
}
