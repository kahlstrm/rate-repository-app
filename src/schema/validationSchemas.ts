import * as yup from "yup";

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
export const accessTokenSchema = yup.object().shape({
  accessToken: yup.string().required(),
});
export const userInfoSchema = yup.object().shape({
  id: yup.string().required(),
  username: yup.string().required(),
});
export const repoResponseSchema = yup.object().shape({
  totalCount: yup.number().required(),
  edges: yup
    .array(
      yup.object().shape({
        node: yup
          .object()
          .shape({
            id: yup.string().required(),
            name: yup.string(),
            ownerName: yup.string(),
            createdAt: yup.date(),
            fullName: yup.string().required(),
            reviewCount: yup.number().required(),
            ratingAverage: yup.number().required(),
            url: yup.string(),
            forksCount: yup.number().required(),
            stargazersCount: yup.number().required(),
            description: yup.string().required(),
            language: yup.string().required(),
            ownerAvatarUrl: yup.string().required(),
          }),
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
