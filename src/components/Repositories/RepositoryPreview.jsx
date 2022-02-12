import React from "react";
import RepositoryItem from "./RepositoryItem";
import { Text, View } from "react-native";

const RepositoryPreview = ({ repository }) => {
  return (
    <View>
      {repository ? (
        <RepositoryItem repository={repository} showButton={true} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default RepositoryPreview;
