import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../graphql/mutations";
import { createReviewResponseSchema } from "../schema/validationSchemas";
import { CreateReviewProps, CreateReviewResponse } from "../types";

const useCreateReview = () => {
  const [mutate, result] = useMutation<
    { createReview: CreateReviewResponse },
    { review: CreateReviewProps }
  >(CREATE_REVIEW);

  const createReview = async ({
    ownerName,
    repositoryName,
    text,
    rating,
  }: CreateReviewProps) => {
    const res = await mutate({
      variables: {
        review: {
          ownerName,
          repositoryName,
          rating: Number(rating),
          text,
        },
      },
    });
    const { data } = res;
    if (!createReviewResponseSchema.isValidSync(data?.createReview)) {
      throw Error("invalid response");
    }
    return res;
    // call the mutate function here with the right arguments
  };

  return { createReview, result };
};
export default useCreateReview;
