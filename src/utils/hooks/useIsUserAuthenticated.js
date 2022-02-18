import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/queries";

const useIsUserAuthenticated = (variables) => {
  const { data, error, loading, refetch } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: variables,
  });

  return { data, error, loading, refetch };
};

export default useIsUserAuthenticated;
