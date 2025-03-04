import Grid from "@mui/material/Grid2";

import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";

import NewsCard from "./news.card";

const ArticleGrid = ({ articles }: { articles: ArticlesStoreItemInterface[] }) => (
  <Grid container spacing={2}>
    {articles.map((article, index) => (
      <Grid size={4} key={index}>
        <NewsCard item={article} />
      </Grid>
    ))}
  </Grid>
);

export default ArticleGrid;