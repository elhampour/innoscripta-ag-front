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

const Home = () => {
  const { setArticles, articles, getArticles } = useArticlesStore((state) => state);
  const { setSources, sources } = useSourcesStore((state) => state);
  const { setCategories, categories } = useCategoriesStore((state) => state);
  useEffect(() => {
    let fetchData = async (articles) => {
      let home = await FetchNewsApiArticles(articles);
      if (home.success) {
        setArticles(home.items, home.total);
      }
    };
    fetchData(articles);
  }, [articles.term]);
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
    <Container>
      <Typography variant="h4" textAlign="center" marginY={4}>
        Google News Clone
      </Typography>
      <TextField
        fullWidth
        label="Search News"
        variant="outlined"
        margin="normal"
        value={articles.term}
        onChange={(e) => getArticles(1, articles.itemPerPage, e.target.value)}
      />
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
    </Container>
  );
};

export default Home;
