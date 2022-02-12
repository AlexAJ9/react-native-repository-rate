import { StyleSheet } from "react-native";
import { useField } from "formik";
import React from "react";
import TextInput from "./TextInput";
import Text from "../Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  errorText: {
    margin: 10,
    color: theme.colors.error,
  },
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const isNumberField = props.type === "number";
  return (
    <>
      <TextInput
        secureTextEntry={props.secureTextEntry}
        onChangeText={(value) =>
          helpers.setValue(isNumberField ? parseInt(value) : value)
        }
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        error={showError}
        {...props}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
