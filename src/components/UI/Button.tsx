import React from "react";
import { Pressable, PressableProps, StyleSheet } from "react-native";
import theme from "../../theme";
import Text from "./Text";
interface ButtonProps extends PressableProps {
  text?: string;
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius:4,
    margin: 10,
    paddingVertical:10
  },
  text:{
    textAlign:"center",
  }
});
const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  const buttonStyle = [styles.button];
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text fontSize="huge" center color="white">{text ? text : "Add text"}</Text>
    </Pressable>
  );
};
export default Button;
