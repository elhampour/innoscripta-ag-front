import React, { useEffect, useState, useCallback } from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  TextField,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from "@mui/material";

const SOURCES = [
  { name: "The Guardian", key: "REACT_APP_GUARDIAN_KEY", endpoint: "https://content.guardianapis.com/search" },
  { name: "New York Times", key: "REACT_APP_NYT_KEY", endpoint: "https://api.nytimes.com/svc/topstories/v2/home.json" },
  { name: "BBC News", key: "REACT_APP_NEWSAPI_KEY", endpoint: "https://newsapi.org/v2/top-headlines?sources=bbc-news" },
  { name: "OpenNews", key: "REACT_APP_OPENNEWS_KEY", endpoint: "https://api.opennews.org/v1/articles" },
  { name: "NewsCred", key: "REACT_APP_NEWSCRED_KEY", endpoint: "https://api.newscred.com/articles" },
  { name: "NewsAPI.org", endpoint: "https://newsapi.org/v2/top-headlines?country=us&apiKey=fc9babb014884ee5802a95fb915a78c3" }
];

const buildUrl = (source) => `${source.endpoint}`;

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSource, setSelectedSource] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    try {
      const responses = await Promise.all(SOURCES.map(source => fetch(buildUrl(source))));
      const data = await Promise.all(responses.map(res => res.json()));

      const allArticles = data.flatMap((item, index) => {
        const sourceName = SOURCES[index].name;
        return item.articles?.map(article => ({
          title: article.title || article.webTitle,
          description: article.description || article.abstract || "",
          urlToImage: article.image || (article.multimedia ? article.multimedia[0]?.url : ""),
          source: { name: sourceName },
          publishedAt: article.publishedAt || article.webPublicationDate || article.published_date || ""
        })) || [];
      });

      setArticles(allArticles);
    } catch (error) {
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  }, []);

  useEffect(() => { fetchArticles(); }, [fetchArticles]);

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (!selectedSource || article.source.name === selectedSource) &&
    (!selectedDate || new Date(article.publishedAt).toISOString().split("T")[0] === selectedDate)
  );

  return (
    <Container>
      <Typography variant="h3" textAlign="center" marginY={4}>Google News Clone</Typography>
      <TextField fullWidth label="Search News" variant="outlined" margin="normal" onChange={e => setSearchTerm(e.target.value)} />
      <FormControl fullWidth margin="normal">
        <InputLabel>Filter by Source</InputLabel>
        <Select value={selectedSource} onChange={e => setSelectedSource(e.target.value)}>
          <MenuItem value="">All Sources</MenuItem>
          {SOURCES.map(source => <MenuItem key={source.name} value={source.name}>{source.name}</MenuItem>)}
        </Select>
      </FormControl>
      <TextField fullWidth label="Filter by Date" type="date" InputLabelProps={{ shrink: true }} margin="normal" onChange={e => setSelectedDate(e.target.value)} />
      {loading ? (
        <CircularProgress style={{ display: "block", margin: "auto" }} />
      ) : (
        <Grid container spacing={3}>
          {filteredArticles.map((article, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                {article.urlToImage && <CardMedia component="img" height="200" image={article.urlToImage} alt={article.title} />}
                <CardContent>
                  <Typography variant="h6">{article.title}</Typography>
                  <Typography variant="body2" color="textSecondary">{article.description}</Typography>
                  <Typography variant="body2" color="primary">{article.source.name} - {new Date(article.publishedAt).toLocaleDateString()}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default NewsApp;
