import NewsApiSourceInterface from "./news.api.source.interface";

export default interface NewsApiSourcesInterface{
 status : string;
 sources : NewsApiSourceInterface[];   
}