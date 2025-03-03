import { Container, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import Grid from "@mui/material/Grid2";
import { useHomeStore } from "@/stores/use.home.store";
import FetchNewsApi from "@/api/news.api";
import HomeStoreItemInterface from "@/stores/home.store.item.interface";
import RecipeReviewCard from "@/components/recipe.review.card";

const Home = () => {
  const { setHomeData, homeData, getHomeData } = useHomeStore((state) => state);
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
        onChange={(e) => getHomeData(1, homeData.itemPerPage, e.target.value)}
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
