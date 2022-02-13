import React from "react";
import Text from "../Text";
import * as yup from "yup";
import { Formik } from "formik";
import theme from "../../theme";
import { View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import FormikTextInput from "../Inputs/FormikTextInput";
import useSignUp from "../../utils/hooks/useSignUp";
import useSignIn from "../../utils/hooks/useSignIn";
import { useNavigate } from "react-router-dom";

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

const signUpValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required").min(1).max(30),
  password: yup.string().required("Password is required").min(5).max(50),
  passwordConfirm: yup
    .string()
    .required("Password confirm is required")
    .oneOf([yup.ref("password"), null], "Passwords must match!"),
});

const Inputs = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput placeholder="Username" name="username" />
      <FormikTextInput
        placeholder="Password"
        name="password"
        secureTextEntry={true}
      />
      <FormikTextInput
        placeholder="Password confirmation"
        name="passwordConfirm"
        secureTextEntry={true}
      />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText}>Sing up</Text>
      </Pressable>
    </View>
  );
};
const SignUpForm = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async ({ username, password }) => {
    try {
      const { data } = await signUp({ username, password });
      if (data.createUser.username)
        await signIn({ username: data.createUser.username, password });
      navigate("/repositories");
    } catch (error) {
      console.log(error);
    }
  };
  const initialValues = {
    password: null,
    passwordConfirm: null,
    username: null,
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={signUpValidationSchema}
    >
      {({ handleSubmit }) => <Inputs onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignUpForm;
