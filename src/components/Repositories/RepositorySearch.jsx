import React from "react";
import { Searchbar } from "react-native-paper";

const RepoSearch = ({ searchQuery, setSearchQuery }) => {
  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      placeholder="Search repositories"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default RepoSearch;
