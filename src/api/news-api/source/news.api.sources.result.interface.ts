import LookupDataInterface from "@/stores/lookup.data.interface";

export default interface NewsApiSourcesResultInterface {
  success: boolean;
  items: LookupDataInterface[];
  catgeories: LookupDataInterface[];
}
