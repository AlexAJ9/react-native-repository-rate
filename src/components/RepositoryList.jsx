import React from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../utils/useRepositories";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem repository={item} />;
const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoriesData = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoriesData}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default RepositoryList;
