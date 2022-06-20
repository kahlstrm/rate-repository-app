import React from "react";
import { StyleSheet, View } from "react-native";
import { Route, Routes, Navigate } from "react-router-native";
import theme from "../theme";

import AppBar from "./AppBar";
import CreateReview from "./CreateReview";
import MyReviews from "./MyReviews";
import RepositoryList from "./RepositoryList";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import SingleRepositoryView from "./SingleRepositoryView";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.mainBackground,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/create" element={<CreateReview />} />
        <Route path="/myreviews" element={<MyReviews />} />
        <Route path="/:id" element={<SingleRepositoryView />} />
        <Route path="/" element={<RepositoryList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </View>
  );
};

export default Main;
