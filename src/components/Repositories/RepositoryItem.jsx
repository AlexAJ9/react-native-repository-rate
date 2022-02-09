import React from "react";
import { View, StyleSheet, Image, Pressable } from "react-native";
import theme from "../../theme";
import Text from "../Text";
import RepoInfoList from "./RepoInfoList";
import { useNavigate } from "react-router-dom";
import * as Linking from "expo-linking";
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
  openButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    padding: 10,
    backgroundColor: theme.colors.primary,
  },
});
const RepositoryItem = ({ repository, showButton = false }) => {
  const navigate = useNavigate();
  return (
    <View testID="repositoryItem" id={repository?.id} style={styles.container}>
      <Pressable onPress={() => navigate(`/repository/${repository?.id}`)}>
        <View style={styles.flexContainerRow}>
          <View style={styles.logoContainer}>
            <Image
              testID="repositoryItemImage"
              style={styles.logo}
              source={{ uri: `${repository?.ownerAvatarUrl}` }}
            />
          </View>
          <View style={styles.flexContainerColumn}>
            <Text
              fontWeight="bold"
              fontSize="subheadig"
              style={styles.fullName}
            >
              {repository?.fullName}
            </Text>
            <Text
              fontWeight="normal"
              fontSize="subheadig"
              color="textGray"
              style={styles.description}
            >
              {repository?.description}
            </Text>
            <View style={styles.language}>
              <Text style={styles.languageText}>{repository?.language}</Text>
            </View>
          </View>
        </View>
        <View style={styles.flexContainerRow}>
          <RepoInfoList repository={repository} />
        </View>
      </Pressable>
      {showButton && (
        <View style={styles.openButton}>
          <Pressable onPress={() => Linking.openURL(repository?.url)}>
            <Text
              fontWeight="bold"
              fontSize="subheadig"
              style={styles.languageText}
            >
              Open in GitHub
            </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
};

export default RepositoryItem;
