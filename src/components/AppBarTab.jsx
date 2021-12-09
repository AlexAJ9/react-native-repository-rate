import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
    backgroundColor: theme.colors.tabBackground,
    height: 75,
  },
  text: {
    color: "#FFF",
    paddingTop: 40,
    paddingBottom: 25,
    paddingLeft: 15,
    fontSize: theme.fontSizes.subheading,
  },
});

const AppBarTab = () => {
  return (
    <View style={styles.tab}>
      <Pressable>
        <Text style={styles.text} fontWeight="bold" color="textSecondary">
          Repositories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBarTab;
