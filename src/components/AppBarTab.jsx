import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import Text from "./Text";
import { Link } from "react-router-native";
import theme from "../theme";

const styles = StyleSheet.create({
  tab: {
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

const AppBarTab = ({ url = "", text, onClickFunction = undefined }) => {
  return (
    <View style={styles.tab}>
      {onClickFunction ? (
        <Pressable onPress={onClickFunction}>
          <Text style={styles.text} fontWeight="bold" color="textSecondary">
            {text}
          </Text>
        </Pressable>
      ) : (
        <Pressable>
          <Link to={`/${url}`}>
            <Text style={styles.text} fontWeight="bold" color="textSecondary">
              {text}
            </Text>
          </Link>
        </Pressable>
      )}
    </View>
  );
};

export default AppBarTab;
