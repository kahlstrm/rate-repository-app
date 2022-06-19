import { useApolloClient, useMutation } from "@apollo/client";
import { SIGN_IN } from "../graphql/mutations";
import { AccessTokenFromApi, SignInFuncProps } from "../types";
import useAuthStorage from "./useAuthStorage";

const useSignIn = () => {
  const apolloClient = useApolloClient();
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation<
    { authenticate: AccessTokenFromApi },
    SignInFuncProps
  >(SIGN_IN);

  const signIn = async ({ username, password }: SignInFuncProps) => {
    const res = await mutate({ variables: { username, password } });
    const accessToken = res.data?.authenticate.accessToken;
    accessToken && (await authStorage.setAccessToken(accessToken));
    apolloClient.resetStore();
    return res;
    // call the mutate function here with the right arguments
  };

  return { signIn, result };
};
export default useSignIn;
