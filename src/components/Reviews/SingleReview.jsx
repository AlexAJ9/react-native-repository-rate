import { View, StyleSheet, Pressable, Alert } from "react-native";
import theme from "../../theme";
import React from "react";
import Text from "../Text";
import useDeleteReview from "../../utils/hooks/useDeleteReview";
import { useNavigate } from "react-router-dom";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  reviewContainer: {
    display: "flex",
    flexDirection: "row",
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
  actionsContainer: {
    display: "flex",
    flexDirection: "row",
  },

  submitButton: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 15,
    borderRadius: 5,
  },
  viewButton: { backgroundColor: theme.colors.primary },
  deleteButton: { backgroundColor: theme.colors.error },

  submitButtonText: {
    color: "#fff",
  },
});

const Review = ({ review, refetch, showActions }) => {
  const [deleteReview] = useDeleteReview();
  const navigate = useNavigate();
  const handleDeleteReview = async () => {
    await deleteReview({ id: review.id });
    refetch();
  };
  const viewRepository = () => {
    navigate(`/repository/${review.repository.id}`);
  };

  const createTwoButtonAlert = () =>
    Alert.alert(
      "Delete review",
      "Are you sure you want to delete this review?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "OK", onPress: () => handleDeleteReview() },
      ]
    );
  return (
    <View style={styles.container}>
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
            {new Intl.DateTimeFormat("en-GB").format(
              new Date(review.createdAt)
            )}
          </Text>
          <Text style={styles.reviewInfoItem}> {review.text}</Text>
        </View>
      </View>
      {showActions && (
        <View style={styles.actionsContainer}>
          <Pressable
            style={[styles.submitButton, styles.viewButton]}
            onPress={viewRepository}
          >
            <Text style={styles.submitButtonText}>View repository</Text>
          </Pressable>
          <Pressable
            style={[styles.submitButton, styles.deleteButton]}
            onPress={createTwoButtonAlert}
          >
            <Text style={styles.submitButtonText}>Delete review</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default Review;
