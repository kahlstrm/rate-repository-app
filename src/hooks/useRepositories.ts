import { useEffect, useState } from "react";
import { RepositoryDataFromApi } from "../types";
import { repoResponseSchema } from "../schema/validationSchemas";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";

const useRepositories = () => {
  const { data, error, loading, refetch } = useQuery<{repositories:RepositoryDataFromApi}>(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
  });
  const [repositories, setRepositories] = useState<RepositoryDataFromApi>();
  useEffect(() => {
    const repositoriesFromQuery = data?.repositories;

    if (!repoResponseSchema.isValidSync(repositoriesFromQuery)) {
      console.log("failed");
      console.log(data);
      return;
    }
    console.log("success");
    console.log(repositoriesFromQuery);

    setRepositories(repositoriesFromQuery);
  }, [data]);
  return { repositories, loading, refetch };
};
export default useRepositories;
