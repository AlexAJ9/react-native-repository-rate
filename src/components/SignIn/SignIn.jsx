import React from "react";
import { View } from "react-native";
import useSignIn from "../../utils/hooks/useSignIn";
import SignInForm from "./SignInForm";

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async ({ username, password }) => {
    try {
      await signIn({ username, password });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <SignInForm onSubmit={onSubmit} />
    </View>
  );
};

export default SignIn;
