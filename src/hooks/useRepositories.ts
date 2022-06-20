import { RepositoryDataFromApi } from "../types";
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

  return {
    repositories: data ? data.repositories : undefined,
    loading,
    refetch,
  };
};
export default useRepositories;
