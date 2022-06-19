import { FlatList, View, StyleSheet } from "react-native";
import { RepositoryData, RepositoryDataFromApi } from "../types";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
export const RepositoryListContainer: React.FC<{
  repositories: RepositoryDataFromApi|undefined;
}> = ({ repositories }) => {
  const repositoryNodes: RepositoryData[] = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return <RepositoryItem {...item} />;
      }}
      // other props
    />
  );
};
const RepositoryList = () => {
  const { repositories, loading } = useRepositories();
  return <RepositoryListContainer repositories={repositories}/>

};

export default RepositoryList;
