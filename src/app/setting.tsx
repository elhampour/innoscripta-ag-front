import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import CustomSelect from "@/components/select";
import CustomComponent from "./custom.component";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import { useUserStore } from "@/stores/user/use.user.store";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { Link } from "react-router-dom";
import { ApiSourceType } from "@/types/api.source.type";
import { useAuthorsStore } from "@/stores/authors/use.authors.store";

const Setting = () => {
  const { categories } = useCategoriesStore((state) => state);
  const { authors } = useAuthorsStore((state) => state);
  const { sources } = useSourcesStore((state) => state);
  const { setUserCategory, setUserApiSourceType, setUserAuthors, setUserSources, user } =
    useUserStore((state) => state);
  return (
    <CustomComponent title="Setting">
      <form onSubmit={() => {}}>
        <CustomSelect
          item={{
            title: "Api Source",
            multiple: false,
            value: [user.apiSourceType],
            onChange: setUserApiSourceType,
          }}
          items={[
            { id: ApiSourceType.NewsApi, name: ApiSourceType.NewsApi },
            { id: ApiSourceType.Guardian, name: ApiSourceType.Guardian },
            { id: ApiSourceType.NewYorkTimes, name: ApiSourceType.NewYorkTimes },
          ]}
        />
        <CustomSelect
          item={{
            title: "Category",
            multiple: false,
            value: [user.category],
            onChange: setUserCategory,
          }}
          items={categories[user.apiSourceType]}
        />
        <CustomSelect
          item={{
            title: "Source",
            multiple: true,
            value: user.sources,
            onChange: setUserSources,
          }}
          items={sources[user.apiSourceType]}
        />
        <CustomSelect
          item={{
            title: "Author",
            multiple: true,
            value: user.authors,
            onChange: setUserAuthors,
          }}
          items={authors[user.apiSourceType]}
        />
        {/* <CustomSelect
          item={{
            multiple: true,
            onChange: setUserCategories,
            title: "Categories",
            value: user.categories,
          }}
          items={categories}
        /> */}
        {/* <CustomSelect
          item={{ multiple: true, onChange: setUserSources, title: "Sources", value: user.sources }}
          items={sources}
        />
        <CustomSelect
          item={{ multiple: true, onChange: setUserAuthors, title: "Authors", value: user.authors }}
          items={[{ id: "1", name: "1" }]}
        /> */}
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
