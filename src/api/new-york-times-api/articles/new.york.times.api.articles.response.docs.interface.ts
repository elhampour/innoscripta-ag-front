import NewYorkTimesApiArticlesResponseDocsBylineInterface from "./new.york.times.api.articles.response.docs.byline.interface";
import NewYorkTimesApiArticlesResponseDocsHeadlineInterface from "./new.york.times.api.articles.response.docs.headline.interface";
import NewYorkTimesApiArticlesResponseDocsKeyworkInterface from "./new.york.times.api.articles.response.docs.keywork.interface";
import NewYorkTimesApiArticlesResponseDocsMultimediaInterface from "./new.york.times.api.articles.response.docs.multimedia.interface";

export default interface NewYorkTimesApiArticlesResponseDocsInterface {
  abstract: string;
  web_url: string;
  snippet: string;
  lead_paragraph: string;
  source: string;
  multimedia: NewYorkTimesApiArticlesResponseDocsMultimediaInterface[];
  headline: NewYorkTimesApiArticlesResponseDocsHeadlineInterface;
  keywords: NewYorkTimesApiArticlesResponseDocsKeyworkInterface[];
  pub_date: Date;
  document_type: string;
  news_desk: string;
  section_name: string;
  byline: NewYorkTimesApiArticlesResponseDocsBylineInterface;
}
