import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import React from "react";
import Text from "../Text";
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
const Review = ({ review }) => {
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

export default Review;
