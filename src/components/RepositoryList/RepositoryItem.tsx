import React from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import { useNavigate } from "react-router-native";
import theme from "../../theme";
import { RepositoryData } from "../../types";
import Text, { Subheading } from "../UI/Text";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
  },
  img: {
    overflow: "hidden",
    borderRadius: 5,
    width: 50,
    height: 50,
  },
  imgAndInfo: {
    marginBottom: 10,
    flexDirection: "row",
  },
  info: {
    flexShrink: 1,
    alignSelf: "flex-start",
    marginHorizontal: 10,
  },
  desc: {
    paddingVertical: 5,
  },
  language: {
    padding: 5,
    backgroundColor: theme.colors.primary,
    borderRadius: 5,
    overflow: "hidden",
    alignSelf: "flex-start",
  },
  bottomInfoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
interface BottomItemProps {
  name: string;
  value: number;
}
const BottomItem: React.FC<BottomItemProps> = ({ name, value }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Subheading center>{value}</Subheading>
      <Text center color="textSecondary">
        {name}
      </Text>
    </View>
  );
};
type ItemProps = RepositoryData & { pressable?: boolean };
const RepositoryItem: React.FC<ItemProps> = (props) => {
  const navigate = useNavigate();
  return (
    <View testID="repositoryItem" style={styles.container}>
      <Pressable
        disabled={!props.pressable}
        onPress={() => navigate(`/${props.id}`)}
      >
        <View style={styles.imgAndInfo}>
          <Image style={styles.img} source={{ uri: props.ownerAvatarUrl }} />
          <View style={styles.info}>
            <Subheading>{props.fullName}</Subheading>
            <Text style={styles.desc} color="textSecondary">
              {props.description}
            </Text>
            <Text style={styles.language} color="white">
              {props.language}
            </Text>
          </View>
        </View>
        <View style={styles.bottomInfoContainer}>
          <BottomItem name="Stars" value={props.stargazersCount} />
          <BottomItem name="Forks" value={props.forksCount} />
          <BottomItem name="Reviews" value={props.reviewCount} />
          <BottomItem name="Rating" value={props.ratingAverage} />
        </View>
        {props.children}
      </Pressable>
    </View>
  );
};

export default RepositoryItem;
