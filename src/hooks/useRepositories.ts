import { RepositoryDataFromApi } from "../types";
import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES } from "../graphql/queries";
interface UseRepositoriesProps {
  first?: number;
  after?: string;
  selectedSort?: string;
  searchKeyword?: string;
}
interface RepoQueryVariables {
  first: number;
  orderBy: "CREATED_AT" | "RATING_AVERAGE";
  orderDirection?: "DESC" | "ASC";
  searchKeyword?: string;
}
const useRepositories = ({
  selectedSort,
  searchKeyword,
}: UseRepositoriesProps) => {
  const variables: RepoQueryVariables = {
    first: 2,
    ...(selectedSort === "latest"
      ? { orderBy: "CREATED_AT" }
      : {
          orderBy: "RATING_AVERAGE",
          orderDirection: selectedSort === "highest" ? "DESC" : "ASC",
        }),
    searchKeyword,
  };
  const { data, loading, refetch, fetchMore } = useQuery<{
    repositories: RepositoryDataFromApi;
  }>(GET_REPOSITORIES, {
    fetchPolicy: "cache-and-network",
    variables,
  });
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        after: data.repositories.pageInfo.endCursor,
        ...variables,
      },
    });
  };
  return {
    repositories: data ? data.repositories : undefined,
    fetchMore: handleFetchMore,
    loading,
    refetch,
  };
};
export default useRepositories;
