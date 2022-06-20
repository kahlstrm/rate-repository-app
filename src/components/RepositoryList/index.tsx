import { FlatList } from "react-native";
import { RepositoryData, RepositoryDataFromApi, StateProps } from "../../types";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../../hooks/useRepositories";
import ItemSeparator from "../UI/ItemSeparator";
import React, { useState } from "react";
import { useDebounce } from "use-debounce";
import RepositoryListHeader from "./RepositoryListHeader";
interface RepoListContainerProps {
  repositories: RepositoryDataFromApi | undefined;
  state: StateProps;
  onEndReach: () => void;
}
export class RepositoryListContainer extends React.Component<RepoListContainerProps> {
  repositoryNodes: () => RepositoryData[] = () =>
    this.props.repositories
      ? this.props.repositories.edges.map((edge) => edge.node)
      : [];
  renderHeader = () => {
    const props = this.props;
    return <RepositoryListHeader state={props.state} />;
  };
  render() {
    return (
      <FlatList
        data={this.repositoryNodes()}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <RepositoryItem pressable {...item} />;
        }}
        ListHeaderComponent={this.renderHeader}
        onEndReached={this.props.onEndReach}
        onEndReachedThreshold={0.5}
        // other props
      />
    );
  }
}
const RepositoryList = () => {
  const [selectedSort, setSelectedSort] = useState("latest");
  const [searchWord, setSearchWord] = useState("");
  const [searchKeyword] = useDebounce(searchWord, 500);
  const { repositories, fetchMore } = useRepositories({
    selectedSort,
    searchKeyword,
  });
  const onEndReach = () => {
    fetchMore();
  };

  return (
    <RepositoryListContainer
      state={{
        searchWord,
        setSearchWord,
        selected: selectedSort,
        setSelected: setSelectedSort,
      }}
      onEndReach={onEndReach}
      repositories={repositories}
    />
  );
};

export default RepositoryList;
