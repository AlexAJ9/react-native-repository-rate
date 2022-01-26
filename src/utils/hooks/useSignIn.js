import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useNavigate } from "react-router-dom";

const useSignIn = () => {
  const [mutate, result] = useMutation(SIGN_IN);

  const navigate = useNavigate();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: { credentials: { username: username, password: password } },
    });
    await authStorage.setAccessToken(data?.authenticate?.accessToken);
    apolloClient.resetStore();
    navigate("/repositories", { replace: true });
  };
  return [signIn, result];
};

export default useSignIn;
