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
import { Link, useNavigate } from "react-router-native";
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
const AppBarTab: React.FC<TabProps> = (props) => {
  const content = (
    <View style={styles.tabButton}>
      <Text fontSize="subheading" color="white">
        {props.children}
      </Text>
    </View>
  );
  return props.link ? (
    <Link to={props.link}>{content}</Link>
  ) : (
    <Pressable {...props}>{content}</Pressable>
  );
};
const AppBar = () => {
  const { data, error, loading } = useQuery<{ me: userInfoFromApi }>(USER_INFO);
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();
  const logout = async () => {
    await authStorage.removeAccessToken();

    apolloClient.resetStore();
    navigate("/");
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
