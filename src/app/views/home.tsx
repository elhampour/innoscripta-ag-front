import { TextField } from "@mui/material";
import Grid from "@mui/material/Grid2";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";

import Filter from "@/components/filter";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import CustomComponent from "@/components/custom.component";
import NewsCard from "@/components/news.card";

const Home = () => {
  const { articles, filter, filterByTerm } = useArticlesStore((state) => state);
  let currentArticles: ArticlesStoreItemInterface[] = [];
  if (articles[filter.apiSourceType]) {
    currentArticles = articles[filter.apiSourceType] as ArticlesStoreItemInterface[];
  }
  return (
    <CustomComponent title="News">
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
            {Array.isArray(currentArticles) &&
              currentArticles.map(
                (homeStoreItemInterface: ArticlesStoreItemInterface, index: number) => {
                  return (
                    <Grid size={4} key={index}>
                      <NewsCard item={homeStoreItemInterface} />
                    </Grid>
                  );
                }
              )}
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
