import * as yup from "yup";
import {
  accessTokenSchema,
  repoResponseSchema,
  userInfoSchema,
} from "./schema/validationSchemas";
export interface RepositoryData {
  id: string;
  fullName: string;
  description: string;
  language: string;
  forksCount: number;
  stargazersCount: number;
  ratingAverage: number;
  reviewCount: number;
  ownerAvatarUrl: string;
}

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

export type userInfoFromApi = yup.InferType<typeof userInfoSchema>;

export interface SignInFuncProps {
  username: string;
  password: string;
}
