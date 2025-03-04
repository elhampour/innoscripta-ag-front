import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";

import { useArticlesStore } from "@/stores/articles/use.articles.store";
import { ApiSourceType } from "@/types/api.source.type";
import UserStoreDataInterface from "@/stores/user/user.store.data.interface";
import { useUserStore } from "@/stores/user/use.user.store";
import { FetchDataStrategy } from "@/strategies/fetch.data.strategy";
import { FetchGuardianApiStrategy } from "@/strategies/fetch.guardian.api.strategy";
import { FetchNewsApiStrategy } from "@/strategies/fetch.news.api.strategy";
import { FetchNewYorkTimesApiStrategy } from "@/strategies/fetch.new.york.times.api.satrategy";

import Home from "./views/home";
import Setting from "./views/setting";

const Application = () => {
  const { clearUser, setUser } = useUserStore((state) => state);
  const { setFilter, filter } = useArticlesStore((state) => state);

  useEffect(() => {
    let fetchDataStrategy: FetchDataStrategy;

    switch (filter.apiSourceType) {
      case ApiSourceType.Guardian:
        fetchDataStrategy = new FetchGuardianApiStrategy();
        break;
      case ApiSourceType.NewsApi:
        fetchDataStrategy = new FetchNewsApiStrategy();
        break;
      case ApiSourceType.NewYorkTimes:
        fetchDataStrategy = new FetchNewYorkTimesApiStrategy();
        break;
      default:
    }

    const fetchData = async () => {
      await fetchDataStrategy.fetchData(filter);
    };

    fetchData().catch(() => {});
  }, [filter]);

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
