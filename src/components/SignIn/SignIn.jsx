import React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import Form from "./SignInForm";
import * as yup from "yup";
import useSignIn from "../../utils/hooks/useSignIn";

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
const SignIn = () => {
  const [signIn] = useSignIn();
  const initialValues = { username: "", password: "" };

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={signInValidationSchema}
      >
        {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
