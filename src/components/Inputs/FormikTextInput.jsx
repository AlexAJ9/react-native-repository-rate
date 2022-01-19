import { StyleSheet } from "react-native";
import { useField } from "formik";
import React from "react";
import TextInput from "./TextInput";
import Text from "../Text";

const styles = StyleSheet.create({
  errorText: {
    margin: 10,
    color: "#d73a4a",
  },
  input: {
    padding: 15,
    margin: 10,
    borderStyle: "solid",
    borderRadius: 5,
    borderColor: "#000",
    borderWidth: 1,
  },
  errorInput: {
    padding: 15,
    margin: 10,
    borderStyle: "solid",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#d73a4a",
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  return (
    <>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        onChangeText={(value) => helpers.setValue(value)}
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        style={showError ? styles.errorInput : styles.input}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
