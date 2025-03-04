import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import DateExtenstions from "@/utils/date.extenstions";
import ArticlesStoreItemInterface from "@/stores/articles/articles.store.item.interface";

export default function RecipeReviewCard({ item }: { item: ArticlesStoreItemInterface }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            {item.title[0]}
          </Avatar>
        }
        title={item.title}
        subheader={DateExtenstions.format(item.publishedAt)}
        sx={{ minHeight: 100 }} // Make sure the header is always the same height
      />
      <CardMedia component="img" height="194" image={item.urlToImage} alt="Paella dish" />
      <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
        <Typography variant="body2" sx={{ color: "text.secondary", flex: 1 }}>
          {item.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
