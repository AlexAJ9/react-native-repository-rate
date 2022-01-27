import React from "react";
import Text from "../Text";
import * as yup from "yup";
import { Formik } from "formik";
import theme from "../../theme";
import { View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import FormikTextInput from "../Inputs/FormikTextInput";

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

const signInValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username should be at least 3 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be at least 5 characters")
    .required("Password is required"),
});

const Inputs = ({ onSubmit }) => {
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
const Form = ({ onSubmit }) => {
  const initialValues = { username: "", password: "" };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signInValidationSchema}
    >
      {({ handleSubmit }) => <Inputs onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default Form;
