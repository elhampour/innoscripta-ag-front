import dayjs from "dayjs";

import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import LookupDataInterface from "@/stores/common/lookup.data.interface";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import DefaultValues from "@/utils/default.values";
import HtmlExtensions from "@/utils/html.extensions";

import GuardianApiContentsInterface from "./guardian.api.contents.interface";
import GuardianApiContentsResultInterface from "./guardian.api.contents.result.interface";

const FetchGuardianApiContents = async (
  filter: ArticlesFilterStoreInterface
): Promise<GuardianApiContentsResultInterface> => {
  let url =
    `https://content.guardianapis.com/search?api-key=3f66322e-0a99-47e8-a137-edd22e22b0c1` +
    `&show-fields=thumbnail,publication,standfirst` +
    `&show-tags=contributor`;

  if (filter.term.length >= 1) {
    url = `${url}&q=${filter.term}`;
  }

  if (filter.date) {
    const today = dayjs(filter.date).format("YYYY-MM-DD");
    const tomorrow = dayjs(filter.date).add(1, "day").format("YYYY-MM-DD");
    url = `${url}&from-date=${today}&to-date=${tomorrow}`;
  }

  if (filter.category != DefaultValues.getSelect().id) {
    url = `${url}&section=${filter.category}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  let result: GuardianApiContentsInterface =
    (await response.json()) as GuardianApiContentsInterface;

  const sources: LookupDataInterface[] = [
    DefaultValues.getSelect(),
    ...[...new Set(result.response.results.map((source) => source.fields.publication))].map(
      (pub) => ({
        id: pub,
        name: pub,
      })
    ),
  ];

  const authors: LookupDataInterface[] = [
    DefaultValues.getSelect(),
    ...[
      ...new Set(
        result.response.results
          .filter((a) => a.tags.find((a) => a.type == "contributor"))
          .map((source) => source.tags.find((a) => a.type == "contributor").webTitle)
      ),
    ].map((author) => ({
      id: author,
      name: author,
    })),
  ];

  const filterByPublications = (
    response: GuardianApiContentsInterface,
    publicationsList: string[]
  ): GuardianApiContentsInterface => {
    const publicationArray = publicationsList.map((pub) => pub.toLowerCase());

    const filteredResults = response.response.results.filter((result) => {
      return publicationArray.includes(result.fields.publication.toLowerCase());
    });

    return {
      response: {
        ...response.response,
        results: filteredResults,
      },
    };
  };

  const filterByAuthors = (
    response: GuardianApiContentsInterface,
    authorsList: string[]
  ): GuardianApiContentsInterface => {
    const authorsArray = authorsList.map((pub) => pub.toLowerCase());

    const filteredResults = response.response.results
      .filter((a) => a.tags.find((a) => a.type == "contributor"))
      .filter((result) => {
        return authorsArray.includes(
          result.tags.find((a) => a.type == "contributor").webTitle.toLowerCase()
        );
      });

    return {
      response: {
        ...response.response,
        results: filteredResults,
      },
    };
  };

  if (filter.sources.length >= 1) {
    result = filterByPublications(result, filter.sources);
  }

  if (filter.authors.length >= 1) {
    result = filterByAuthors(result, filter.authors);
  }

  const articles: ArticlesStoreItemInterface[] = result.response.results.map((newsArticle) => {
    const contributer = newsArticle.tags.find((a) => a.type == "contributor");
    return {
      author: contributer == undefined ? "" : contributer.webTitle,
      title: newsArticle.webTitle,
      publishedAt: newsArticle.webPublicationDate,
      urlToImage: newsArticle.fields.thumbnail,
      description: HtmlExtensions.htmlToText(newsArticle.fields.standfirst),
      source: newsArticle.fields.publication,
      category: newsArticle.sectionName,
    };
  });

  return {
    success: result.response.status === "ok",
    items: result.response.status === "ok" ? articles : [],
    authors: result.response.status === "ok" ? authors : [],
    sources: result.response.status === "ok" ? sources : [],
  };
};

export default FetchGuardianApiContents;
