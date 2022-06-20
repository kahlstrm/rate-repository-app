import { useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Alert, FlatList, View } from "react-native";
import { useNavigate } from "react-router-native";
import { USER_INFO } from "../graphql/queries";
import useDeleteReview from "../hooks/useDeleteReview";
import { userInfoWithReviewsSchema } from "../schema/validationSchemas";
import theme from "../theme";
import { UserInfoWithReviews } from "../types";
import ReviewItem from "./SingleRepositoryView/Review";
import Button from "./UI/Button";
import ItemSeparator from "./UI/ItemSeparator";
import Text from "./UI/Text";

const MyReviews = () => {
  const navigate = useNavigate();
  const { deleteReview, result } = useDeleteReview();
  const { data, refetch } = useQuery<{ me: UserInfoWithReviews }>(USER_INFO, {
    variables: {
      includeReviews: true,
    },
  });
  useEffect(() => {
    if (result.data?.deleteReview) {
      refetch();
    }
  }, [result]);
  if (!userInfoWithReviewsSchema.isValidSync(data?.me)) {
    console.log(data?.me);

    console.log("failure");
    return null;
  }
  const reviews = data?.me.reviews.edges.map((n) => n.node);
  if (reviews?.length === 0) return <Text>You have no reviews.</Text>;
  return (
    <FlatList
      data={reviews}
      ItemSeparatorComponent={ItemSeparator}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => {
        return (
          <ReviewItem repoFullName={item.repository.fullName} review={item}>
            <View
              style={{
                flexDirection: "row",
                flexShrink: 1,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button
                text="View repository"
                onPress={() => navigate("/" + item.repository.id)}
              />
              <Button
                style={{ backgroundColor: theme.colors.red }}
                text="Delete review"
                onPress={() => {
                  Alert.alert("Delete Review", "", [
                    {
                      text: "Cancel",
                      onPress: () => {
                        console.log("no delete");
                      },
                    },
                    {
                      text: "Delete",
                      onPress: async () => {
                        console.log("delete review" + item.id);
                        await deleteReview(item.id);
                      },
                    },
                  ]);
                }}
              />
            </View>
          </ReviewItem>
        );
      }}
    />
  );
};

export default MyReviews;
