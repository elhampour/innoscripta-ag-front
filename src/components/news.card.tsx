import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";

import DateExtenstions from "@/utils/date.extenstions";
import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";

export default function NewsCard({ item }: { item: ArticlesStoreItemInterface }) {
  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography sx={{ minHeight: 100 }} gutterBottom m={1} component="div">
        {item.title}
      </Typography>
      <CardMedia component="img" height="194" image={item.urlToImage} alt="Paella dish" />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography
          mb={1}
          variant="body2"
          sx={{ overflow: "hidden", minHeight: 120, color: "text.secondary", flex: 1 }}
        >
          {item.description}
        </Typography>
        <Divider />
        <Typography mt={1} variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
          {DateExtenstions.format(item.publishedAt)}
        </Typography>
        <Typography mt={1} variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
          {item.author}
        </Typography>
        <Typography mt={1} variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
          {item.category}
        </Typography>
        <Typography mt={1} variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
          {item.source}
        </Typography>
      </CardContent>
    </Card>
  );
}
