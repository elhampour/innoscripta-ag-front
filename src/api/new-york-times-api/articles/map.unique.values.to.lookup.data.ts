import LookupDataInterface from "@/stores/common/lookup.data.interface";
import DefaultValues from "@/utils/default.values";

const MapUniqueValuesToLookupData = (items: string[]): LookupDataInterface[] => {
  return [
    DefaultValues.getSelect(),
    ...[...new Set(items)].map((item) => ({
      id: item,
      name: item,
    })),
  ];
};

export default MapUniqueValuesToLookupData;
