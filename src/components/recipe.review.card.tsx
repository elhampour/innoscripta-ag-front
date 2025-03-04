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
import { Divider } from "@mui/material";

export default function RecipeReviewCard({ item }: { item: ArticlesStoreItemInterface }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Typography sx={{ minHeight: 100 }} gutterBottom m={1} component="div">
        {item.title}
      </Typography>
      {/* <CardHeader
        title={item.title}
        subheader={DateExtenstions.format(item.publishedAt)}
        sx={{ minHeight: 100 }}
      /> */}
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
