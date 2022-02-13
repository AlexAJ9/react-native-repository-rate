import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../utils/hooks/useRepositories";
import OrderByRepositories from "./OrderByRepositories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => <RepositoryItem repository={item} />;

export const RepositoryListContainer = ({
  repositories,
  orderBy,
  setOrderBy,
}) => {
  const repositoriesData = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoriesData}
      ListHeaderComponent={
        <OrderByRepositories orderBy={orderBy} setOrderBy={setOrderBy} />
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("Latest repositories");

  //Fix this
  const order =
    orderBy === "Highest rated repositories"
      ? { orderBy: "RATING_AVERAGE", orderDirection: "DESC" }
      : orderBy === "Lowest rated repositories"
      ? { orderBy: "RATING_AVERAGE", orderDirection: "ASC" }
      : { orderBy: "CREATED_AT", orderDirection: "DESC" };
  const { repositories } = useRepositories(order);

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
    />
  );
};

export default RepositoryList;
