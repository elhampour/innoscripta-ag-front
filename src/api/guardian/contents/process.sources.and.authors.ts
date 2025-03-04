import LookupDataInterface from "@/stores/common/lookup.data.interface";
import DefaultValues from "@/utils/default.values";

import GuardianApiContentsInterface from "./guardian.api.contents.interface";

const ProcessSourcesAndAuthors = (
  result: GuardianApiContentsInterface
): {
  sources: LookupDataInterface[];
  authors: LookupDataInterface[];
} => {
  const sources = [
    DefaultValues.getSelect(),
    ...[...new Set(result.response.results.map((source) => source.fields.publication))].map(
      (pub) => ({
        id: pub,
        name: pub,
      })
    ),
  ];

  const authors = [
    DefaultValues.getSelect(),
    ...[
      ...new Set(
        result.response.results
          .filter((a) => a.tags.some((tag) => tag.type === "contributor"))
          .map((source) => source.tags.find((a) => a.type === "contributor")?.webTitle)
      ),
    ].map((author) => ({
      id: author,
      name: author,
    })),
  ];

  return { sources, authors };
};

export default ProcessSourcesAndAuthors;
