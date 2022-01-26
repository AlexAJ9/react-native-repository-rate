import { useQuery } from "@apollo/client";
import { IS_USER_AUTHENTICATED } from "../../graphql/queries";

const useIsUserAuthenticated = () => {
  const { data, error, loading } = useQuery(IS_USER_AUTHENTICATED, {
    fetchPolicy: "cache-and-network",
  });

  return { data, error, loading };
};

export default useIsUserAuthenticated;
