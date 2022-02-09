import React from "react";

import { useParams } from "react-router-dom";
import { useRepository } from "../../utils/hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import { Text, View } from "react-native";

const RepositoryPreview = () => {
  const { repositoryId } = useParams();
  const { data } = useRepository(repositoryId);

  return (
    <View>
      {data ? (
        <RepositoryItem repository={data?.repository} showButton={true} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default RepositoryPreview;
