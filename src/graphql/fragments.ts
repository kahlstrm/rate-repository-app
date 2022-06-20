import { gql } from "@apollo/client";

export const REPO_DETAILS=gql`
fragment RepoDetails on Repository{
  id
  fullName
  ratingAverage
  reviewCount
  stargazersCount
  forksCount
  ownerAvatarUrl
  description
  language
}
`;
export const REVIEW_DETAILS=gql`
fragment ReviewDetails on Review{
  id
  text
  rating
  createdAt
  user {
    id
    username
  }
}
`;