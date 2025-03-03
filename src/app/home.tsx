import { Container, TextField, Typography } from "@mui/material";
import RecipeReviewCard from "./recipe.review.card";
import { useEffect } from "react";
import { useHomeStore } from "./use.home.store";
import HomeStoreDataInterface from "./home.store.data.interface";
import HomeStoreItemInterface from "./home.store.item.interface";
import NewsApiInterface from "./newsapi.interface";
import Grid from "@mui/material/Grid2";
import FetchNewsApi from "./news.api";

const Home = () => {
  const { setHomeData, homeData, getHomeData } = useHomeStore((state) => state);
  const setSearchTerm = (value) => {
    getHomeData(1, 4, value);
  };
  useEffect(() => {
    let fetchData = async (homeData) => {
      let home = await FetchNewsApi(homeData);
      if (home.success) {
        setHomeData(home.items, home.total);
      }
    };
    fetchData(homeData);
  }, [homeData.term]);
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
        value={homeData.term}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Grid container spacing={2}>
        {homeData.items.map((homeStoreItemInterface: HomeStoreItemInterface, index) => {
          return (
            <Grid size={3} key={index}>
              <RecipeReviewCard item={homeStoreItemInterface} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Home;
