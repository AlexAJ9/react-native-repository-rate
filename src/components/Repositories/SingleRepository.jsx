import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import theme from "../../theme";
import Text from "../Text";
import RepositoryPreview from "./RepositoryPreview";
import { useParams } from "react-router-dom";
import { useRepository } from "../../utils/hooks/useRepositories";

const styles = StyleSheet.create({
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#fff",
  },
  reviewRatingContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 10,
    width: 60,
    height: 60,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.colors.primary,
    borderRadius: 30,
    padding: 10,
    margin: 10,
    textAlign: "center",
  },
  reviewInfoContainer: {
    flex: 90,
    padding: 10,
  },
  reviewInfoItem: {
    margin: 2,
  },
  separator: {
    height: 10,
  },
});
const ItemSeparator = () => <View style={styles.separator} />;

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.reviewContainer}>
      <View style={styles.reviewRatingContainer}>
        <Text color="primary" fontWeight="bold">
          {review.rating}
        </Text>
      </View>
      <View style={styles.reviewInfoContainer}>
        <Text style={styles.reviewInfoItem} fontWeight="bold">
          {review.user.username}
        </Text>
        <Text style={styles.reviewInfoItem} color="gray">
          {new Intl.DateTimeFormat("en-GB").format(new Date(review.createdAt))}
        </Text>
        <Text style={styles.reviewInfoItem}> {review.text}</Text>
      </View>
    </View>
  );
};

const SingleRepository = () => {
  const { repositoryId } = useParams();
  const { data } = useRepository(repositoryId);

  const reviews = data?.repository?.reviews?.edges?.map((el) => el.node);
  return (
    <FlatList
      data={reviews}
      renderItem={({ item }) => <ReviewItem review={item} />}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={({ id }) => id}
      ListHeaderComponent={() => (
        <RepositoryPreview repository={data?.repository} />
      )}
    />
  );
};

export default SingleRepository;
