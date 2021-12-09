import React from "react";
import { View, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    color: theme.colors.textGray,
  },
  data: {
    paddingBottom: 5,
    fontWeight: theme.fontWeights.bold,
  },
});
function formatNumber(num) {
  return Math.abs(num) > 999
    ? (Math.abs(num) / 1000).toFixed(1) + "k"
    : Math.sign(num) * Math.abs(num);
}
const RepoInfo = ({ label, data }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.data}>{formatNumber(data)}</Text>
      </View>
      <View>
        <Text style={styles.label}>{label}</Text>
      </View>
    </View>
  );
};

export default RepoInfo;
