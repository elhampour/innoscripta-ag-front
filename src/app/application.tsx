import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Setting from "./setting";
import Home from "./home";
import { useEffect } from "react";
import FetchNewsApiSources from "@/api/news-api/source/fetch.news.api.sources";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";

const Application = () => {
  const { setSources, sources } = useSourcesStore((state) => state);
  const { setCategories, categories } = useCategoriesStore((state) => state);
  useEffect(() => {
    let fetchData = async () => {
      let data = await FetchNewsApiSources();
      if (data.success) {
        setSources(data.items);
        setCategories(data.catgeories);
      }
    };
    fetchData();
  }, []);
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
