import GuardianApiSectionsResultInterface from "./guardian.api.sections.result.interface";
import FetchApiData from "./fetch.api.data";
import MapSections from "./map.sections";

const FetchGuardianApiSections = async (): Promise<GuardianApiSectionsResultInterface> => {
  const url = `https://content.guardianapis.com/sections?api-key=3f66322e-0a99-47e8-a137-edd22e22b0c1`;
  const result = await FetchApiData(url);
  const sections = MapSections(result);

  return {
    success: result.response.status === "ok",
    items: result.response.status === "ok" ? sections : [],
  };
};

export default FetchGuardianApiSections;
