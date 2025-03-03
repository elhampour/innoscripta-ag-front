import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import CustomSelect from "@/components/select";
import CustomComponent from "./custom.component";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import { useUserStore } from "@/stores/user/use.user.store";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { Link } from "react-router-dom";

const Setting = () => {
  const { categories } = useCategoriesStore((state) => state);
  const { sources } = useSourcesStore((state) => state);
  const { setUserCategories, setUserAuthors, setUserSources, user } = useUserStore(
    (state) => state
  );
  return (
    <CustomComponent title="Setting">
      <form onSubmit={() => {}}>
        <CustomSelect
          item={{
            multiple: true,
            onChange: setUserCategories,
            title: "Categories",
            value: user.categories,
          }}
          items={categories}
        />
        <CustomSelect
          item={{ multiple: true, onChange: setUserSources, title: "Sources", value: user.sources }}
          items={sources}
        />
        <CustomSelect
          item={{ multiple: true, onChange: setUserAuthors, title: "Authors", value: user.authors }}
          items={[{ id: "1", name: "1" }]}
        />
        <Button variant="contained" color="primary" type="submit">
          <Link to="/" color="primary">
            Back To Home
          </Link>
        </Button>
      </form>
    </CustomComponent>
  );
};

export default Setting;
