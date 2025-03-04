import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import HtmlExtensions from "@/utils/html.extensions";

import GuardianApiContentsInterface from "./guardian.api.contents.interface";
import GuardianApiContentsResultInterface from "./guardian.api.contents.result.interface";
import BuildApiUrl from "./build.api.url";
import ProcessSourcesAndAuthors from "./process.sources.and.authors";
import FilterByPublications from "./filter.by.publications";
import FilterByAuthors from "./filter.by.authors";

const FetchGuardianApiContents = async (
  filter: ArticlesFilterStoreInterface
): Promise<GuardianApiContentsResultInterface> => {
  const url = BuildApiUrl(filter);
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  const result: GuardianApiContentsInterface =
    (await response.json()) as GuardianApiContentsInterface;
  const { sources, authors } = ProcessSourcesAndAuthors(result);

  let filteredResult = result;
  if (filter.sources.length > 0) {
    filteredResult = FilterByPublications(filteredResult, filter.sources);
  }
  if (filter.authors.length > 0) {
    filteredResult = FilterByAuthors(filteredResult, filter.authors);
  }

  const articles: ArticlesStoreItemInterface[] = filteredResult.response.results.map(
    (newsArticle) => {
      const contributor = newsArticle.tags.find((a) => a.type === "contributor");
      return {
        author: contributor?.webTitle || "",
        title: newsArticle.webTitle,
        publishedAt: newsArticle.webPublicationDate,
        urlToImage: newsArticle.fields.thumbnail,
        description: HtmlExtensions.htmlToText(newsArticle.fields.standfirst),
        source: newsArticle.fields.publication,
        category: newsArticle.sectionName,
      };
    }
  );

  return {
    success: filteredResult.response.status === "ok",
    items: filteredResult.response.status === "ok" ? articles : [],
    authors: filteredResult.response.status === "ok" ? authors : [],
    sources: filteredResult.response.status === "ok" ? sources : [],
  };
};

export default FetchGuardianApiContents;
