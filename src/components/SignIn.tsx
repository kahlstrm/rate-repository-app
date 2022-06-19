import { Formik, FormikValues } from "formik";
import { View } from "react-native";
import { useNavigate } from "react-router-native";
import useSignIn from "../hooks/useSignIn";
import { loginValidationSchema } from "../schema/validationSchemas";
import { AccessTokenFromApi, SignInFuncProps } from "../types";
import Button from "./Button";
import FormikTextInput from "./FormikTextInput";

interface SignInFormProps {
  onSubmit: (values: React.FormEvent<HTMLFormElement>) => void;
}
const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Button onPress={onSubmit} text="Sign In" />
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
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={loginValidationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
