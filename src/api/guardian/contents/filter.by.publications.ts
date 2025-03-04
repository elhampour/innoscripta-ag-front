import GuardianApiContentsInterface from "./guardian.api.contents.interface";

const FilterByPublications = (
  response: GuardianApiContentsInterface,
  publicationsList: string[]
): GuardianApiContentsInterface => {
  const publicationArray = publicationsList.map((pub) => pub.toLowerCase());
  const filteredResults = response.response.results.filter((result) =>
    publicationArray.includes(result.fields.publication.toLowerCase())
  );
  return { response: { ...response.response, results: filteredResults } };
};

export default FilterByPublications;
