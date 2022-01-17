import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.tabBackground,
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab text="Repositories" />
        <AppBarTab url="sign-in" text="Sign in" />
      </ScrollView>
    </View>
  );
};

export default AppBar;
