import { gql } from "@apollo/client";
import { REPO_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
    ) {
      totalCount
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
      edges {
        node {
          ...RepoDetails
        }
        cursor
      }
    }
  }
  ${REPO_DETAILS}
`;
export const GET_REPO = gql`
  query ($id: ID!) {
    repository(id: $id) {
      ...RepoDetails
      url
      reviews {
        edges {
          node {
            ...ReviewDetails
          }
        }
      }
    }
  }
  ${REPO_DETAILS}
  ${REVIEW_DETAILS}
`;
export const USER_INFO = gql`
  query {
    me {
      id
      username
    }
  }
`;
