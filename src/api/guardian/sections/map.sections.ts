import LookupDataInterface from "@/stores/common/lookup.data.interface";
import DefaultValues from "@/utils/default.values";

import GuardianApiSectionsInterface from "./guardian.api.sections.interface";

const MapSections = (result: GuardianApiSectionsInterface): LookupDataInterface[] => {
  return [
    DefaultValues.getSelect(),
    ...result.response.results.map((section) => ({
      id: section.id,
      name: section.webTitle,
    })),
  ];
};

export default MapSections;
