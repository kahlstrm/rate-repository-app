import { View, StyleSheet, Pressable, ScrollView } from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text, { Subheading } from "./Text";
import { Link } from "react-router-native";
const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBGColor,
    paddingHorizontal: 10,
    paddingBottom: 10,
    flexDirection: "row",
  },
  tabButton: {
    padding: 10,
  },
  // ...
});
interface TabProps {
  link: string;
}
const AppBarTab: React.FC<TabProps> = ({ children, link }) => {
  return (
    <Link to={link} style={styles.tabButton}>
      <Text fontSize="subheading" color="white">
        {children}
      </Text>
    </Link>
  );
};
const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link={"/"}>Repositories</AppBarTab>
        <AppBarTab link={"/login"}>Sign In</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
