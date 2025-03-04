import Grid from "@mui/material/Grid2";
import * as React from "react";
import CustomDatePicker from "./date.picker";
import CustomSelect from "./select";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import { ApiSourceType } from "@/types/api.source.type";
import { useAuthorsStore } from "@/stores/authors/use.authors.store";

const Filter = () => {
  const { sources } = useSourcesStore((state) => state);
  const { authors } = useAuthorsStore((state) => state);
  const { categories } = useCategoriesStore((state) => state);
  const {
    filterByCategory,
    filterBySources,
    filterByAuthors,
    filter,
    filterByDate,
    filterByApiSourceType,
  } = useArticlesStore((state) => state);
  return (
    <Grid container>
      <Grid size={12}>
        <CustomSelect
          item={{
            title: "Api Source",
            multiple: false,
            value: [filter.apiSourceType],
            onChange: filterByApiSourceType,
          }}
          items={[
            { id: ApiSourceType.NewsApi, name: ApiSourceType.NewsApi },
            { id: ApiSourceType.Guardian, name: ApiSourceType.Guardian },
            { id: ApiSourceType.NewYorkTimes, name: ApiSourceType.NewYorkTimes },
          ]}
        />
        <CustomDatePicker item={{ value: filter.date, onChange: filterByDate }} />
        <CustomSelect
          item={{
            title: "Category",
            multiple: false,
            value: [filter.category],
            onChange: filterByCategory,
          }}
          items={categories[filter.apiSourceType]}
        />
        <CustomSelect
          item={{
            title: "Source",
            multiple: true,
            value: filter.sources,
            onChange: filterBySources,
          }}
          items={sources[filter.apiSourceType]}
        />
        <CustomSelect
          item={{
            title: "Author",
            multiple: true,
            value: filter.authors,
            onChange: filterByAuthors,
          }}
          items={authors[filter.apiSourceType]}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
