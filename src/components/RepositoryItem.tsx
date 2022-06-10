import { Text, View } from "react-native";
import { RepositoryData } from "../types";

const RepositoryItem = (item: RepositoryData) => {
  console.log(item);
  return (
    <View>
      <Text>Full name:{item.fullName}</Text>
      <Text>Description:{item.description}</Text>
      <Text>Language:{item.language}</Text>
      <Text>Stars:{item.stargazersCount}</Text>
      
    </View>
  );
};

export default RepositoryItem;
