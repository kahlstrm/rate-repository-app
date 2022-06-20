import { gql } from "@apollo/client";
import { REPO_DETAILS, REVIEW_DETAILS } from "./fragments";

export const GET_REPOSITORIES = gql`
  query (
    $orderBy: AllRepositoriesOrderBy
    $orderDirection: OrderDirection
    $searchKeyword: String
    $first: Int
    $after: String
  ) {
    repositories(
      orderBy: $orderBy
      orderDirection: $orderDirection
      searchKeyword: $searchKeyword
      first: $first
      after: $after
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
  query ($id: ID!, $first: Int, $after: String) {
    repository(id: $id) {
      ...RepoDetails
      url
      reviews(first: $first, after: $after) {
        totalCount
        edges {
          node {
            ...ReviewDetails
          }
          cursor
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
          startCursor
        }
      }
    }
  }
  ${REPO_DETAILS}
  ${REVIEW_DETAILS}
`;
export const USER_INFO = gql`
query getCurrentUser($includeReviews: Boolean = false) {
  me {
    id
    username
    reviews @include(if: $includeReviews) {
      edges {
        node {
          ...ReviewDetails
          repository{
            fullName
            id
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}

${REVIEW_DETAILS}
`;
