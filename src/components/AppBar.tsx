import { View, StyleSheet, Pressable } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text, { Subheading } from "./Text";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBGColor,
    paddingHorizontal: 10,
    paddingBottom: 20,
    flexDirection: "row",
  },
  tabButton: {
    padding:10
  },
  // ...
});
const AppBarTab: React.FC = (props) => {
  return (
    <Pressable style={styles.tabButton} onPress={() => console.log("pressed")}>
      <Text fontSize="huge" color="white">
        {props.children}
      </Text>
    </Pressable>
  );
};
const AppBar = () => {
  return (
    <View style={styles.container}>
      <AppBarTab>Repositories</AppBarTab>
    </View>
  );
};

export default AppBar;
