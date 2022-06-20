import * as yup from "yup";
import {
  accessTokenSchema,
  createReviewResponseSchema,
  repoResponseSchema,
  repoSchema,
  reviewSchema,
  reviewValidationSchema,
  userInfoSchema,
  userInfoWithReviewsSchema,
} from "./schema/validationSchemas";
export type RepositoryData = yup.InferType<typeof repoSchema>;

// export interface RepositoryDataFromApi {
//   totalCount: number;
//   edges: Array<{
//     node: RepositoryData;
//     cursor:string;
//   }>
//   pageInfo:{
//     hasNextPage:boolean;
//     hasPreviousPage:boolean;
//     startCursor:string;
//     endCursor:string;
//   }
// }

export type RepositoryDataFromApi = yup.InferType<typeof repoResponseSchema>;

export type AccessTokenFromApi = yup.InferType<typeof accessTokenSchema>;

export type UserInfoFromApi = yup.InferType<typeof userInfoSchema>;

export type Review = yup.InferType<typeof reviewSchema>;
export type CreateReviewProps = yup.InferType<typeof reviewValidationSchema>;
export type CreateReviewResponse = yup.InferType<
  typeof createReviewResponseSchema
>;

export type UserInfoWithReviews = yup.InferType<
  typeof userInfoWithReviewsSchema
>;

export interface SignInFuncProps {
  username: string;
  password: string;
}
export interface StateProps {
  searchWord: string;
  setSearchWord: React.Dispatch<React.SetStateAction<string>>;
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}
