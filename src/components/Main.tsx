import Constants from "expo-constants";
import { Text, StyleSheet, View } from "react-native";
import RepositoryList from "./RepositoryList";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
  header: {
    fontSize: 30,
    color: "firebrick",
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Rate Repository Application</Text>
      <RepositoryList />
    </View>
  );
};

export default Main;