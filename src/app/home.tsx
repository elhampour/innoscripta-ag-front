import { Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import RecipeReviewCard from "@/components/recipe.review.card";
import Filter from "@/components/filter";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import FetchNewsApiArticles from "@/api/news-api/articles/fetch.news.api.articles";
import FetchNewsApiSources from "@/api/news-api/source/fetch.news.api.sources";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import CustomComponent from "./custom.component";

const Home = () => {
  const { setArticles, articles, filter, filterByTerm } = useArticlesStore((state) => state);
  const { setSources, sources } = useSourcesStore((state) => state);
  const { setCategories, categories } = useCategoriesStore((state) => state);
  useEffect(() => {
    let fetchData = async (filter: ArticlesFilterStoreInterface) => {
      let home = await FetchNewsApiArticles(filter);
      if (home.success) {
        setArticles(home.items, home.total);
      }
    };
    fetchData(filter);
  }, [filter]);
 
  return (
    <CustomComponent title="Google News Clone">
      <Grid size={12}>
        <Grid container spacing={2}>
          <Grid size={11}>
            <TextField
              fullWidth
              label="Search News"
              variant="outlined"
              margin="normal"
              value={filter.term}
              onChange={(e) => filterByTerm(e.target.value)}
            />
          </Grid>
          <Grid
            size={1}
            style={{ color: "grey", margin: "auto", textAlign: "center", cursor: "pointer" }}
          >
            <Link to={"/setting"}>
              <SettingsIcon style={{ fontSize: "30px" }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid size={9}>
          <Grid container spacing={2}>
            {articles.items.map((homeStoreItemInterface: ArticlesStoreItemInterface, index) => {
              return (
                <Grid size={4} key={index}>
                  <RecipeReviewCard item={homeStoreItemInterface} />
                </Grid>
              );
            })}
          </Grid>
        </Grid>
        <Grid size={3}>
          <Filter />
        </Grid>
      </Grid>
    </CustomComponent>
  );
};

export default Home;
