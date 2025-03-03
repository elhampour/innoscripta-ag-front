import Grid from "@mui/material/Grid2";
import * as React from "react";
import CustomDatePicker from "./date.picker";
import CustomSelect from "./select";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import { useArticlesStore } from "@/stores/articles/use.articles.store";

const Filter = () => {
  const { setSources, sources } = useSourcesStore((state) => state);
  const { setCategories, categories } = useCategoriesStore((state) => state);
  const { filterByCategory, filterBySources, filter, filterByDate } = useArticlesStore(
    (state) => state
  );
  return (
    <Grid container>
      <Grid size={12}>
        <CustomDatePicker item={{ value: filter.date, onChange: filterByDate }} />
        <CustomSelect
          item={{
            title: "Category",
            multiple: false,
            value: [filter.catgeory],
            onChange: filterByCategory,
          }}
          items={categories}
        />
        <CustomSelect
          item={{
            title: "Source",
            multiple: true,
            value: filter.sources,
            onChange: filterBySources,
          }}
          items={sources}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
