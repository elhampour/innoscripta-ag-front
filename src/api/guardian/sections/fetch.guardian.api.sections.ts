import LookupDataInterface from "@/stores/common/lookup.data.interface";
import DefaultValues from "@/utils/default.values";

import GuardianApiSectionsInterface from "./guardian.api.sections.interface";
import GuardianApiSectionsResultInterface from "./guardian.api.sections.result.interface";

const FetchGuardianApiSections = async (): Promise<GuardianApiSectionsResultInterface> => {
  const response = await fetch(
    `https://content.guardianapis.com/sections?api-key=3f66322e-0a99-47e8-a137-edd22e22b0c1`
  );

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result: GuardianApiSectionsInterface =
    (await response.json()) as GuardianApiSectionsInterface;

  const sections: LookupDataInterface[] = [
    DefaultValues.getSelect(),
    ...result.response.results.map((newsArticle) => ({
      id: newsArticle.id,
      name: newsArticle.webTitle,
    })),
  ];

  return {
    success: result.response.status === "ok",
    items: result.response.status === "ok" ? sections : [],
  };
};

export default FetchGuardianApiSections;
