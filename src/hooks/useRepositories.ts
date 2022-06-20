import { useEffect } from "react";
import { RepositoryDataFromApi } from "../types";
import { repoResponseSchema } from "../schema/validationSchemas";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = (selectedSort: string, searchKeyword: string) => {
  const { data, loading, refetch } = useQuery<{
    repositories: RepositoryDataFromApi;
  }>(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables: {
      ...(selectedSort === "latest"
        ? { orderBy: "CREATED_AT" }
        : {
            orderBy: "RATING_AVERAGE",
            orderDirection: selectedSort === "highest" ? "DESC" : "ASC",
          }),
      searchKeyword,
    },
  });
  useEffect(() => {
    console.log(selectedSort);

    const repositoriesFromQuery = data?.repositories;
    if (!repoResponseSchema.isValidSync(repositoriesFromQuery)) {
      console.log("failed");
      console.log(data);
      return;
    }
    console.log("success");
    console.log(repositoriesFromQuery);
  }, [data, selectedSort, searchKeyword]);
  return {
    repositories: data ? data.repositories : undefined,
    loading,
    refetch,
  };
};
export default useRepositories;
