import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
export const signUpValidationSchema = yup.object({
  username: yup.string().min(1).max(30).required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  passwordValidation: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required("Password confirmation is required"),
});
export const reviewValidationSchema = yup.object({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup.number().required("Rating is required").max(100).min(0),
  text: yup.string(),
});
export const userInfoSchema = yup.object({
  id: yup.string().required(),
  username: yup.string().required(),
});
export const createReviewResponseSchema = yup
  .object({
    repositoryId: yup.string().required(),
    user: userInfoSchema.required(),
  })
  .required();
export const accessTokenSchema = yup.object().shape({
  accessToken: yup.string().required(),
});

export const reviewSchema = yup.object({
  id: yup.string().required(),
  text: yup.string(),
  rating: yup.number().required(),
  createdAt: yup.date().required(),
  user: userInfoSchema.required(),
});
export const repoSchema = yup.object({
  id: yup.string().required(),
  ownerName: yup.string(),
  fullName: yup.string().required(),
  reviewCount: yup.number().required(),
  ratingAverage: yup.number().required(),
  forksCount: yup.number().required(),
  stargazersCount: yup.number().required(),
  description: yup.string().nullable(),
  language: yup.string().required(),
  ownerAvatarUrl: yup.string().required(),
});
export const repoSchemaFull = repoSchema.shape({
  reviews: yup
    .object({
      edges: yup
        .array(
          yup.object({
            node: reviewSchema,
          })
        )
        .required(),
      cursor: yup.string(),
    })
    .required(),
  url: yup.string().required(),
});
export const repoResponseSchema = yup.object().shape({
  totalCount: yup.number().required(),
  edges: yup
    .array(
      yup.object().shape({
        node: repoSchema,
        cursor: yup.string().required(),
      })
    )
    .required(),
  pageInfo: yup
    .object()
    .shape({
      hasNextPage: yup.boolean(),
      hasPreviousPage: yup.boolean(),
      startCursor: yup.string(),
      endCursor: yup.string(),
    })
    .required(),
});
