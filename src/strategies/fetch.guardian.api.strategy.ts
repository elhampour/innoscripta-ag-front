import { useSourcesStore } from "@/stores/sources/use.sources.store";
import { useAuthorsStore } from "@/stores/authors/use.authors.store";
import { useCategoriesStore } from "@/stores/categories/use.categories.store";
import { useArticlesStore } from "@/stores/articles/use.articles.store";
import ArticlesFilterStoreInterface from "@/stores/articles/articles.filter.store.interface";
import FetchGuardianApiContents from "@/api/guardian/contents/fetch.guardian.api.contents";
import FetchGuardianApiSections from "@/api/guardian/sections/fetch.guardian.api.sections";

import { FetchDataStrategy } from "./fetch.data.strategy";

export class FetchGuardianApiStrategy implements FetchDataStrategy {
  async fetchData(filter: ArticlesFilterStoreInterface) {
    const guardianApiContentsData = await FetchGuardianApiContents(filter);
    if (guardianApiContentsData.success) {
      useArticlesStore.getState().setArticlesByGuardianApi(guardianApiContentsData.items);
      useAuthorsStore.getState().setAuthorsByGuardianApi(guardianApiContentsData.authors);
      useSourcesStore.getState().setSourcesByGuardianApi(guardianApiContentsData.sources);
    }

    const guardianApiSectionsData = await FetchGuardianApiSections();
    if (guardianApiSectionsData.success) {
      useCategoriesStore.getState().setCategoriesByGuardianApi(guardianApiSectionsData.items);
    }
  }
}
