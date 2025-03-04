import NewYorkTimesApiArticlesInterface from "./new.york.times.api.articles.interface";

const FilterByAuthors = (
  response: NewYorkTimesApiArticlesInterface,
  authorsList: string[]
): NewYorkTimesApiArticlesInterface => {
  const authorsArray = authorsList.map((author) => author.toLowerCase());
  const filteredDocs = response.response.docs
    .filter((doc) => doc.byline.original)
    .filter((doc) => authorsArray.includes(doc.byline.original.toLowerCase()));

  return { ...response, response: { ...response.response, docs: filteredDocs } };
};

export default FilterByAuthors;
