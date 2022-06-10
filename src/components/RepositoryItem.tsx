import { FlatList, Image, StyleSheet, View } from "react-native";
import theme from "../theme";
import { RepositoryData } from "../types";
import Text, { Subheading } from "./Text";
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
    flexDirection: "row",
    marginBottom: 10,
  },
  info: {
    marginLeft: 10,
    flexDirection: "column",
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
  },
});
interface BottomItemProps {
  name: string;
  value: number;
}
const BottomItem: React.FC<BottomItemProps> = ({ name, value }) => {
  return (
    <View style={{ flexGrow: 1 }}>
      <Subheading style={{ textAlign: "center" }}>{value}</Subheading>
      <Text style={{ textAlign: "center" }} color="textSecondary">
        {name}
      </Text>
    </View>
  );
};
const RepositoryItem = (item: RepositoryData) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgAndInfo}>
        <Image style={styles.img} source={{ uri: item.ownerAvatarUrl }} />
        <View style={styles.info}>
          <Subheading>{item.fullName}</Subheading>
          <Text style={styles.desc} color="textSecondary">
            {item.description}
          </Text>
          <Text style={styles.language} color="white">
            {item.language}
          </Text>
        </View>
      </View>
      <View style={styles.bottomInfoContainer}>
        <BottomItem name="Stars" value={item.stargazersCount} />
        <BottomItem name="Forks" value={item.forksCount} />
        <BottomItem name="Reviews" value={item.reviewCount} />
        <BottomItem name="Rating" value={item.ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
