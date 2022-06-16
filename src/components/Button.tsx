import { Pressable, PressableProps, StyleSheet } from "react-native";
import theme, { Theme } from "../theme";
import Text from "./Text";
interface ButtonProps extends PressableProps {
  name?: string;
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius:4,
    margin: 5,
    paddingVertical:10
  },
  text:{
    textAlign:"center",
  }
});
const Button: React.FC<ButtonProps> = ({ name, onPress }) => {
  const buttonStyle = [styles.button];
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text fontSize="huge" center color="white">{name ? name : "Add text"}</Text>
    </Pressable>
  );
};
export default Button;
