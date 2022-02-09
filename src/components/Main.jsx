import React from "react";
import { StyleSheet, View } from "react-native";
import RepositoryList from "./Repositories/RepositoryList";
import AppBar from "./AppBar";
import { Route, Routes, Navigate } from "react-router-native";
import SignIn from "./SignIn/SignIn";
import RepositoryPreview from "./Repositories/RepositoryPreview";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "#F0F0F0",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route
          path="/repository/:repositoryId"
          element={<RepositoryPreview />}
          exact
        />
        <Route path="/sign-in" element={<SignIn />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
