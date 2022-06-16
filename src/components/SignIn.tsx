import { Formik, FormikValues } from "formik";
import { View } from "react-native";
import * as yup from "yup";
import Button from "./Button";
import FormikTextInput from "./FormikTextInput";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});
interface SignInFormProps {
  onSubmit: (values: React.FormEvent<HTMLFormElement>) => void;
}
const SignInForm: React.FC<SignInFormProps> = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Button onPress={onSubmit} name="Sign In" />
    </View>
  );
};
const SignIn = () => {
  const onSubmit = (values: FormikValues) => {
    console.log(values);
  };
  return (
    <View>
      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
