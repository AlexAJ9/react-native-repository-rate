import { useQuery } from "@apollo/client";
import { GET_REPOSITORIES, GET_SINGLE_REPOSITORY } from "../../graphql/queries";

const useRepositories = (variables) => {
  const { data, error, fetchMore, loading, ...result } = useQuery(
    GET_REPOSITORIES,
    {
      variables: variables,
      fetchPolicy: "cache-and-network",
    }
  );
  const handleFetchMore = () => {
    const canFetchMore = !loading && data?.repositories.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        ...variables,
        after: data.repositories.pageInfo.endCursor,
      },
    });
  };

  return {
    repositories: data?.repositories,
    fetchMore: handleFetchMore,
    error,
    loading,
    ...result,
  };
};

export const useRepository = (variables) => {
  const { data, error, fetchMore, loading } = useQuery(GET_SINGLE_REPOSITORY, {
    variables: variables,
    fetchPolicy: "cache-and-network",
  });

  const handleFetchMore = () => {
    const canFetchMore =
      !loading && data?.repository.reviews.pageInfo.hasNextPage;
    if (!canFetchMore) {
      return;
    }
    fetchMore({
      variables: {
        ...variables,
        after: data.repository.reviews.pageInfo.endCursor,
      },
    });
  };

  return { data, error, loading, fetchMore: handleFetchMore };
};
export default useRepositories;
