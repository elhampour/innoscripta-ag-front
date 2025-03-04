import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import LookupDataInterface from "@/stores/common/lookup.data.interface";
import NewYorkTimesApiArticlesResultInterface from "./new.york.times.api.articles.result.interface";
import NewYorkTimesApiArticlesInterface from "./new.york.times.api.articles.interface";
import dayjs from "dayjs";

const FetchNewYorkTimesApiArticles = async (
  filter: ArticlesFilterStoreInterface
): Promise<NewYorkTimesApiArticlesResultInterface> => {
  let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=LJTszMqBWnOhHg96tIl5FtgJpM5IWOlL`;

  if (filter.term.length >= 1) {
    url = `${url}&q=${filter.term}`;
  }

  if (filter.date) {
    const today = dayjs(filter.date).format("YYYYMMDD");
    const tomorrow = dayjs(filter.date).add(1, "day").format("YYYYMMDD");
    url = `${url}&begin_date=${today}&end_date=${tomorrow}`;
  }

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  let result: NewYorkTimesApiArticlesInterface = await response.json();

  const authors: LookupDataInterface[] = [
    { id: "-1", name: "Select" },
    ...[...new Set(result.response.docs.map((source) => source.byline.original))].map((author) => ({
      id: author,
      name: author,
    })),
  ];

  const sources: LookupDataInterface[] = [
    { id: "-1", name: "Select" },
    ...[...new Set(result.response.docs.map((source) => source.source))].map((author) => ({
      id: author,
      name: author,
    })),
  ];

  const categoires: LookupDataInterface[] = [
    { id: "-1", name: "Select" },
    ...[...new Set(result.response.docs.map((source) => source.news_desk))].map((author) => ({
      id: author,
      name: author,
    })),
  ];

  const filterBySources = (
    response: NewYorkTimesApiArticlesInterface,
    sourcesList: string[]
  ): NewYorkTimesApiArticlesInterface => {
    const sourcesArray = sourcesList.map((pub) => pub.toLowerCase());

    const filteredResults = response.response.docs.filter((result) => {
      return sourcesArray.includes(result.source.toLowerCase());
    });

    return {
      ...response,
      response: {
        ...response.response,
        docs: filteredResults,
      },
    };
  };

  const filterByAuthors = (
    response: NewYorkTimesApiArticlesInterface,
    authorsList: string[]
  ): NewYorkTimesApiArticlesInterface => {
    const authorsArray = authorsList.map((pub) => pub.toLowerCase());

    const filteredResults = response.response.docs
      .filter((a) => a.byline.original)
      .filter((result) => {
        return authorsArray.includes(result.byline.original.toLowerCase());
      });

    return {
      ...response,
      response: {
        ...response.response,
        docs: filteredResults,
      },
    };
  };

  if (filter.authors.length >= 1) {
    result = filterByAuthors(result, filter.authors);
  }

  if (filter.sources.length >= 1) {
    result = filterBySources(result, filter.sources);
  }

  let homeArticles: ArticlesStoreItemInterface[] = result.response.docs.map((newsArticle) => {
    let image = newsArticle.multimedia.find((a) => a.type == "image");
    return {
      author: newsArticle.byline.original,
      title: newsArticle.headline.main,
      publishedAt: newsArticle.pub_date,
      urlToImage: image ? `https://static01.nyt.com/${image.url}` : "/images.png",
      description: newsArticle.abstract,
    };
  });

  return {
    success: result.status === "OK",
    items: result.status === "OK" ? homeArticles : [],
    authors: result.status === "OK" ? authors : [],
    sources: result.status === "OK" ? sources : [],
    categoires: result.status === "OK" ? categoires : [],
  };
};

export default FetchNewYorkTimesApiArticles;
