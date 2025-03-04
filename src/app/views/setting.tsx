import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import { useUserStore } from "@/stores/user/use.user.store";
import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { ApiSourceType } from "@/types/api.source.type";
import { useAuthorsStore } from "@/stores/authors/use.authors.store";
import EnumExtenstions from "@/utils/enum.extenstions";
import CustomComponent from "@/components/custom.component";
import CustomSelect from "@/components/custom.select";

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
          items={EnumExtenstions.toArray(ApiSourceType)}
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
