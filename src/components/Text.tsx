import {
  Text as NativeText,
  StyleSheet,
  StyleProp,
  TextStyle,
} from "react-native";

import theme, { Theme } from "../theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.normal,
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
  fontSizeHuge:{
    fontSize:theme.fontSizes.huge
  },
  fontWeightBold: {
    fontWeight: theme.fontWeights.bold,
  },
});
interface TextProps {
  color?: keyof Theme["colors"];
  fontSize?: keyof Theme["fontSizes"];
  fontWeight?: keyof Theme["fontWeights"];
  style?: StyleProp<TextStyle>;
}
const Text: React.FC<TextProps> = ({
  color,
  fontSize,
  fontWeight,
  style,
  ...props
}) => {
  const textStyle = [
    styles.text,
    color === "textSecondary" && styles.colorTextSecondary,
    color === "primary" && styles.colorPrimary,
    color === "white" && styles.colorWhite,
    fontSize === "subheading" && styles.fontSizeSubheading,
    fontSize=== "huge" && styles.fontSizeHuge,
    fontWeight === "bold" && styles.fontWeightBold,
    style,
  ];

  return <NativeText style={textStyle} {...props} />;
};
export const Subheading: React.FC<{style?:StyleProp<TextStyle>}> = (props) => {
  return (
    <Text
      fontWeight="bold"
      fontSize="subheading"
      {...props}
    ></Text>
  );
};
export default Text;
