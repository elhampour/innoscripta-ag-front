import GuardianApiContentsInterface from "./guardian.api.contents.interface";

const FilterByAuthors = (
  response: GuardianApiContentsInterface,
  authorsList: string[]
): GuardianApiContentsInterface => {
  const authorsArray = authorsList.map((author) => author.toLowerCase());
  const filteredResults = response.response.results
    .filter((a) => a.tags.some((tag) => tag.type === "contributor"))
    .filter((result) =>
      authorsArray.includes(
        result.tags.find((tag) => tag.type === "contributor")?.webTitle.toLowerCase()
      )
    );
  return { response: { ...response.response, results: filteredResults } };
};

export default FilterByAuthors;
