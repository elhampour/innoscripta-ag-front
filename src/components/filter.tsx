import Grid from "@mui/material/Grid2";
import * as React from "react";
import CustomDatePicker from "./date.picker";
import CustomSelect from "./select";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";

const Filter = () => {
  const { setSources, sources } = useSourcesStore((state) => state);
  const { setCategories, categories } = useCategoriesStore((state) => state);
  return (
    <Grid container>
      <Grid size={12}>
        <CustomDatePicker />
        <CustomSelect item={{ title: "Category" }} items={categories} />
        <CustomSelect item={{ title: "Source" }} items={sources} />
      </Grid>
    </Grid>
  );
};

export default Filter;
