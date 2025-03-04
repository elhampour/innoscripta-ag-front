import GuardianApiSectionsInterface from "./guardian.api.sections.interface";

const FetchApiData = async (url: string): Promise<GuardianApiSectionsInterface> => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  return (await response.json()) as GuardianApiSectionsInterface;
};

export default FetchApiData;
