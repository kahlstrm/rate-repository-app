import React from "react";
import {
  Text as NativeText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

import theme, { Theme } from "../../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  colorPrimary: {
    color: theme.colors.primary,
  },
  colorWhite: {
    color: theme.colors.white,
  },
  fontSizeSubheading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontSizeHuge: {
    fontSize: theme.fontSizes.huge,
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
  centerText: {
    textAlign: "center",
  },
});
interface TextProps {
  color?: keyof Theme["colors"];
  fontSize?: keyof Theme["fontSizes"];
  fontWeight?: keyof Theme["fontWeights"];
  style?: StyleProp<TextStyle>;
  center?: boolean;
}
const Text: React.FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  center,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "white" && styles.colorWhite,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize === "huge" && styles.fontSizeHuge,
    fontWeight === "bold" && styles.fontWeightBold,
    center && styles.centerText,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};
export const Subheading: React.FC<TextProps> = (props) => {
  return <Text fontWeight="bold" fontSize="subheading" {...props}></Text>;
};
export default Text;
