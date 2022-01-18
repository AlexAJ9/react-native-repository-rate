import React from "react";
import Text from "../Text";
import { View, Pressable } from "react-native";
import FormikTextInput from "../Inputs/FormikTextInput";
import { StyleSheet } from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  submitButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    padding: 10,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
  },
});

const Form = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput placeholder="Username" name="username" />
      <FormikTextInput
        secureTextEntry={true}
        placeholder="Password"
        name="password"
      />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default Form;
