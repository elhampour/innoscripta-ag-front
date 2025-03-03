import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ExpandMoreProps from "./expand.more.props";
import ExpandMore from "./expand.more";
import HomeStoreItemInterface from "./home.store.item.interface";
import DateExtenstions from "./date.extenstions";

export default function RecipeReviewCard({ item }: { item: HomeStoreItemInterface }) {
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
