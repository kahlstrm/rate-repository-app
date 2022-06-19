import { useEffect } from "react";
import { RepositoryDataFromApi } from "../types";
import { repoResponseSchema } from "../schema/validationSchemas";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery<{
    repositories: RepositoryDataFromApi;
  }>(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  useEffect(() => {
    const repositoriesFromQuery = data?.repositories;
    if (!repoResponseSchema.isValidSync(repositoriesFromQuery)) {
      console.log("failed");
      console.log(data);
      return;
    }
    console.log("success");
    console.log(repositoriesFromQuery);
  }, [data]);
  return {
    repositories: data ? data.repositories : undefined,
    loading,
    refetch,
  };
};
export default useRepositories;
