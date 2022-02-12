import React from "react";
import Text from "../Text";
import * as yup from "yup";
import { Formik } from "formik";
import theme from "../../theme";
import { View, Pressable } from "react-native";
import { StyleSheet } from "react-native";
import FormikTextInput from "../Inputs/FormikTextInput";
import useCreateReview from "../../utils/hooks/useCreateReview";

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

const reviewValidationSchema = yup.object().shape({
  ownerName: yup.string().required("Name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number("Rating must be a number from 0 to 100")
    .typeError("Rating must be a number")
    .min(0)
    .max(100)
    .required("Rating is required"),
});

const Inputs = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput placeholder="Name" name="ownerName" />
      <FormikTextInput placeholder="Repository name" name="repositoryName" />
      <FormikTextInput
        type="number"
        placeholder="Rating between 0 and 100"
        name="rating"
        on
      />
      <FormikTextInput multiline placeholder="Review" name="text" />
      <Pressable style={styles.submitButton} onPress={onSubmit}>
        <Text style={styles.submitButtonText}>Create a review</Text>
      </Pressable>
    </View>
  );
};
const CreateReview = () => {
  const [createReview] = useCreateReview();

  const onSubmit = async ({ ownerName, repositoryName, rating, text }) => {
    try {
      await createReview({ ownerName, repositoryName, rating, text });
    } catch (error) {
      console.log(error);
    }
  };
  const initialValues = {
    ownerName: "",
    repositoryName: "",
    rating: null,
    text: "",
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={reviewValidationSchema}
    >
      {({ handleSubmit }) => <Inputs onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default CreateReview;
