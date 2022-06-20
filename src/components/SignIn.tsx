import React from "react";
import { Formik, FormikValues } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import { loginValidationSchema } from "../schema/validationSchemas";
import theme from "../theme";
import Button from "./UI/Button";
import FormikTextInput from "./UI/FormikTextInput";

interface SignInFormProps {
  onSubmit: (values: FormikValues) => void;
}
export const SignInFormContainer: React.FC<SignInFormProps> = ({
  onSubmit,
}) => {
  return (
    <View style={{ backgroundColor: theme.colors.white }}>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      >
        {({ handleSubmit }) => (
          <>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput
              name="password"
              placeholder="Password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} text="Sign In" />
          </>
        )}
      </Formik>
    </View>
  );
};
const SignIn = () => {
  const navigate = useNavigate();
  const { signIn } = useSignIn();
  const onSubmit = async (values: FormikValues) => {
    const { username, password } = values;
    try {
      const { data } = await signIn({ username, password });
      console.log(data);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View>
      <SignInFormContainer onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;
