import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Constants from "expo-constants";
import AppBarTab from "./AppBarTab";
import theme from "../theme";
import useIsUserAuthenticated from "../utils/hooks/useIsUserAuthenticated";
import useSignOut from "../utils/hooks/useSignOut";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.tabBackground,
    paddingTop: Constants.statusBarHeight,
    display: "flex",
    flexDirection: "row",
  },
});

const AppBar = () => {
  const { data } = useIsUserAuthenticated();
  const [signOut] = useSignOut();

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        {data?.me ? (
          <>
            <AppBarTab text="Repositories" />
            <AppBarTab text="Create a review" url="create-review" />
            <AppBarTab text="Sign out" onClickFunction={signOut} />
          </>
        ) : (
          <AppBarTab url="sign-in" text="Sign in" />
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
