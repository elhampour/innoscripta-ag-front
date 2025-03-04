import NewYorkTimesApiArticlesResponseInterface from "./new.york.times.api.articles.response.interface";

export default interface NewYorkTimesApiArticlesInterface {
  status: string;
  copyright: string;
  response: NewYorkTimesApiArticlesResponseInterface;
}
