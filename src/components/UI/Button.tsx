import React from "react";
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import theme from "../../theme";
import Text from "./Text";
interface ButtonProps extends PressableProps {
  text?: string;
  style?: StyleProp<ViewStyle>;
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
    margin: 10,
    padding: 10,
  },
  text: {
    textAlign: "center",
  },
});
const Button: React.FC<ButtonProps> = ({ style, text, onPress }) => {
  const buttonStyle = [styles.button, style];
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text fontSize="huge" center color="white">
        {text ? text : "Add text"}
      </Text>
    </Pressable>
  );
};
export default Button;
