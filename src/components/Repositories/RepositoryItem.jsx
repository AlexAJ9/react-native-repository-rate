import React from "react";
import { View, StyleSheet, Image } from "react-native";
import theme from "../../theme";
import Text from "../Text";
import RepoInfoList from "./RepoInfoList";
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: "#fff",
  },
  flexContainerRow: {
    display: "flex",
    flexDirection: "row",
  },
  flexContainerColumn: {
    display: "flex",
    flexDirection: "column",
    flexShrink: 1,
    padding: 10,
  },
  fullName: {
    paddingBottom: 7,
    color: "#000",
  },
  description: {
    paddingBottom: 7,
  },

  logoContainer: {
    padding: 10,
  },
  logo: {
    borderRadius: 10,
    width: 66,
    height: 58,
  },
  language: {
    width: 100,
    alignSelf: "flex-start",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 5,
  },
  languageText: {
    color: "#fff",
  },
});
const RepositoryItem = ({ repository }) => {
  return (
    <View testID="repositoryItem" id={repository.id} style={styles.container}>
      <View style={styles.flexContainerRow}>
        <View style={styles.logoContainer}>
          <Image
            testID="repositoryItemImage"
            style={styles.logo}
            source={{ uri: `${repository.ownerAvatarUrl}` }}
          />
        </View>
        <View style={styles.flexContainerColumn}>
          <Text fontWeight="bold" fontSize="subheadig" style={styles.fullName}>
            {repository.fullName}
          </Text>
          <Text
            fontWeight="normal"
            fontSize="subheadig"
            color="textGray"
            style={styles.description}
          >
            {repository.description}
          </Text>
          <View style={styles.language}>
            <Text style={styles.languageText}>{repository.language}</Text>
          </View>
        </View>
      </View>

      <RepoInfoList repository={repository} />
    </View>
  );
};

export default RepositoryItem;
