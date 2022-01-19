import { TextInput as NativeTextInput } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import theme from "../../theme";

const styles = StyleSheet.create({
  input: {
    padding: 15,
    margin: 10,
    borderStyle: "solid",
    borderRadius: theme.roundness,
    borderColor: "#000",
    borderWidth: 1,
  },
  errorInput: {
    borderColor: theme.colors.error,
  },
});
const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.input, error && styles.errorInput];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
