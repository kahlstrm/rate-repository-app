import { useMutation } from "@apollo/client";
import { CREATE_USER } from "../graphql/mutations";
import { userInfoSchema } from "../schema/validationSchemas";
import { SignInFuncProps, UserInfoFromApi } from "../types";

const useSignUp = () => {
  const [mutate, result] = useMutation<
    { createUser: UserInfoFromApi },
    { user: SignInFuncProps }
  >(CREATE_USER);

  const signUp = async (user: SignInFuncProps) => {
    const res = await mutate({ variables: { user } });
    if (!userInfoSchema.isValidSync(res.data?.createUser)) {
      throw Error("invalid response");
    }
    return res;
  };
  return { signUp, result };
};

export default useSignUp;
