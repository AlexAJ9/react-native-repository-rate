import { useQuery } from "@apollo/client";
import { GET_CURRENT_USER } from "../../graphql/queries";

const useIsUserAuthenticated = (variables) => {
  const { data, error, loading, fetchMore } = useQuery(GET_CURRENT_USER, {
    fetchPolicy: "cache-and-network",
    variables: variables,
  });

  return { data, error, loading };
};

export default useIsUserAuthenticated;
