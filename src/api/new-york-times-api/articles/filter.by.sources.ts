import NewYorkTimesApiArticlesInterface from "./new.york.times.api.articles.interface";

const FilterBySources = (
  response: NewYorkTimesApiArticlesInterface,
  sourcesList: string[]
): NewYorkTimesApiArticlesInterface => {
  const sourcesArray = sourcesList.map((source) => source.toLowerCase());
  const filteredDocs = response.response.docs.filter((doc) =>
    sourcesArray.includes(doc.source.toLowerCase())
  );

  return { ...response, response: { ...response.response, docs: filteredDocs } };
};

export default FilterBySources;
