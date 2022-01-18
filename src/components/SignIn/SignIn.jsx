import React from "react";
import { Formik } from "formik";
import { View } from "react-native";
import Form from "./SignInForm";

const onSubmit = (values) => {
  console.log(values);
};

const SignIn = () => {
  const initialValues = { username: "", password: "" };
  return (
    <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ handleSubmit }) => <Form onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;
