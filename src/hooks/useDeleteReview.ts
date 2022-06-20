import { useMutation } from "@apollo/client";
import { DELETE_REVIEW } from "../graphql/mutations";

const useDeleteReview = () => {
  const [mutate, result] = useMutation<
    { deleteReview: boolean },
    { deleteReviewId: string }
  >(DELETE_REVIEW);
  const deleteReview = async (id: string) => {
    const res = await mutate({
      variables: {
        deleteReviewId: id,
      },
    });
    console.log(res);
  };
  return { deleteReview, result };
};

export default useDeleteReview;
