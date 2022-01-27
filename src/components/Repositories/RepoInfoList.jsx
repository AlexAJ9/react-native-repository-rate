import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../../theme";
import RepoInfo from "./RepoInfo";
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  label: {
    color: theme.colors.textGray,
  },
  data: {
    fontWeight: theme.fontWeights.bold,
  },
  flexContainerRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
const RepoInfoList = ({ repository }) => {
  return (
    <View style={styles.flexContainerRow}>
      <RepoInfo data={repository.stargazersCount} label={"Stars"} />
      <RepoInfo data={repository.forksCount} label={"Forks"} />
      <RepoInfo data={repository.reviewCount} label={"Reviews"} />
      <RepoInfo data={repository.ratingAverage} label={"Ratings"} />
    </View>
  );
};

export default RepoInfoList;
