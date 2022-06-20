import { useQuery } from "@apollo/client";
import { FlatList, StyleSheet, View } from "react-native";
import { useParams } from "react-router-native";
import { GET_REPO } from "../../graphql/queries";
import { repoSchemaFull } from "../../schema/validationSchemas";
import { RepositoryData } from "../../types";
import * as Linking from "expo-linking";
import RepositoryItem from "../RepositoryList/RepositoryItem";
import Button from "../UI/Button";
import ReviewItem from "./Review";
import ItemSeparator from "../UI/ItemSeparator";
const SingleRepositoryView = () => {
  const { id } = useParams();
  const { data } = useQuery<{ repository: RepositoryData }>(GET_REPO, {
    variables: {
      id: id,
    },
    fetchPolicy: "cache-and-network",
  });
  const repository = data?.repository;

  if (!repoSchemaFull.isValidSync(repository)) {
    console.log("incorrect format");
    console.log(repository);

    return null;
  }
  console.log("ok");

  const reviews = repository.reviews.edges.map((edge) => ({
    ...edge.node,
    createdAt: new Date(edge.node.createdAt),
  }));
  return (
    <>
      <FlatList
        data={reviews}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return <ReviewItem review={item} />;
        }}
        ListHeaderComponent={() => (
          <>
          <RepositoryItem {...repository}>
            <Button
              text="Open in GitHub"
              onPress={() => Linking.openURL(repository.url)}
            />
          </RepositoryItem>
          <ItemSeparator/>
          </>
        )}
      />
    </>
  );
};

export default SingleRepositoryView;
