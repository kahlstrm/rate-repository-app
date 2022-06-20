import React from "react";
import { Formik, FormikValues } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import useCreateReview from "../hooks/useCreateReview";
import { reviewValidationSchema } from "../schema/validationSchemas";
import theme from "../theme";
import Button from "./UI/Button";
import FormikTextInput from "./UI/FormikTextInput";

interface CreateReviewProps {
  onSubmit: (values: FormikValues) => void;
}
export const CreateReviewContainer: React.FC<CreateReviewProps> = ({
  onSubmit,
}) => {
  return (
    <View style={{ backgroundColor: theme.colors.white }}>
      <Formik
        initialValues={{
          ownerName: "",
          repositoryName: "",
          rating: "",
          text: "",
        }}
        onSubmit={onSubmit}
        validationSchema={reviewValidationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput
              name="ownerName"
              placeholder="Repository owner name"
            />
            <FormikTextInput
              name="repositoryName"
              placeholder="Repository name"
            />
            <FormikTextInput
              name="rating"
              placeholder="Rating between 0 and 100"
            />
            <FormikTextInput multiline name="text" placeholder="Review" />
            <Button onPress={handleSubmit} text="Create a review" />
          </>
        )}
      </Formik>
    </View>
  );
};
const CreateReview = () => {
  const { createReview } = useCreateReview();
  const navigate = useNavigate();
  const onSubmit = async (values: FormikValues) => {
    if (!reviewValidationSchema.isValidSync(values)) return;

    try {
      const { data } = await createReview(values);
      const repoId = data?.createReview.repositoryId;
      repoId && navigate(`/${repoId}`);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <CreateReviewContainer onSubmit={onSubmit} />
    </View>
  );
};

export default CreateReview;
