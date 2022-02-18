import React from "react";
import { FlatList, View } from "react-native";
import ItemSeparator from "../common/Separator";
import useIsUserAuthenticated from "../../utils/hooks/useIsUserAuthenticated";
import Review from "./SingleReview";

const renderItem = ({ item, refetch, showActions }) => (
  <Review review={item} refetch={refetch} showActions={showActions} />
);

const Reviews = ({ showActions }) => {
  const { data, refetch } = useIsUserAuthenticated({
    includeReviews: true,
  });
  const reviews = data
    ? data?.me?.reviews?.edges?.map((edge) => edge.node)
    : [];

  return (
    <View>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={(review) =>
          renderItem({ item: review.item, refetch, showActions })
        }
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Reviews;
