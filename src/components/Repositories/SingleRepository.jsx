import React from "react";
import { FlatList } from "react-native";
import RepositoryPreview from "./RepositoryPreview";
import { useParams } from "react-router-dom";
import { useRepository } from "../../utils/hooks/useRepositories";
import ItemSeparator from "../common/Separator";
import Review from "../Reviews/SingleReview";

const SingleRepository = () => {
  const { repositoryId } = useParams();
  const { data, fetchMore } = useRepository({ id: repositoryId, first: 3 });

  const reviews = data?.repository?.reviews?.edges?.map((el) => el.node);

  const onEndReach = () => {
    fetchMore();
  };
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <Review review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
      ListHeaderComponent={() => (
        <RepositoryPreview repository={data?.repository} />
      )}
    />
  );
};

export default SingleRepository;
