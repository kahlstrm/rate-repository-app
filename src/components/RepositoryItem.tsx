import { StyleSheet, Text, View } from "react-native";
import { RepositoryData } from "../types";
const styles = StyleSheet.create({
  container: {
    borderColor: "#fab",
    borderWidth: 2,
    borderRadius: 10,
    padding:5,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 14,
  },
});
const RepositoryItem = (item: RepositoryData) => {
  return (
    <View style={styles.container}>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  );
};

export default RepositoryItem;
