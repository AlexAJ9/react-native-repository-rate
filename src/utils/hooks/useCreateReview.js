import { useMutation } from "@apollo/client";
import { CREATE_REVIEW } from "../../graphql/mutations";

import { useNavigate } from "react-router-dom";

const useCreateReview = () => {
  const [mutate, result] = useMutation(CREATE_REVIEW);

  const navigate = useNavigate();

  const createReview = async ({ ownerName, repositoryName, rating, text }) => {
    const { data } = await mutate({
      variables: { review: { ownerName, repositoryName, rating, text } },
    });
    const repositoryId = data?.createReview.repositoryId;
    navigate(`/repository/${repositoryId}`, { replace: true });
  };
  return [createReview, result];
};

export default useCreateReview;
