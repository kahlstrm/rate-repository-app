import React from "react";
import {
  TextInput as NativeTextInput,
  TextInputProps as NativeTextInputProps,
  StyleSheet,
} from "react-native";
import theme from "../../theme";

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: "white",
    padding: 10,
    margin: 10,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: theme.colors.textSecondary,
  },
  error: {
    borderColor: theme.colors.errorColor,
  },
});
interface TextInputProps extends NativeTextInputProps {
  error: string | false | undefined;
}
const TextInput: React.FC<TextInputProps> = ({ style, error, ...props }) => {
  const textInputStyle = [
    styles.textInput,
    Boolean(error) && styles.error,
    style,
  ];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;
