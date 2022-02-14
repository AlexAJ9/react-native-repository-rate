import React, { useState } from "react";
import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../utils/hooks/useRepositories";
import OrderByRepositories from "./OrderByRepositories";
import RepoSearch from "./RepositorySearch";
import { useDebounce } from "use-debounce";

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
  searchQuery,
  setSearchQuery,
  onEndReach,
}) => {
  const repositoriesData = repositories
    ? repositories?.edges?.map((edge) => edge.node)
    : [];
  return (
    <FlatList
      data={repositoriesData}
      ListHeaderComponent={
        <>
          <RepoSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
          <OrderByRepositories orderBy={orderBy} setOrderBy={setOrderBy} />
        </>
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};
const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("Latest repositories");
  const [searchQuery, setSearchQuery] = React.useState("");
  const [searchKeyword] = useDebounce(searchQuery, 500);

  //Fix this
  const order =
    orderBy === "Highest rated repositories"
      ? { orderBy: "RATING_AVERAGE", orderDirection: "DESC" }
      : orderBy === "Lowest rated repositories"
      ? { orderBy: "RATING_AVERAGE", orderDirection: "ASC" }
      : { orderBy: "CREATED_AT", orderDirection: "DESC" };

  const { repositories, fetchMore } = useRepositories({
    ...order,
    searchKeyword,
    first: 6,
  });
  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;
