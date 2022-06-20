import React from "react";
import { Formik, FormikValues } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";
import { signUpValidationSchema } from "../schema/validationSchemas";
import theme from "../theme";
import Button from "./UI/Button";
import FormikTextInput from "./UI/FormikTextInput";

interface SignUpFormProps {
  onSubmit: (values: FormikValues) => void;
}
export const SignUpFormContainer: React.FC<SignUpFormProps> = ({
  onSubmit,
}) => {
  return (
    <View style={{ backgroundColor: theme.colors.white }}>
      <Formik
        initialValues={{ username: "", password: "", passwordValidation: "" }}
        onSubmit={onSubmit}
        validationSchema={signUpValidationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <FormikTextInput
              name="passwordValidation"
              placeholder="Password confirmation"
              secureTextEntry
            />
            <Button onPress={handleSubmit} text="Sign In" />
          </>
        )}
      </Formik>
    </View>
  );
};
const SignUp = () => {
  const navigate = useNavigate();
  const { signUp } = useSignUp();
  const { signIn } = useSignIn();
  const onSubmit = async (values: FormikValues) => {
    const { username, password } = values;
    try {
      const { data } = await signUp({ username, password });
      if (!data?.createUser.username) {
        console.log("account creation failure");
      }
      console.log("create account OK");

      const { data: loginData } = await signIn({ username, password });
      console.log(loginData);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <SignUpFormContainer onSubmit={onSubmit} />
    </View>
  );
};

export default SignUp;
