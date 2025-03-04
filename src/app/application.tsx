import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import { useSourcesStore } from "@/stores/sources/use.sources.store";
import FetchNewsApiSources from "@/api/news-api/sources/fetch.news.api.sources";
import FetchGuardianApiContents from "@/api/guardian/contents/fetch.guardian.api.contents";
import FetchNewsApiArticles from "@/api/news-api/articles/fetch.news.api.articles";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import { useAuthorsStore } from "@/stores/authors/use.authors.store";
import FetchGuardianApiSections from "@/api/guardian/sections/fetch.guardian.api.sections";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import { ApiSourceType } from "@/types/api.source.type";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import FetchNewYorkTimesApiArticles from "@/api/new-york-times-api/articles/fetch.new.york.times.api.articles";
import UserStoreDataInterface from "@/stores/user/user.store.data.interface";
import { useUserStore } from "@/stores/user/use.user.store";

import Home from "./views/home";
import Setting from "./views/setting";

const Application = () => {
  const { clearUser, setUser } = useUserStore((state) => state);
  const { setSourcesByNewsApi, setSourcesByGuardianApi, setSourcesByNewYorkTimesApi } =
    useSourcesStore((state) => state);
  const { setCategoriesByGuardianApi } = useCategoriesStore((state) => state);
  const { setAuthorsByNewsApi, setAuthorsByGuardianApi, setAuthorsByNewYorkTimesApi } =
    useAuthorsStore((state) => state);
  const {
    setFilter,
    setArticlesByNewsApi,
    setArticlesByGuardianApi,
    setArticlesByNewYorkTimesApi,
    filter,
  } = useArticlesStore((state) => state);

  useEffect(() => {
    const fetchDataNewsApiData = async (filter: ArticlesFilterStoreInterface) => {
      const newsApiArticles = await FetchNewsApiArticles(filter);
      if (newsApiArticles.success) {
        setArticlesByNewsApi(newsApiArticles.items);
        setAuthorsByNewsApi(newsApiArticles.authors);
      }

      const newsApiSourcesData = await FetchNewsApiSources();
      if (newsApiSourcesData.success) {
        setSourcesByNewsApi(newsApiSourcesData.items);
      }
    };

    const fetchDataGuardianApiData = async (filter: ArticlesFilterStoreInterface) => {
      const guardianApiContentsData = await FetchGuardianApiContents(filter);
      if (guardianApiContentsData.success) {
        setArticlesByGuardianApi(guardianApiContentsData.items);
        setAuthorsByGuardianApi(guardianApiContentsData.authors);
        setSourcesByGuardianApi(guardianApiContentsData.sources);
      }

      const guardianApiSectionsData = await FetchGuardianApiSections();
      if (guardianApiSectionsData.success) {
        setCategoriesByGuardianApi(guardianApiSectionsData.items);
      }
    };

    const fetchDateNewYorkTimesApiData = async (filter: ArticlesFilterStoreInterface) => {
      const newYorkTimesData = await FetchNewYorkTimesApiArticles(filter);
      if (newYorkTimesData.success) {
        setArticlesByNewYorkTimesApi(newYorkTimesData.items);
        setAuthorsByNewYorkTimesApi(newYorkTimesData.authors);
        setSourcesByNewYorkTimesApi(newYorkTimesData.sources);
      }
    };

    const fetchData = async () => {
      if (filter.apiSourceType === ApiSourceType.Guardian) {
        await fetchDataGuardianApiData(filter);
      }

      if (filter.apiSourceType === ApiSourceType.NewsApi) {
        await fetchDataNewsApiData(filter);
      }

      if (filter.apiSourceType === ApiSourceType.NewYorkTimes) {
        await fetchDateNewYorkTimesApiData(filter);
      }
    };

    fetchData().catch(() => {});
  }, [
    filter,
    setArticlesByNewsApi,
    setAuthorsByNewsApi,
    setSourcesByNewsApi,
    setArticlesByGuardianApi,
    setAuthorsByGuardianApi,
    setSourcesByGuardianApi,
    setCategoriesByGuardianApi,
    setArticlesByNewYorkTimesApi,
    setAuthorsByNewYorkTimesApi,
    setSourcesByNewYorkTimesApi,
  ]);

  useEffect(() => {
    const profileStr = localStorage.getItem("user");
    let profile: UserStoreDataInterface;
    try {
      profile = JSON.parse(profileStr) as UserStoreDataInterface;
    } catch {
      clearUser();
      localStorage.removeItem("user");
    }
    if (profile) {
      setUser(profile);
      setFilter(profile.apiSourceType, profile.category, profile.sources, profile.authors);
    }
  }, [clearUser, setFilter, setUser]);

  return (
    <Router>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </>
      </Routes>
    </Router>
  );
};

export default Application;
