import React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import Form from "./SignInForm";
import * as yup from "yup";

const onSubmit = (values) => {
  console.log(values);
};
const signInValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username should be at least 3 characters")
    .required("Username is required"),
  password: yup
    .string()
    .min(8, "Password should be at least 8 characters")
    .required("Password is required"),
});
const SignIn = () => {
  const initialValues = { username: "", password: "" };
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
