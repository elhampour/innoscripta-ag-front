import Grid from "@mui/material/Grid2";
import SettingsIcon from "@mui/icons-material/Settings";
import { Link } from "react-router-dom";
import { useMediaQuery, useTheme } from "@mui/material";

import Filter from "@/components/filter";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";
import CustomComponent from "@/components/custom.component";
import CustomSearchInput from "@/components/custom.search.input";
import ArticleGrid from "@/components/article.grid";

const Home = () => {
  const { articles, filter, filterByTerm } = useArticlesStore((state) => state);

  let currentArticles: ArticlesStoreItemInterface[] = [];
  if (articles[filter.apiSourceType]) {
    currentArticles = articles[filter.apiSourceType] as ArticlesStoreItemInterface[];
  }

  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <CustomComponent title="News">
      <Grid size={12}>
        <Grid container spacing={2}>
          <Grid size={11}>
            <CustomSearchInput value={filter.term} onChange={(e) => filterByTerm(e.target.value)} />
          </Grid>
          <Grid
            size={1}
            style={{ color: "grey", margin: "auto", textAlign: "center", cursor: "pointer" }}
          >
            <Link to="/setting">
              <SettingsIcon style={{ fontSize: "30px" }} />
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        {isMd && (
          <>
            <Grid size={{ lg: 3, md: 12 }} width={"100%"}>
              <Filter />
            </Grid>
            <Grid size={{ lg: 9, md: 12 }}>
              <ArticleGrid articles={currentArticles} />
            </Grid>
          </>
        )}
        {!isMd && (
          <>
            <Grid size={{ lg: 9, md: 12 }}>
              <ArticleGrid articles={currentArticles} />
            </Grid>
            <Grid size={{ lg: 3, md: 12 }}>
              <Filter />
            </Grid>
          </>
        )}
      </Grid>
    </CustomComponent>
  );
};

export default Home;
