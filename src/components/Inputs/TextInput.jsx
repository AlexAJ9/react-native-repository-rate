import { TextInput as NativeTextInput, StyleSheet } from "react-native";
import React from "react";

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 10,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [style];

  return <NativeTextInput style={styles.input} {...props} />;
};

export default TextInput;
