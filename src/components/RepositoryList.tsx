import { FlatList, View, StyleSheet, ListRenderItem } from "react-native";
import { RepositoryData } from "../types";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import Text from "./Text";
import useAuthStorage from "../hooks/useAuthStorage";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  // Get the nodes from the edges array
  if (loading) return <Text center>loading...</Text>;
  console.log(repositories);

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];
  const renderItem: ListRenderItem<RepositoryData> = ({ item }) => {
    return <RepositoryItem {...item} />;
  };
  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      // other props
    />
  );
};

export default RepositoryList;
