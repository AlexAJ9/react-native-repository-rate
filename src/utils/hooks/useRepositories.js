import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES, GET_SINGLE_REPOSITORY } from "../../graphql/queries";

const useRepositories = ({ orderBy, orderDirection }) => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    variables: { orderBy, orderDirection },
    fetchPolicy: "cache-and-network",
  });

  return { repositories: data?.repositories, error, loading };
};

export const useRepository = (id) => {
  const { data, error, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
  return { data, error, loading };
};
export default useRepositories;
