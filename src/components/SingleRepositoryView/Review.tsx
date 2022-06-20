import React from "react";
import { StyleSheet, View } from "react-native";
import theme from "../../theme";
import { Review } from "../../types";
import Text from "../UI/Text";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.white,
    padding: 10,
  },
  rating: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: theme.colors.primary,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10,
  },
  top: {
    flexDirection: "row",
  },
  rightContent: {
    flexShrink: 1,
  },
});
const Rating: React.FC<{ rating: number }> = ({ rating }) => {
  return (
    <View style={styles.rating}>
      <Text fontWeight="bold" color="primary">
        {rating}
      </Text>
    </View>
  );
};
const NameDateReview: React.FC<{
  name: string;
  date: Date;
  reviewText: string | undefined;
}> = ({ name, date, reviewText }) => {
  return (
    <View style={styles.rightContent}>
      <Text fontWeight="bold">{name}</Text>
      <Text color="textSecondary">{new Date(date).toDateString()}</Text>
      <Text>{reviewText}</Text>
    </View>
  );
};
const ReviewItem: React.FC<{
  repoFullName?: string;
  review: Review;
}> = ({ review, repoFullName, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Rating rating={review.rating} />
        <NameDateReview
          name={repoFullName ? repoFullName : review.user.username}
          date={review.createdAt}
          reviewText={review.text}
        />
      </View>
      {children}
    </View>
  );
};

export default ReviewItem;
