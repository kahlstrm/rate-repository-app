import {
  View,
  StyleSheet,
  Pressable,
  ScrollView,
  PressableProps,
} from "react-native";
import Constants from "expo-constants";
import theme from "../theme";
import Text, { Subheading } from "./Text";
import { Link } from "react-router-native";
import { useApolloClient, useQuery } from "@apollo/client";
import { USER_INFO } from "../graphql/queries";
import { userInfoFromApi } from "../types";
import useAuthStorage from "../hooks/useAuthStorage";
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
interface TabProps extends PressableProps {
  link?: string;
}
const AppBarTab: React.FC<TabProps> = ({ children, link, onPress }) => {
  if (link)
    return (
      <Link to={link} style={styles.tabButton}>
        <Text fontSize="subheading" color="white">
          {children}
        </Text>
      </Link>
    );
  return (
    <Pressable onPress={onPress} style={styles.tabButton}>
      <Text fontSize="subheading" color="white">
        {children}
      </Text>
    </Pressable>
  );
};
const AppBar = () => {
  const { data, error, loading } = useQuery<{ me: userInfoFromApi }>(USER_INFO);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const logout = async () => {
    await authStorage.removeAccessToken();
    
    apolloClient.resetStore();
  };
  
  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <AppBarTab link={"/"}>Repositories</AppBarTab>
        {data?.me ? (
          <AppBarTab onPress={logout}>Sign Out</AppBarTab>
        ) : (
          <AppBarTab link={"/login"}>Sign In</AppBarTab>
        )}
      </ScrollView>
    </View>
  );
};

export default AppBar;
